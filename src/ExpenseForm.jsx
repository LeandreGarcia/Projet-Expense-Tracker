import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

const ExpenseForm = ({ onSubmit, predefinedCategories, predefinedCurrencies }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <input {...register('description', { required: true })} placeholder="Description" />
        {errors.description && <span>Description is required</span>}
      </div>
      <div className="input-group">
        <input {...register('amount', { required: true })} type="number" placeholder="Amount" />
        {errors.amount && <span>Amount is required</span>}
      </div>
      <div className="input-group">
        <select {...register('category', { required: true })}>
          <option value="">Select a category</option>
          {predefinedCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        {errors.category && <span>Category is required</span>}
      </div>
      <div className="input-group">
        <select {...register('currency')}>
          {predefinedCurrencies.map((currency, index) => (
            <option key={index} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;










