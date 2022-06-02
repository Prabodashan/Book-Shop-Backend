const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

const router = require("./routes/book-routes");

dotenv.config();
app.use(cors());

// Middlewares
app.use(express.json());

app.use("/books", router); // localhost:5000/books

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfully!"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Backend server is running");
});
