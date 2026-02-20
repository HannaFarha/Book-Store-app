import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className={`navbar ${toggle ? "active" : ""}`}>
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          <i className="bi bi-house-door" style={{ marginLeft: '8px' }}></i>
          Home
        </Link>
        <Link
          to="/shop"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          <i className="bi bi-grid" style={{ marginLeft: '8px' }}></i>
          Shop
        </Link>
        <Link
          to="/trending"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          <i className="bi bi-graph-up-arrow" style={{ marginLeft: '8px' }}></i>
          Trending
        </Link>
        <Link
          to="/about"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          <i className="bi bi-info-circle" style={{ marginLeft: '8px' }}></i>
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          <i className="bi bi-envelope" style={{ marginLeft: '8px' }}></i>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;