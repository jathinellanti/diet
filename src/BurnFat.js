// src/BurnFat.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for back navigation
import './BurnFat.css'; // Import CSS styles

const BurnFat = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="burn-fat-page">
      <div className="burn-fat-container">
        <h2>Foods and Diets to Burn Fat</h2>
        <p>Here are the best foods and diets to help you burn fat effectively.</p>
        
        <div className="food-list">
          <h3>Top Foods for Burning Fat</h3>
          <ul>
            <li>1. Fatty Fish (Salmon, Mackerel)</li>
            <li>2. Green Tea</li>
            <li>3. Coconut Oil</li>
            <li>4. Eggs</li>
            <li>5. Apple Cider Vinegar</li>
            <li>6. Avocados</li>
            <li>7. Chili Peppers</li>
            <li>8. Leafy Greens</li>
          </ul>
        </div>
        
        <div className="diet-tips">
          <h3>Diet Tips for Burning Fat</h3>
          <p>1. Eat more protein-rich foods.</p>
          <p>2. Cut back on refined carbs.</p>
          <p>3. Increase fiber intake.</p>
          <p>4. Drink water before meals.</p>
          <p>5. Get quality sleep.</p>
        </div>
        
        {/* Back button to navigate back */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BurnFat;
