const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
