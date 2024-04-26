import React, { useState, useMemo } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filters, setFilters] = useState({ category: '', currency: '' });

  const predefinedCategories = ["Groceries", "Utilities", "Entertainment"];
  const predefinedCurrencies = ["USD", "EUR", "GBP"];

  const addExpense = expense => {
    const newExpense = { ...expense, id: nextId };
    setExpenses([...expenses, newExpense]);
    setNextId(nextId + 1);
    if (!categories.includes(expense.category)) {
      setCategories([...categories, expense.category]);
    }
    if (!currencies.includes(expense.currency)) {
      setCurrencies([...currencies, expense.currency]);
    }
  };

  const filteredExpenses = useMemo(() => {
    let filtered = expenses;
    if (filters.category !== "") {
      filtered = filtered.filter(expense => expense.category === filters.category);
    }
    if (filters.currency !== "") {
      filtered = filtered.filter(expense => expense.currency === filters.currency);
    }
    return filtered;
  }, [expenses, filters]);

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={addExpense} predefinedCategories={predefinedCategories} predefinedCurrencies={predefinedCurrencies} />
      <ExpenseList expenses={filteredExpenses} categories={categories} currencies={currencies} onDeleteExpense={deleteExpense} setFilters={setFilters} />
    </div>
  );
};

export default App;








