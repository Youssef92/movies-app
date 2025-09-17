import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="">
      <h1 className="mb-4 text-center font-bold">404</h1>
      <h2 className="mb-4 text-center">Oops! Page Not Found</h2>
      <p className="mb-4 text-center ">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      {/* <Link
        to="/home"
        style={{
          textDecoration: "none",
          marginLeft: "635px",
          fontSize: "40px",
          color: "black",
        }}
      >
        <button
          style={{
            borderRadius: "40px",
            padding: "10px",
            paddingRight: "20px",
            paddingLeft: "20px",
            backgroundColor: "#eee",
          }}
        >
          Go Back Home
        </button>
      </Link> */}
      <Link
        to="/home"
        className="btn btn-warning btn-backtohome"
        style={{
          textDecoration: "none",
          marginLeft: "670px",
          fontSize: "20px",
          color: "black",
          borderRadius: "40px",
          padding: "10px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default Error404;
