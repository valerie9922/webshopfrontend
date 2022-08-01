import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });
      navigate("/", { replace: true });
      console.log(data);
    } catch (e) {
      console.log(e.message);
      alert("Invalid email or password");
    }
  };
  return (
    <div className="container">
      <div className="col-12 m-3">
        <h1 className="m-3">Login</h1>
        <div className="small-container">
          <form id="login" onSubmit={submitHandeler}>
            <label className="form_label">E-mail</label>
            <br />
            <input
              type="email"
              value={email}
              required
              className="login_input"
              placeholder="user name"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="form_label">Password</label>
            <br />
            <input
              type="password"
              value={password}
              required
              className="login_input"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-card" type="submit">
              Sign in
            </button>{" "}
            <div>
              Do you want to create{" "}
              <NavLink
                className="navItem"
                to={`/signup`}
                style={({ isActive }) =>
                  isActive ? { color: "tomato" } : undefined
                }
              >
                new account
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
