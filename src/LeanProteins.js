import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeanProteins.css';
import chickenImage from './assets/chicken.jpg'; // Importing chicken image
import turkeyImage from './assets/turkey.jpg'; // Importing turkey image
import fishImage from './assets/fish.jpg'; // Importing fish image
import tofuImage from './assets/tofu.jpg'; // Importing tofu image
import lentilsImage from './assets/lentils.jpg'; // Importing lentils image
import chickpeasImage from './assets/chickpeas.jpg'; // Importing chickpeas image
import quinoaImage from './assets/quinoa.jpg'; // Importing quinoa image
import greekYogurtImage from './assets/greek-yogurt.jpg'; // Importing Greek yogurt image
import eggsImage from './assets/eggs.jpg'; // Importing eggs image
import cottageCheeseImage from './assets/cottage-cheese.jpg'; // Importing cottage cheese image

const LeanProteins = () => {
  const navigate = useNavigate();

  return (
    <div className="lean-proteins-page">
      <div className="lean-proteins-container">
        <h2>Top Lean Proteins</h2>

        <div className="lean-proteins-details">
          <div className="lean-protein-section">
            <h3>1. Chicken Breast</h3>
            <img src={chickenImage} alt="Chicken Breast" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in protein, low in fat, making it great for muscle building.</li>
              <li>2. Versatile and can be cooked in various ways.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Can be dry if overcooked.</li>
              <li>2. Skin contains higher fat, which some may want to avoid.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>2. Turkey</h3>
            <img src={turkeyImage} alt="Turkey" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Leaner than red meat, rich in protein.</li>
              <li>2. Contains B vitamins that support metabolism.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Can be tough if not cooked properly.</li>
              <li>2. Some processed turkey products can be high in sodium.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>3. Fish (e.g., Salmon, Tuna)</h3>
            <img src={fishImage} alt="Fish" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in omega-3 fatty acids, promoting heart health.</li>
              <li>2. Excellent source of protein with essential nutrients.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Some fish may contain mercury; choose wisely.</li>
              <li>2. Can be expensive compared to other protein sources.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>4. Tofu</h3>
            <img src={tofuImage} alt="Tofu" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Great plant-based protein source for vegetarians/vegans.</li>
              <li>2. Contains all essential amino acids and is low in calories.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Texture can be off-putting for some.</li>
              <li>2. May cause digestive issues in large amounts.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>5. Lentils</h3>
            <img src={lentilsImage} alt="Lentils" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in fiber, promoting digestive health.</li>
              <li>2. Packed with protein and low in fat.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. May cause gas or bloating in some individuals.</li>
              <li>2. Requires cooking time, which may be inconvenient.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>6. Chickpeas</h3>
            <img src={chickpeasImage} alt="Chickpeas" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Rich in protein and fiber, great for satiety.</li>
              <li>2. Versatile in cooking; can be added to salads, soups, and more.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. May cause digestive discomfort for some.</li>
              <li>2. Can be high in calories if consumed in large quantities.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>7. Quinoa</h3>
            <img src={quinoaImage} alt="Quinoa" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Complete protein source, containing all nine essential amino acids.</li>
              <li>2. High in fiber and minerals like magnesium and phosphorus.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Can be pricey compared to other grains.</li>
              <li>2. Some may have difficulty digesting saponins present on the surface.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>8. Greek Yogurt</h3>
            <img src={greekYogurtImage} alt="Greek Yogurt" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in protein and probiotics, promoting gut health.</li>
              <li>2. Versatile; can be used in smoothies, dressings, and desserts.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Some varieties can be high in sugar.</li>
              <li>2. Dairy may not be suitable for those with lactose intolerance.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>9. Eggs</h3>
            <img src={eggsImage} alt="Eggs" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. Excellent source of high-quality protein and essential nutrients.</li>
              <li>2. Versatile and can be prepared in various ways.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. High in cholesterol; moderation may be needed for some.</li>
              <li>2. May cause allergic reactions in some individuals.</li>
            </ul>
          </div>

          <div className="lean-protein-section">
            <h3>10. Cottage Cheese</h3>
            <img src={cottageCheeseImage} alt="Cottage Cheese" className="lean-protein-image" />
            <h4>Advantages:</h4>
            <ul>
              <li>1. High in protein and low in fat, making it ideal for weight loss.</li>
              <li>2. Contains calcium, promoting bone health.</li>
            </ul>
            <h4>Disadvantages:</h4>
            <ul>
              <li>1. Some may find the texture unappealing.</li>
              <li>2. May contain added sodium in some varieties.</li>
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

export default LeanProteins;
