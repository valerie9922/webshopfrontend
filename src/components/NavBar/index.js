import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="container-fluid">
      {" "}
      <NavLink className="navItem" to="/">
        Home
      </NavLink>
      {"-"}
      <NavLink
        to="/shop"
        className="links"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        Shop
      </NavLink>
      {"-"}
      <NavLink className="navItem" to="/details">
        Product Details
      </NavLink>
    </div>
  );
};

export { NavBar };
