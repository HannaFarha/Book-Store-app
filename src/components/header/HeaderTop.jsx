import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      {/* زر القائمة للهواتف */}
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
      </div>

      <div className="header-top-phone">
        <i className="bi bi-headset"></i> +966 50 000 0000
      </div>
      
      <div className="header-top-text">Trending Products & Smart Solutions</div>
      
      {/*<Link to="/login" className="header-top-link">
        <i className="bi bi-person-circle"></i> Login
      </Link>*/}
    </div>
  );
};

export default HeaderTop;