import axios from 'axios';

const BACKEND_URL = 'https://expense-tracker-9c02e-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const { data } = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateCloudExpense(id, expenseData) {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export function deleteCloudExpense(id) {
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
