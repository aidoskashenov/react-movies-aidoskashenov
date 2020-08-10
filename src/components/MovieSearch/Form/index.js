import React from "react";
import PropTypes from "prop-types";

export const Form = ({ handler }) => {
  const handleSubmit = (event) => {

    event.preventDefault();
    handler(event);
  };

  return (
    <div className="field">
      <div className="control">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="input is-large my-5 is-rounded"
            placeholder="e.g. Avatar"
          />
          <button className="button is-dark button is-large my-5 is-rounded">Find</button>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  handler: PropTypes.func,
};
