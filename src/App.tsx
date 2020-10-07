import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>BUDGET APP</h3>
      <BudgetForm/>
      <ExpensesForm/>
      <DashBoard/>      
    </div>
  );
}

function BudgetForm() {
  return (
    <div>
      <form>
        <label>
          Please enter your budget
        </label>
        <input type="number"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function ExpensesForm() {
  return (
    <div>
      <form>
        <label>
          Please enter your expense
        </label>
        <input type="text"></input>
        <label>
          Please enter your expense amount
        </label>
        <input type="number"></input>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

function DashBoard() {
  return (
    <div><h2>DashBoard Section</h2></div>
  );
}

export default App;
