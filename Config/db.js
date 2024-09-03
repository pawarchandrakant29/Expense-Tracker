const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Expense-tracker")
  .then(() => console.log("Database Connected Successfully...."))
  .catch((err) => {
    console.log("Database Connection Failed..!", err);
  });
