import React from "react";
import { Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoaderComponent;
