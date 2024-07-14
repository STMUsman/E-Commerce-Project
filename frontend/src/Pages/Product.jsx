
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts';
 

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // Debugging logs
  console.log('all_product:', all_product);
  console.log('productId:', productId);

  if (!all_product || all_product.length === 0) {
    return <div>Loading product data...</div>;
  }

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Relatedproducts />
      {/* <Orderconfirm /> */}
      {/* <Routes>
      <Route path='/orderconfirm' element={<Orderconfirm />}/>
      </Routes> */}

    </div>
  );
};

export default Product;
