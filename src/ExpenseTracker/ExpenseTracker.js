import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function ExpenseTracker({ addExpense }) {
  const [sum, setSum] = useState('');
  const [name, setName] = useState('');
  const handleAddExpense = () => {
    if (name && sum) {
      addExpense(name, sum);
      setName('');  
      setSum('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Сума" 
        value={sum} 
        onChangeText={setSum}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Опис" 
        value={name} 
        onChangeText={setName}
      />
      <Button 
        title="Додати витрату" 
        onPress={handleAddExpense} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 5,
  },
  input: {
    height: 35,
    borderColor: 'black', 
    borderWidth: 1,
    width: '40%',
    textAlign: 'center',
  },
});
