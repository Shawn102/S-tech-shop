const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  totalItem: Number,
  totalPrice: Number,
  purchaseTime: String,
  paymentCompleted: String,
  purchaseDetails: Object,
  cartItems: Array,
});

const PURCHASE = new mongoose.model("PURCHASE", purchaseSchema);

module.exports = {
  purchaseSchema: purchaseSchema,
  PURCHASE: PURCHASE,
};
