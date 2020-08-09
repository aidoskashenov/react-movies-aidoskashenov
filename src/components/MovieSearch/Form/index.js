import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.css"

export const Form = ({ handler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handler(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" className="input"/>
      <button className="button">click</button>
    </form>
  );
};

Form.propTypes = {
  handler: PropTypes.func,
};
