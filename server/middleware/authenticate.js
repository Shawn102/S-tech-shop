const jwt = require("jsonwebtoken");
const { USER } = require("../models/userSchema");
const secretKey = process.env.JWT_KEY;

const authenticate = async (req, res, next) => {
  try {
    const token_data_get = req.cookies.Amazonweb;
    const verifyToken = jwt.verify(token_data_get, secretKey);
    // console.log(verifyToken);
    // find user
    const rootUser = await USER.findOne({
      _id: verifyToken._id,
      "tokens.token": token_data_get,
    });
    // console.log(rootUser);
    if (!rootUser) {
      throw new Error("User not found!");
    }

    req.token = token_data_get;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send({error:"Unauthorised: token not found"});
    // console.log(error);
  }
};

module.exports = authenticate;
