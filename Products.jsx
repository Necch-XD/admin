// src/components/Products.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  // Fetch products from the backend API when the component is mounted
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // API endpoint to fetch products
        setProducts(response.data); // Set products data in the state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Function to delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`); // API endpoint to delete product
      setProducts(products.filter(product => product._id !== id)); // Remove product from state after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th> {/* Add a column for actions (edit/delete) */}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}> {/* Use _id from MongoDB as the unique key */}
              <td>{product._id}</td>
              <td>{product.name}</td> {/* Assuming product has a "name" field */}
              <td>{product.price}</td> {/* Assuming product has a "price" field */}
              <td>
                <button onClick={() => deleteProduct(product._id)}>Delete</button> {/* Add delete button */}
                {/* You can add an "Edit" button here as well to handle updating products */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
