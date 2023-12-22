import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className= "header-top">
        <div className="header-top-menu">
          <i className="bi bi-list"></i>
        </div>
        <div className="header-top-phone">
          <i className="bi bi-telephone-fill">123-123-123</i>
        </div>
        <div className="header-top-text">Welcome To Online Book Store</div>
        <div className="header-top-link">
          <i className="bi bi-person-fill">Login</i>
        </div>

      </div>
      <div className= "header-middle">
      <div className= "header-middle-log">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
        
        
        </div>
        <div className="header-middle-search-box">
          <input className="header-middle-search-input" type="search" placeholder="Search" />
          <i className ="bi bi-search"></i>
        </div>
        <div className="header-middle-cart-wrapper">
          <i className="bi bi-cart2"></i>
        </div>
      </div>
    </header>
    // <header className="header">
    //     <HeaderTop toggle={toggle} setToggle={setToggle} />
    //     <HeaderMiddle />
    //     <Navbar setToggle={setToggle} toggle={toggle} />
    // </header>
  );
};

export default Header;
