import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <div className="container">
        <div className="error-page">
          <h1>404</h1>
          <p class="text">
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <div className="btn">
            <button onClick={() => navigate("/")}>Go Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
