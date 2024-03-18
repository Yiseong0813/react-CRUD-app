import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';
function App() {

  
  
  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1500},
    { id: 2, charge: '교통비', amount: 3000}
  ])

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  
  const[id, setId] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const expense = expenses.find(expense => expense.id === id)
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount); 
    setId(id);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    console.log(id);

    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    setExpenses(newExpenses);

  }
  
  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      if(isEditing) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount}: item;
        })

        setExpenses(newExpenses);
        setIsEditing(false);

      } else {
      const newExpense = {
        id: crypto.randomUUID(),
        charge,
        amount
      }

      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
    }
      setCharge('');
      setAmount(0);


    } else {
      alert('')
    }
  }

  return (
    <main>
      <h1>
        예산 계산기
      </h1>

      <div>
        <ExpenseForm isEditing={isEditing} handleSubmit={handleSubmit} handleAmount={handleAmount} charge={charge} handleCharge={handleCharge} amount={amount} />
      </div>

      <div>
        <ExpenseList handleEdit={handleEdit} handleDelete={handleDelete} initialExpenses={expenses}/>
      </div>

      <div>
        <p>
          총지출: 
          <span>
            {
              expenses.reduce((acc, curr) => {
                 return acc += curr.amount
              }, 0)
            }
            원</span>
        </p>
      </div>
    </main>
  );
}



export default App;
