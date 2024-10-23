import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Expense({ expenses }) {
  return (
    <View style={styles.container}>
      {expenses.map((expense, index) => (
        <Text key={index} style={styles.text}>
          {expense.sum}   {expense.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',  
    marginTop: 20,
    paddingLeft: 15,  
  },
  text: {
    fontSize: 18,  
    marginTop: 15,  
    marginBottom: 15,
  },
});
