import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 Days'}
      fallBack={'No expenses registered for the last 7 days'}
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
