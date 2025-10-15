import React, { useState } from "react";

const ProductList = () => {
  // Step 1: Define products
  const products = [
    { id: 1, name: "Notebook", price: 10, category: "Stationery" },
    { id: 2, name: "Ball Pen", price: 5, category: "Stationery" },
    { id: 3, name: "Laptop Bag", price: 50, category: "Bags" },
    { id: 4, name: "Headphones", price: 100, category: "Electronics" },
    { id: 5, name: "Mouse", price: 25, category: "Electronics" },
  ];

  // Step 2: Categories
  const categories = ["All", "Stationery", "Bags", "Electronics"];

  // Step 3: useState for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 4: Filter logic
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2>🛍️ Product List with Category Filter</h2>

      {/* Dropdown Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category" style={{ marginRight: "10px" }}>
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
