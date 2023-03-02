const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb atlas connected to your app!");
  })
  .catch((err) => {
    console.log("error" + err.message);
  });
module.exports = mongoose;
