import React from "react";

const Error = () => {
  return (
    <div
      className="showcase"
      style={{
        height: "650px",
        display: "flex",
        alignItems: "center",
        textAlign: 'center',
        color: "white",
        fontSize: "30px",
      }}
    >
      <div className="overlay">
        <h1>Looks like this page doesn't exist</h1>
      </div>
    </div>
  );
};

export default Error;
