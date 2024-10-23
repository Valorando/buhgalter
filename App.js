import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Expense from './src/Expense/Expense';
import ExpenseTracker from './src/ExpenseTracker/ExpenseTracker';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (name, sum) => {
    setExpenses([...expenses, { name, sum }]);
  };

  return (
    <View style={styles.container}>
      <ExpenseTracker addExpense={addExpense} />
      <Expense expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
