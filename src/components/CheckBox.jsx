import React, { useRef } from "react";
import PropTypes from "prop-types";

export function CheckBox({ label, checked, onChange }) {
  const inputRef = useRef(null);
  const handleChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        ref={inputRef}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check" />
      </span>
      {label}
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
