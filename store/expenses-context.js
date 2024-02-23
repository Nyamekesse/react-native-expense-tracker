import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 56.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 6.4,
    date: new Date('2024-03-14'),
  },
  {
    id: 'e3',
    description: 'A bag',
    amount: 36.4,
    date: new Date('2024-04-28'),
  },
  {
    id: 'e4',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e5',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e6',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e7',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e8',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e9',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e10',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e11',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
  {
    id: 'e12',
    description: 'A Shirt',
    amount: 16.4,
    date: new Date('2024-12-19'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatableExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expensesData) {
    dispatch({ type: 'ADD', payload: expensesData });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(id, expensesData) {
    dispatch({ type: 'UPDATE', payload: { id, expensesData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
