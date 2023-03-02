require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("./db/conn");
const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(cookieParser(""));
app.use(router);

const port = process.env.PORT || 8005;
app.listen(port, () => {
  console.log(`Your app is running on port ${port}`);
});
// DefaultData();
