import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { classes, value, click, id, name } = props;
  return (
    <button
      type="button"
      name={name}
      id={id}
      className={classes}
      value={value}
      onClick={(e) => click(e)}
      data-testid="button"
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
