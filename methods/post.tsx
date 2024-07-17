import React, { useState, useEffect } from 'react';
import { ApiService } from '@/../lib/axios-http';
interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ApiService.get<Product[]>('products')
     .then((response) => {
        setProducts(response);
      })
     .catch((error) => {
        console.error('Erro ao obter produtos:', error);
      });
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name} - R$ {product.price}</li>
      ))}
    </ul>
  );
};

export default ProductList;