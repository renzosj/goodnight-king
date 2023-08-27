import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="d-flex flex-column">
        <div className="jumbotron m-2 p-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1">Goodnight, King</h1>
          <p className="lead">You deserve it.</p>
          <img
            id="crown-img"
            src="../images/gnk-logo-proto-01.png"
            alt="graphic of a crown that wobbles when hovered"
            width="275"
            height="175"
          />
          <hr className="my-3" />
          <p className="fs-4 fst-italic">
            "The least we each ought to do for someone who treats us like a king
            or a queen is to treat them like a prince or a princess." -Mokokoma
            Mokhonoana.
          </p>
          <p className="lead">
            <Link to="/login" className="btn btn-danger btn-lg" role="button">
              Log in
            </Link>
          </p>
          <p>Don't have an account?</p>
          <p className="lead">
            <Link
              to="/register"
              className="btn btn-primary btn-lg"
              role="button"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
