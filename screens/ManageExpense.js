import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';

const ManageExpense = ({ route, navigation }) => {
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [editedExpenseId, navigation]);

  function deleteExpenseHandler() {
    deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function CancelHandler() {
    navigation.goBack();
  }
  function ConfirmHandler() {
    if (isEditing) {
      updateExpense(editedExpenseId, {
        description: 'Update',
        amount: 4.6,
        date: new Date('2024-07-20'),
      });
    } else {
      addExpense({
        description: 'Test',
        amount: 456,
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode={'flat'} onPress={CancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={ConfirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
