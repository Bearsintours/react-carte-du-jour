import React from "react";
import Loader from "../images/loader.gif";

const LoadingPage = () => (
  <div className="loader">
    <img className="loader__img" src={Loader} alt="loading" />
  </div>
);

export default LoadingPage;
