import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const json = localStorage.getItem("LoginUser");
  const user = JSON.parse(json);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  const Logout = () => {
    localStorage.removeItem("LoginUser");
    routeChange();
  };

  return (
    <>
      <section className="navbar-bg fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div className="container">
            <a className="navbar-brand" href="#">
              Welcome{" "}
              {user ? (
                <span className="ms-3" style={{ color: "#c9c9c9" }}>
                  {user.name}
                </span>
              ) : (
                ""
              )}
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company Info
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Company: Geeksynergy Technologies Pvt Ltd
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Address: Sanjayanagar, Bengaluru-56
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Phone: XXXXXXXXX09
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Email: XXXXXX@gmail.com
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {user ? (
                <button
                  className="btn rounded-pill text-light fs-4 px-4 mx-3"
                  type="submit"
                  onClick={Logout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/signup">
                    <button
                      className="btn rounded-pill text-light fs-4 px-4 ms-4"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      className="btn rounded-pill fs-4 px-4 mx-5"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
