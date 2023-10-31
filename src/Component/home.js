import React from 'react';
 
import './../App.css'

function Home() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      image: 'product3.jpg',
    } 
  ];

   // Function to chunk the products array into smaller arrays of size 'size'
   const chunkArray = (arr, size) => {
    const chunkedArray = [];
    while (arr.length) {
      chunkedArray.push(arr.splice(0, size));
    }
    return chunkedArray;
  };

  // Chunk the products array into rows of 5 products each
  const chunkedProducts = chunkArray(products, 5);


  return (
    <div className="home-container">
      <h1>Welcome to our E-commerce Store!</h1>
      <p>Explore our wide range of products and start shopping.</p>

      <h2>Featured Products</h2>
      <div className="container">
        {chunkedProducts.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((product) => (
              <div key={product.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;