const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const { USER } = require("../models/userSchema");
const { userSchema } = require("../models/userSchema");
const { PURCHASE } = require("../models/purchaseSchema");
const bycrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// Register
router.post("/register", async (req, res) => {
  const { fname, lname, email, mobile, password, cpassword } = req.body;

  try {
    const preuser = await USER.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This user is already exist!" });
    } else if (password !== cpassword) {
      res.status(403).json({ error: "password and cpassword not matched!" });
    } else {
      const finalUser = new USER({
        fname,
        lname,
        email,
        mobile,
        password,
        cpassword,
      });
      const storedata = await finalUser.save();
      res.status(201).send(storedata);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//  My own login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password + " this is for check");

  try {
    const loginUser = await USER.findOne({ email: email });
    if (loginUser) {
      const isMatchedPassword = await bycrypt.compare(
        password,
        loginUser.password
      );
      // console.log(isMatchedPassword + " what the fuck");
      // Here  generating the cookies
      const gen_token = await loginUser.generateToken();
      res.cookie("Amazonweb", gen_token, {
        expires: new Date(Date.now() + 86400000),
      });
      if (!isMatchedPassword) {
        res.status(401).send("Password not matched!");
      } else {
        res
          .status(201)
          .send({ message: "Login Successful!", tokens: loginUser.tokens });
      }
    } else {
      res.status(401).send("Email not matched!");
    }
  } catch (error) {
    res.status(400).send("Invalid details");
  }
});

// logout
router.get("/logout", authenticate, (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((elem) => {
      return elem.token !== req.token;
    });
    res.clearCookie("Amazonweb", { path: "/" });
    req.rootUser.save();
    res.status(201).send(req.rootUser.tokens);
    // console.log("user logout successfully!");
  } catch (error) {
    console.log(error);
  }
});
router.get("/getuserdetails", authenticate, async (req, res) => {
  try {
    const findUser = await USER.findOne({ _id: req.userID }).select(
      "-cpassword -password -purchasehistory -tokens"
    );
    res.status(201).send(findUser);
  } catch (error) {
    res.status(404).send(error);
  }
});
// getting purchaseHistory data
router.get("/getpurchasehistory", authenticate, async (req, res) => {
  const FindUser = await USER.findOne({ _id: req.userID }).select("purchasehistory");
  if (FindUser) {
    res.status(201).send(FindUser);
  } else {
    res.status(401).send("Error occured");
  }
});
// adding purchasing cart data to db
router.post("/purchase", authenticate, async (req, res) => {
  // find item
  const { bal, myAllDataForbackend, cartItems, totalItem, totalPrice } =
    req.body;

  const Purchase = new PURCHASE({
    totalItem: totalItem,
    totalPrice: totalPrice,
    purchaseDetails: myAllDataForbackend,
    cartItems: cartItems,
    purchaseTime: bal.bal,
    purchaseCompleted: bal.sal,
  });
  console.log(Purchase);

  // findUser
  const findUser = await USER.findOne({ _id: req.userID });
  // // if userFound then
  if (findUser) {
    if (bal.sal === "COMPLETED") {
      const UpdataHistory = await findUser.purchasehistory.push(Purchase);
      findUser.save();
      res.status(201).send({
        message: "Purchase history updated to db!",
        data: UpdataHistory,
      });
    } else {
      res.status(401).send({
        error: "Purchase information is missing! can't complete the action",
      });
    }
  } else {
    res.status(401).send({ error: "User not found!" });
  }
});

// remove purchase history
router.post("/deletesinglehistory/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  USER.findOneAndUpdate(
    { _id: req.userID },
    { $pull: { purchasehistory: { _id: id } } },
    (err) => {
      if (!err) {
        res.status(201).send("Successfully deleted the item from your db.");
      } else {
        res.status(401).send(err);
      }
    }
  );
});

// getting cart data
router.get("/getSingleItem/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id + "fucked up!");
  Products.findOne({ id: id }, (err, foundProduct) => {
    if (!err) {
      res.status(201).send(foundProduct);
      console.log(foundProduct);
    } else {
      res.status(400).send(err);
    }
  });
});

// router.get("/validateuser", authenticate, async (req, res) => {
//   try {
//     const validuserone = await USER.findOne({ _id: req.userID });
//     res.status(201).send(validuserone);
//   } catch (error) {
//     console.log(error);
//   }
// });

// here we going work on Products model
router.get("/getproducts", async (req, res) => {
  try {
    const productdata = await Products.find({});
    res.status(201).send(productdata);
  } catch (error) {
    console.log("error " + error);
    res.status(400).send("Error: " + error);
  }
});

router.get("/getproducts/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const findMatchedCategories = await Products.find({ category: category });
    res.status(201).send(findMatchedCategories);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    const individual = await Products.findOne({ id: id });
    res.status(201).send(individual);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get deal of the day items
router.get("/dealoftheday", async (req, res) => {
  try {
    const getDealOfTheDayProduct = await Products.find({
      tagline: "deal of the day",
    });
    res.status(201).send(getDealOfTheDayProduct);
  } catch (error) {
    res.status(401).send(error);
  }
});

// find all the category
router.get("/findallcategory", async (req, res) => {
  try {
    const filter = await Products.find().distinct("category");
    res.status(201).send(filter);
  } catch (error) {
    res.status(401).send(error);
  }
});

// remove item from carts
// router.delete("/remove/:id", authenticate, async (req, res) => {
//   try {
//     const { id } = req.params;
//     req.rootUser.carts = req.rootUser.carts.filter((singleItem) => {
//       return singleItem.id !== id;
//     });
//     req.rootUser.save();
//     res.status(201).send(req.rootUser);
//   } catch (error) {
//     res.status(400).send(error);
//     console.log(error);
//   }
// });

module.exports = router;
