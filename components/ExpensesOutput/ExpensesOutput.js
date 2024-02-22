import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
