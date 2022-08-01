import { NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
require("./styles.css");

const NavBar = ({ id }) => {
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
                <NavLink
                  className="navItem"
                  to="/"
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : undefined
                  }
                >
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
                    isActive ? { color: "tomato" } : undefined
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>Contact</li>
              <li>
                <NavLink
                  className="navItem"
                  to={`/products/${id}`}
                  style={({ isActive }) =>
                    isActive ? { color: "tomato" } : undefined
                  }
                >
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
            <NavLink
              className="navItem"
              to={`/login`}
              style={({ isActive }) =>
                isActive ? { color: "tomato" } : undefined
              }
            >
              <span className="white-color">
                <AiOutlineUser />
              </span>
            </NavLink>
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
