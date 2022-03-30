import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  Posts
                </Link>
              </li>
            </ul>
            {isAuth ? (
              <button
                className="btn btn-outline-primary ms-auto"
                onClick={() => logout()}
              >
                <i className="fa fa-sign-in me-2"></i>Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline-primary ms-auto">
                <i className="fa fa-sign-in me-2"></i>Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
