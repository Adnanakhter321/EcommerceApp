import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

type ProductCardProps = {
  name: string;
  price: string;
  onDelete: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text content={name} />
      <Text content={price} />
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductCard;
