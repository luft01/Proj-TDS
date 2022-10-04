import React, { useState } from 'react';
import Expenses from './components/Controller/index';
import Login from './components/Login/Login';
import NewSpending from './components/Spending/NewSpending';
import Context from './components/Context/Context';
import Routers from './router';
import Counter from './components/Context/Counter';
import Form from './components/Form/form';
import { Provider } from 'react-redux';
import Listem from './components/Redux/Listem/index';
import store from './store/index'
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [total, setTotal] = useState('Nome');
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  /* return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Lets's get started"),
    React.createElement(expenses, { items: expenses })
  ); */

  return (
     /* <div>
      <NewSpending onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>  */

    /* < Context.Provider value={[total, setTotal]} >
      <div>
        <p>App.js: {total}</p>
        <p> Conunter.js :  <Counter /></p>

      </div>
    </Context.Provider > 
     /* <Form /> */
     < div >
      <Login />

    </div > 
     /* <Provider store={store} >
      <div>
        <Listem />
      </div>
    </Provider> */
  );
}

export default App;
