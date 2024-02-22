import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem({ item }) {
  return <ExpenseItem {...item} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
