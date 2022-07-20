import { NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
require("./styles.css");

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="level2-container">
        <div className="div-flex">
          <div className="icon-font">
            <p>
              The<span className="white-color">Shop</span>
            </p>
          </div>
          <div className="link-search">
            <ul className="nav-ul">
              <li>
                <NavLink className="navItem" to="/">
                  Home
                </NavLink>
              </li>
              <li>Products</li>
              <li>Blog</li>
              <li>
                <NavLink
                  to="/shop"
                  className="links"
                  style={({ isActive }) =>
                    isActive ? { color: "white" } : undefined
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>Contact</li>
              <li>
                <NavLink className="navItem" to="/details">
                  Product Details
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="searchBarContainer">
          <input className="searchBar" />
          <AiOutlineSearch />
        </div>
      </div>
      <div className="iconContainer">
        <ul className="nav-ul">
          <li>
            <a href="/#">
              <span className="white-color">
                <AiOutlineUser />
              </span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span className="white-color">
                <AiOutlineShoppingCart />
              </span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span className="white-color">
                <AiOutlineHeart />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar };
