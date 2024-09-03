const Transaction = require("../Modules/transacition");

const defaultController = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    const totalIncome = transactions.reduce((sum, transaction) => {
      return transaction.type === "Income" ? sum + transaction.amount : sum;
    }, 0);

    const totalExpense = transactions.reduce((sum, transaction) => {
      return transaction.type === "Expense" ? sum + transaction.amount : sum;
    }, 0);

    const totalSavings = totalIncome - totalExpense;

    res.render("index", {
      transactions,
      totalIncome,
      totalExpense,
      totalSavings,
    });
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).send("Internal Server Error");
  }
};

const newaddController = (req, res) => {
  res.render("addTransaction", { transaction: {} });
};

const editTransactionController = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.render("addTransaction", { transaction });
  } catch (err) {
    console.error("Error fetching transaction for edit:", err);
    res.status(500).send("Internal Server Error");
  }
};

const updateTransactionController = async (req, res) => {
  const { type, category, amount, description, date } = req.body;
  try {
    if (req.params.id) {
      await Transaction.findByIdAndUpdate(req.params.id, {
        type,
        category,
        amount,
        description,
        date,
      });
    } else {
      await Transaction.create({ type, category, amount, description, date });
    }
    res.redirect("/");
  } catch (err) {
    console.error("Error updating/creating transaction:", err);
    res.status(500).send("Internal Server Error");
  }
};

const deleteTransactionController = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting transaction:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  defaultController,
  newaddController,
  editTransactionController,
  updateTransactionController,
  deleteTransactionController,
};
