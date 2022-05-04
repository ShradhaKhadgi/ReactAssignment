import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./componets/Home";
import Login from "./componets/Login";
import SignUp from "./componets/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
