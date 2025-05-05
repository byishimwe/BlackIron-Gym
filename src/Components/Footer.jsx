import React from 'react';
import '../Styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

function Footer() {
  return (
    <footer>
      <nav>
        <div className='logo'>
          <img src="../public/logo.png" alt="Logo image" />
          <h1>BlackIron Gym</h1>
        </div>
        <div className='menu'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="">Trainers</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="contain">
        <div className="social">
          <div className="media">
            <a href="https://www.facebook.com/profile.php?id=61557584350737" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/home" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/ishkpro/" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb6voDyoOS5Wuk51Qvd4SAg%3D%3D" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCNboNdFrHJ3dT-ClEliaGWA" target='_blank' rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-info">
          <p>&copy; 2025 BlackIron Gym. All rights reserved.</p>
          <p>123 Fitness Avenue, Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;