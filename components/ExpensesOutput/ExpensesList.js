import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function renderExpenseItem({ item }) {
  return <Text>{item.description}</Text>;
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
