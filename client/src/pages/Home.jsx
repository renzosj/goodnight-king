import React from "react";
import { Link } from "react-router-dom";
import CrownImage from '../images/gnk-logo-proto-01.png';

const Home = () => {
  return (
    <main className="center-container">
      <section className="d-flex flex-column">
        <div className="jumbotron m-2 p-5 text-center">
          <h1 className="display-1">Goodnight, King</h1>
          <p className="lead">You deserve it.</p>
          <img
            src={CrownImage}
            alt="graphic of a crown that wobbles when hovered"
            width="275"
            height="175"
            className="mx-auto" 
          />
          <hr className="my-3" />
          <p className="fs-4 fst-italic">
            "The least we each ought to do for someone who treats us like a king
            or a queen is to treat them like a prince or a princess." -Mokokoma
            Mokhonoana.
          </p>
          <div className="button-section">
            <p className="lead">
              <Link to="/login" className="button is-link" role="button">
                <button className="button is-link custom-login-button">Log in</button>
              </Link>
            </p>
            <p>Don't have an account?</p>
            <p className="lead">
              <Link to="/register" className="btn btn-primary btn-lg" role="button">
                <button className="btn btn-primary btn-lg custom-signup-button">Sign up</button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
