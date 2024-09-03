const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chandrakantpawar590:8nyVDvWOy6z9i371@cluster0.w9z8e.mongodb.net/Expense-tracker"
  )
  .then(() => console.log("Database Connected Successfully...."))
  .catch((err) => {
    console.log("Database Connection Failed..!", err);
  });
