import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    profession: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  const numAllow = (e) => {
    if (!/[0-9]/.test(e.key) || e.code === "Space") {
      e.preventDefault();
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (user.cpassword.length !== 0 && user.password !== user.cpassword) {
      toast.error("Password not matching", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });
    } else if (user.profession === "") {
      toast.error("Please select profession", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });
    } else {
      const json = JSON.stringify(user);
      localStorage.setItem("user", json);
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        profession: "",
      });
      routeChange();
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid account">
        <div className="row ms-auto justify-content-center account_details">
          <div className="col-lg-5 col-md-6 col-sm-10 col-10 bg-body shadow ">
            <h2 className="p-5 text-uppercase">Create an account</h2>
            <div className="p-5">
              <form onSubmit={submitForm} autoComplete="off">
                <input
                  className="form-control shadow-none fs-4"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Enter Name"
                  required
                />
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter Email ID"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="Enter Phone Number"
                  maxLength={10}
                  onKeyPress={numAllow}
                />
                <br />
                <select
                  className="form-select shadow-none fs-4"
                  name="profession"
                  value={user.profession}
                  onChange={handleInput}
                >
                  <option>Select Profession</option>
                  <option value="Private Sector">Private Sector</option>
                  <option value="Public Sector">Public Sector</option>
                  <option value="Agriculturalist">Agriculturalist</option>
                  <option value="Business">Business</option>
                  <option value="Retired">Retired</option>
                  <option value="Student">Student</option>
                  <option value="Others">Others</option>
                </select>
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Create Password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <br />
                <input
                  className="form-control shadow-none fs-4"
                  type="password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInput}
                  placeholder="Confirm Password"
                  required
                />
                <br />
                <button className="btn btn-lg" type="submit">
                  Sign Up
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

export default SignUp;
