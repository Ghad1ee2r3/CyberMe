import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchWebsites } from "../redux/actions";

const Home = (props) => {
  const [cardId, setCardId] = useState(0); //enter card number by user
  const handleChange = (event) => {
    setCardId(event.target.value);
  };

  const handleOnclick = (event) => {
    event.preventDefault();

    props.fetchWebsites(cardId);
  };
  var numberOfwebsit = 1;
  // send one website name from list to display in (row table)
  const websitenames = props.websites.leaks.map((website) => (
    <tr>
      <th scope="row">{numberOfwebsit++}</th>
      <td>{website}</td>
    </tr>
  ));

  return (
    <>
      <div className="mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <h1 className="card-title my-5">Monitor your card Info </h1>
          <div className="row mb-3 my-5">
            <input
              type="text"
              id="cardId"
              value={cardId}
              name="username"
              className="form-control col-9 ml-3"
              placeholder="Enter your card number ..."
              onChange={handleChange}

              aria-label="Card number or email"
              aria-describedby="button-addon2"
            />
            
            <button
              className="btn btn-dark col-2 ml-5"
              type="button"
              id="button-addon2"
              onClick={handleOnclick}
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
            <tbody>{websitenames}</tbody>
          </table>
          {/* <Link to="/login" className="btn btn-outline-dark">
            Go login to see ways to protect your card or emails
          </Link> */}
        </div>
        <div class="card-footer text-muted">
          total: {props.websites.total}
        </div>
      </div>
    </div>
      
    </>
  );
};

const mapStateToProps = ({ websites }) => ({
  websites,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWebsites: (cardId) => dispatch(fetchWebsites(cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
