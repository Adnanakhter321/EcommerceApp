import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import ProductCard from '../molecules/ProductCard';

type Product = {
  id: string;
  name: string;
  price: string;
};

type ProductListProps = {
  products: Product[];
  onDelete: (id: string) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  const renderProduct = useMemo(() => {
    return ({ item }: { item: Product }) => (
      <ProductCard name={item.name} price={item.price} onDelete={() => onDelete(item.id)} />
    );
  }, [products]);

  return <FlatList data={products} renderItem={renderProduct} keyExtractor={(item) => item.id} />;
};

export default ProductList;
