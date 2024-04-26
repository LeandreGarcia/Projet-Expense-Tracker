import React from 'react';
import './index.css';

const ExpenseList = ({ expenses, categories, currencies, onDeleteExpense, setFilters }) => {
  const handleDelete = id => {
    onDeleteExpense(id);
  };

  return (
    <div>
      <select onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, category: e.target.value }))}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select onChange={(e) => setFilters(prevFilters => ({ ...prevFilters, currency: e.target.value }))}>
        <option value="">All Currencies</option>
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount} {expense.currency}</td>
              <td>{expense.category}</td>
              <td><button onClick={() => handleDelete(expense.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;








