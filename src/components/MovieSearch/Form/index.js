import React from "react";
import PropTypes from "prop-types";

export const Form = ({ handler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handler(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" />
      <button className="button">click</button>
    </form>
  );
};

Form.propTypes = {
  handler: PropTypes.func,
};
