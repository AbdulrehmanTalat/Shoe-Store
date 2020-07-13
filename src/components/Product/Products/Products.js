import React, { useContext } from 'react';
import GlobalContext from '../../../state/GlobalContext';

import { useParams } from 'react-router-dom';

export const Products = () => {
  const { products } = useContext(GlobalContext);
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  console.log(product);
  return (
    <div>
      <h2>
        {product.name}
      </h2>
      <img src={product.imageURL} alt={product.name} />
    </div>
  )
}
export default Products;
