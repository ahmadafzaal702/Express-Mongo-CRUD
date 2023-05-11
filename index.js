// express imports
const express = require("express");
const app = express();

// database imports
const dbCon = require("./database/database");
dbCon.connection();

// routes imports
const productRouter = require("./routes/product");
const userRouter = require("./routes/users");

// body parser
// allow backend to read the json data coming from the client
app.use(express.json());

// dotenv impprts
require("dotenv").config();
const PORT = process.env.PORT;

// routes middleware
app.use("/", productRouter.router);
app.use("/", userRouter.router);

// create a new product

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
