import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "solid",
        borderColor: "#32CD32",
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Guac-A-Mole
      </h1>
      <h4 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Make the fastest and most delicious guacamole
      </h4>
      <div>
        <Link to="/game">
          <button
            style={{
              backgroundColor: "#32CD32",
              color: "white",
              margin: "20px 20px",
              height: "50px",
              width: "80px",
            }}
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
