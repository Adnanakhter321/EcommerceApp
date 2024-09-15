import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import ProductList from '../components/organisms/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectProducts } from '../reduxjs/slices/ProductSlice';

const MainPage: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddProduct = useCallback(() => {
    if (name && price) {
      dispatch(addProduct({ name, price }));
      setName('');
      setPrice('');
    }
  }, [name, price]);

  const handleDeleteProduct = useCallback((id: string) => {
    dispatch(deleteProduct(id));
  }, []);

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={setName} placeholder="Product Name" />
      <Input value={price} onChangeText={setPrice} placeholder="Product Price" />
      <Button title="Add Product" onPress={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default MainPage;
