import React from "react";
import RingLoader from "react-spinners/RingLoader";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <RingLoader size={150} color="#1ca87e" />
    </div>
  );
};

export default Loader;
