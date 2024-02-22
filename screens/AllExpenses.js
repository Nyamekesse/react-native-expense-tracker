import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod={'Total'} />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
