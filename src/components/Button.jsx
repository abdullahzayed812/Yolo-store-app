import React from "react";
import PropTypes from "prop-types";

export function Button({
  backgroundColor,
  size,
  icon,
  animate,
  onclick,
  children,
}) {
  const background = backgroundColor
    ? "background--" + backgroundColor
    : "background--main";
  const sizeButton = size ? "btn--" + size : "";
  const animateButton = animate ? "btn--animate" : "";
  return (
    <button
      type="button"
      className={`btn ${background} ${sizeButton} ${animateButton}`}
      onClick={onclick ? () => onclick() : null}
    >
      <span className="btn__text">{children}</span>
      {icon ? (
        <span className="btn__icon">
          <i className={`${icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onclick: PropTypes.func,
};
