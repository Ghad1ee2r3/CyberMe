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
      <div class="card ">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">title </h5>
          <p>choose cheack</p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Email
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Card number
            </label>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              id="cardId"
              value={cardId}
              name="username"
              placeholder="cardId"
              onChange={handleChange}
              class="form-control"
              aria-label="Card number or email"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleOnclick}
            >
              Button
            </button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">website name</th>
              </tr>
            </thead>
            <tbody>{websitenames}</tbody>
          </table>
          <a href="#" class="btn btn-primary">
            Go login to see ways to protect your card or emails
          </a>
        </div>
        <div class="card-footer text-muted">
          total of attack : {props.websites.total}
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
