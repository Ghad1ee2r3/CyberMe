import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ website }) => {
  const [query, setQuery] = useState("");

  // send one item from list to display in card
  //   const productCards = filteredProduct().map((product) => (
  //     <ProductCard key={product.id} product={product} />
  //   ));

  return (
    <>
      <div class="card ">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title </h5>
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
              class="form-control"
              placeholder="Card num"
              aria-label="Card number or email"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
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
          <a href="#" class="btn btn-primary">
            Go login to see ways to protect your card or emails
          </a>
        </div>
        <div class="card-footer text-muted">total of attack</div>
      </div>
    </>
  );
};

const mapStateToProps = ({ websites }) => ({
  websites,
});

export default connect(mapStateToProps)(Home);
