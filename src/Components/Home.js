import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ website }) => {
  const [query, setQuery] = useState("");

  return (
    <>
    <div className="mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <h1 className="card-title my-5">Monitor your card Info </h1>
          <div className="row mb-3 my-5">
            <input
              type="text"
              className="form-control col-9 ml-3"
              placeholder="Enter your card number ..."
              aria-label="Card number or email"
              aria-describedby="button-addon2"
            />
            
            <button
              className="btn btn-dark col-2 ml-5"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">website name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
            </tbody>
          </table>
          {/* <Link to="/login" className="btn btn-outline-dark">
            Go login to see ways to protect your card or emails
          </Link> */}
        </div>
        <div className="card-footer text-muted">total of attack</div>
      </div>
    </div>
      
    </>
  );
};

const mapStateToProps = ({ websites }) => ({
  websites,
});

export default connect(mapStateToProps)(Home);
