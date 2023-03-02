const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { purchaseSchema } = require("./purchaseSchema");
const secretKey = process.env.JWT_KEY;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email address");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 11,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  purchasehistory: [purchaseSchema],
});


// [
//   {
//     token: {
//       type: String,
//       required: true,
//     },
//   },
// ],
// this hashing method should define before creating model
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bycrypt.hash(this.password, 10);
    this.cpassword = await bycrypt.hash(this.cpassword, 10);
  }
  next();
});

// //   generate auth token
// userSchema.methods.generateAuthtoken = async function () {
//   try {
//     let token_creating = jwt.sign({ _id: this._id }, secretKey);
//     this.tokens = this.tokens.concat({ token: token_creating });
//     await this.save();
//     return token_creating;
//   } catch (error) {
//     console.log(error);
//   }
// };

// generating tokens
userSchema.methods.generateToken = async function () {
  try {
    const generate_token = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({ token: generate_token });
    await this.save();
    return generate_token;
  } catch (error) {
    console.log(error);
  }
};

// add to cart middleware
userSchema.methods.addcartdata = async function (cart) {
  try {
    this.carts = this.carts.concat(cart);
    await this.save();
    return this.carts;
  } catch (error) {
    console.log(error);
  }
};
// end of writing middleware of adding to cart

const USER = new mongoose.model("USER", userSchema);

module.exports = {
  userSchema: userSchema,
  USER: USER,
};

// module.exports = userSchema;
// module.exports = USER;
