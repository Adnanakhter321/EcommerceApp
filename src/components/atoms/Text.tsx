import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

type TextProps = {
  content: string;
};

const Text: React.FC<TextProps> = ({ content }) => {
  return <RNText style={styles.text}>{content}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color:'black'
  },
});

export default Text;
