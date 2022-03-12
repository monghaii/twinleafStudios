import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

const EmailButton = ({ mailto, label }) => {
  return (
    <Link
      className="emailButton"
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default EmailButton;
