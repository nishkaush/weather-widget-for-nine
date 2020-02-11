import React from "react";

const ErrorComp = ({ error }) => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto">
        <p className="display-4">Oops something went wrong</p>
        <p className="h1">{error}</p>
        <br />
        <ul className="h4 list-unstyled">
          Here are some steps to get things working:
          <li className="h5 text-muted my-3 pt-4">
            Make sure you have given permission to access your location
          </li>
          <li className="h5 text-muted my-3">
            Check your internet connectivity
          </li>
          <li className="h5 text-muted my-3">
            Ensure you have javascript enabled
          </li>
          <li className="h5 text-muted my-3">
            If all else fails, try visiting us a little bit later
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorComp;
