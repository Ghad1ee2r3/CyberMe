import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Signup = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signup(userData);
  };

  const { username, password, email } = userData;
  if (props.user) return <Redirect to="/login" />;

  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              /> 
             </div> 
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Signup
            </button>
            <Link to="/login" className="btn btn-link-dark my-2 my-sm-0">
              I already have an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  signup: (userData) => dispatch(signup(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
