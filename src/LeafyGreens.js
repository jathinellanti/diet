import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeafyGreens.css';
import spinachImage from './assets/spinach.jpg'; // Importing spinach image
import kaleImage from './assets/kale.jpg'; // Importing kale image
import collardGreensImage from './assets/collard-greens.jpg'; // Importing collard greens image
import arugulaImage from './assets/arugula.jpg'; // Importing arugula image
import swissChardImage from './assets/swiss-chard.jpg'; // Importing Swiss chard image
import romaineLettuceImage from './assets/romaine-lettuce.jpg'; // Importing romaine lettuce image
import beetGreensImage from './assets/beet-greens.jpg'; // Importing beet greens image
import watercressImage from './assets/watercress.jpg'; // Importing watercress image
import bokChoyImage from './assets/bok-choy.jpg'; // Importing bok choy image
import mustardGreensImage from './assets/mustard-greens.jpg'; // Importing mustard greens image

const LeafyGreens = () => {
  const navigate = useNavigate();

  return (
    <div className="leafy-greens-page">
      <div className="leafy-greens-container">
        <h2>Top 10 Leafy Greens</h2>

        <div className="leafy-greens-details">
          <div className="leafy-green-section">
            <h3>1. Spinach</h3>
            <img src={spinachImage} alt="Spinach" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in iron and calcium, promoting healthy bones and preventing anemia.</li>
              <li>2. Loaded with antioxidants, which may reduce inflammation.</li>
              <li>3. Contains folate, essential for DNA repair and cellular function.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Contains oxalates, which can contribute to kidney stones in some individuals.</li>
              <li>2. May interfere with blood thinners due to its high Vitamin K content.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>2. Kale</h3>
            <img src={kaleImage} alt="Kale" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Extremely nutrient-dense, packed with vitamins A, K, and C.</li>
              <li>2. May help lower cholesterol levels and support heart health.</li>
              <li>3. Rich in antioxidants like quercetin and kaempferol, which have anti-inflammatory properties.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Contains goitrogens, which may interfere with thyroid function in some individuals.</li>
              <li>2. Raw kale can be tough to digest and may cause digestive discomfort.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>3. Collard Greens</h3>
            <img src={collardGreensImage} alt="Collard Greens" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Rich in fiber, which supports digestive health and prevents constipation.</li>
              <li>2. High levels of Vitamin A, supporting eye health.</li>
              <li>3. Good source of calcium, essential for bone health.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. May cause gas and bloating due to its high fiber content.</li>
              <li>2. Contains goitrogens that may affect thyroid health.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>4. Arugula</h3>
            <img src={arugulaImage} alt="Arugula" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Low in calories but packed with vitamins A and K.</li>
              <li>2. Has a peppery flavor that adds variety to salads and dishes.</li>
              <li>3. Contains glucosinolates, which may help protect against cancer.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Can be too bitter for some palates, especially if eaten raw.</li>
              <li>2. May not be suitable for people on blood thinners due to high Vitamin K content.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>5. Swiss Chard</h3>
            <img src={swissChardImage} alt="Swiss Chard" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Rich in magnesium, supporting muscle and nerve function.</li>
              <li>2. Good source of iron and Vitamin C, helping boost immunity and prevent fatigue.</li>
              <li>3. Low in calories and high in fiber, making it ideal for weight loss diets.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Contains oxalates, which can contribute to kidney stone formation.</li>
              <li>2. Large amounts of Swiss chard can be tough to digest and may cause bloating.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>6. Romaine Lettuce</h3>
            <img src={romaineLettuceImage} alt="Romaine Lettuce" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Rich in water and low in calories, making it hydrating and ideal for weight loss.</li>
              <li>2. Good source of Vitamin C and potassium, supporting heart health.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Lower in nutrient density compared to other leafy greens like spinach and kale.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>7. Beet Greens</h3>
            <img src={beetGreensImage} alt="Beet Greens" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Excellent source of Vitamin K and calcium, supporting bone health.</li>
              <li>2. High in fiber, supporting digestion.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Can be slightly bitter when eaten raw, requiring preparation.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>8. Watercress</h3>
            <img src={watercressImage} alt="Watercress" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Contains more Vitamin C than oranges, boosting the immune system.</li>
              <li>2. Low in calories but packed with nutrients.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Has a strong, peppery taste that may not be suitable for everyone.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>9. Bok Choy</h3>
            <img src={bokChoyImage} alt="Bok Choy" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Rich in vitamins A and C, supporting immune function.</li>
              <li>2. Low in calories and great for adding to stir-fries.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. May interfere with thyroid function in people sensitive to goitrogens.</li>
            </ul>
          </div>

          <div className="leafy-green-section">
            <h3>10. Mustard Greens</h3>
            <img src={mustardGreensImage} alt="Mustard Greens" className="leafy-green-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Contains powerful antioxidants like flavonoids and beta carotene.</li>
              <li>2. Great for detoxifying the liver.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Has a strong, spicy flavor that may not be suitable for all palates.</li>
            </ul>
          </div>
        </div>

        <button className="back-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LeafyGreens;
