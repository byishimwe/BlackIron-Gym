import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="logo flex items-center space-x-3">
          <img src="../public/logo.png" alt="Logo" className="w-16 h-16 object-cover" />
          <h1 className="text-2xl font-semibold">BlackIron Gym</h1>
        </div>
        <div className="menu">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/classes" className="hover:text-blue-400">Classes</a></li>
            <li><a href="#" className="hover:text-blue-400">Trainers</a></li>
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="contain max-w-7xl mx-auto px-6 mt-8">
        <div className="social mb-6">
          <div className="media flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61557584350737" target='_blank' rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/home" target='_blank' rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/ishkpro/" target='_blank' rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ishimwe-prince-arnaud-601425338/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb6voDyoOS5Wuk51Qvd4SAg%3D%3D" target='_blank' rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCNboNdFrHJ3dT-ClEliaGWA" target='_blank' rel="noopener noreferrer" className="text-xl hover:text-blue-600">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-info text-center text-sm mt-6">
          <p>&copy; 2025 BlackIron Gym. All rights reserved.</p>
          <p>123 Fitness Avenue, Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;