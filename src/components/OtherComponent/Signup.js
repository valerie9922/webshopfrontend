import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [signup, setSignup] = useState({ name: "", email: "", passwor: "" });

  const submitHandeler = (e) => {
    e.preventDefault();
    const registerUser = async () => {
      const response = await axios.post("http://localhost:4000/users/signup", {
        name: signup.name,
        password: signup.password,
        email: signup.email,
      });
      console.log(response);
      // if (response.data === "success") {
      //   setSuccessFlag(true);
      //   console.log("successFlag ==>", successFlag);
      // }
    };
    registerUser();
  };
  // try {
  //   const { data } = await axios.post("http://localhost:4000/users/signup", {
  //     name: signup.name,
  //     email: signup.email,
  //     password: signup.password,
  //   });
  //   console.log(data);
  // } catch (e) {
  //   console.log(e.message);
  // }

  const nameHandeler = (e) => {
    setSignup({ ...signup, name: e.target.value });
  };
  const emailHandeler = (e) => {
    setSignup({ ...signup, email: e.target.value });
  };
  const passHandeler = (e) => {
    setSignup({ ...signup, password: e.target.value });
  };

  return (
    <div className="container">
      <div className="col-12 m-3">
        <h1 className="m-3">Signup</h1>
        <div className="small-container">
          <form id="sumbit" onSubmit={submitHandeler}>
            <label className="form_label">Name</label>
            <br />
            <input
              type="text"
              name="name"
              required
              className="login_input"
              placeholder="name"
              onChange={(e) => {
                nameHandeler(e);
              }}
            />
            <br />
            <label className="form_label">E-mail</label>
            <br />
            <input
              type="email"
              name="email"
              required
              className="login_input"
              placeholder="user name"
              onChange={(e) => {
                emailHandeler(e);
              }}
            />
            <br />
            <label className="form_label">Password</label>
            <br />
            <input
              type="password"
              name="password"
              required
              className="login_input"
              placeholder="password"
              onChange={(e) => {
                passHandeler(e);
              }}
            />
            <button className="btn btn-card" type="submit">
              Sign up
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
