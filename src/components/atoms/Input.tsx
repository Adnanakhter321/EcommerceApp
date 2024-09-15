import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={"black"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    color:'black'
  },
});

export default Input;
