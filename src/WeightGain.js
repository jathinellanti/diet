// src/WeightGain.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for back navigation
import './WeightGain.css'; // Import your CSS styles

const WeightGain = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="weight-gain-page">
      <div className="weight-gain-container">
        <h2>Weight Gain Diet Plan</h2>
        <p>Discover the best foods to help you gain weight in a healthy way.</p>
        
        <div className="food-list">
          <h3>Top Foods for Weight Gain</h3>
          <ul>
            <li>1. Whole Milk</li>
            <li>2. Red Meats (Steak, Beef)</li>
            <li>3. Starchy Vegetables (Potatoes, Sweet Potatoes)</li>
            <li>4. Whole Grains (Oats, Brown Rice)</li>
            <li>5. Nut Butters (Peanut Butter, Almond Butter)</li>
            <li>6. Full-Fat Yogurt</li>
            <li>7. Healthy Oils (Olive Oil, Coconut Oil)</li>
            <li>8. Protein Smoothies</li>
          </ul>
        </div>
        
        <div className="diet-tips">
          <h3>Diet Tips for Weight Gain</h3>
          <p>1. Eat more calories than you burn.</p>
          <p>2. Increase your protein intake.</p>
          <p>3. Choose nutrient-dense foods.</p>
          <p>4. Eat more frequently, 5-6 small meals a day.</p>
          <p>5. Add healthy fats to your diet.</p>
        </div>

        {/* Back button to navigate back */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default WeightGain;
