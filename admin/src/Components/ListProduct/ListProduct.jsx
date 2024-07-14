
import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_7231114.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });
    fetchAllProducts();
  };

  const fetchAllProducts = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div className="list-product">

            <h1>All Product details</h1>
            <div className="listproduct-format-main">
                <h3>Product</h3>
                <h3>Product Name</h3>
                <h3>Brand</h3>
                <h3>Old Price</h3>
                <h3>New Price</h3>
                <h3>Category</h3>
                <h3>Remove</h3>
            </div>
      {/* Your existing JSX structure */}
      {allProducts.map((product) => (
        <div key={product.id}>
          <div className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>LKR {product.old_price}</p>
            <p>LKR {product.new_price}</p>
            <p>{product.category}</p>
            <img
              onClick={() => {
                removeProduct(product.id);
              }}
              src={cross_icon}
              alt=""
              className="listproduct-remove-icon"
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
