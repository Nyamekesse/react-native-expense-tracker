import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

const RecentExpenses = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      setExpenses(expenses);
    }

    getExpenses();
  }, []);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  if (isFetching) {
    return <LoadingOverlay />;
  }
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
