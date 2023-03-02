const Products = require("./models/productsSchema");
const productdata = require("./constant/productdata");

const DefaultData = async () => {
  try {
    await Products.deleteMany();
    const storeData = await Products.insertMany(productdata);
    console.log(storeData);
  } catch (error) {
    console.log("Error: " + error.message);
  }
};

module.exports = DefaultData;
