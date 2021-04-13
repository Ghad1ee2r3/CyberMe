import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions/authentication";
import Logo from "./images/logo-200L.png"

const NavBar = ({ user, logout }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-link">
      <Link to="/home" className="navbar-brand ml-5">
              <img src={ Logo }/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNav">
        <ul className="navbar-nav">
          {user ? (
            <>
              <li onClick={() => logout()} className="nav-item">
                <Link to="/login" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  </>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
