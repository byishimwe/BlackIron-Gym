import { NavLink as Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <nav>
      <div className="logo">
        <img src="../public/logo.png" alt="Logo image" />
        <h1>BlackIron Gym</h1>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;