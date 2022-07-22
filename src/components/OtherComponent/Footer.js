import { NavLink } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div class="icon-fonts">
          <p>
            The<span class="purple-color">Shop</span>
          </p>
        </div>
      </div>
      <div className="footer-2">
        <h2>Categories</h2>
        <ul>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Electronics
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Jewelery
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Men's Clothing
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Women's Clothing
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-3">
        <h2>My Account</h2>
        <ul>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              My Account
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Discount
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Returns
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Orders History
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navItem" to="/">
              Orders Tracking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-4">
        <h2>Follow us</h2>
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsInstagram />
        </span>
      </div>
    </div>
  );
};

export default Footer;
