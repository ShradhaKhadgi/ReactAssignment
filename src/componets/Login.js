import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const Login = () => {
  const json = localStorage.getItem("user");
  const user = JSON.parse(json);
  const [udata, setUdata] = useState({
    name: "",
    password: "",
  });
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (udata.name === user.name && udata.password === user.password) {
      const json = JSON.stringify(udata);
      localStorage.setItem("LoginUser", json);
      routeChange();
      setUdata({ name: "", password: "" });
    } else {
      toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });
    }
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUdata({ ...udata, [name]: value });
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid account">
        <div className="row ms-auto justify-content-center account_details">
          <div className="col-lg-5 col-md-6 col-sm-10 col-10 bg-body shadow">
            <h2 className="p-5 text-uppercase">Sign In</h2>
            <div className="p-5">
              <form onSubmit={submitForm}>
                <input
                  className="form-control shadow-none fs-4"
                  type="text"
                  name="name"
                  value={udata.name}
                  onChange={handleInput}
                  placeholder="Enter Username"
                  required
                />
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="password"
                  name="password"
                  value={udata.password}
                  onChange={handleInput}
                  placeholder="Enter Password"
                  required
                />
                <br />
                <div className="fs-4">
                  <a
                    className="text-decoration-none"
                    href="#"
                    style={{ color: "#8e07e4" }}
                  >
                    Forget password?
                  </a>
                  <br />
                  <Link
                    to="/signup"
                    className="text-decoration-none"
                    style={{ color: "#8e07e4" }}
                  >
                    Create a new account
                  </Link>
                  <br />
                  <br />
                </div>
                <button
                  className="btn btn-lg"
                  onClick={() =>
                    user === null
                      ? toast.error("Invalid Username or Password", {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          progress: undefined,
                        })
                      : submitForm
                  }
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          className="fs-5"
        />
      </div>
    </>
  );
};

export default Login;
