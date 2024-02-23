import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod={'Total'}
      fallBack={'No expenses registered.'}
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
