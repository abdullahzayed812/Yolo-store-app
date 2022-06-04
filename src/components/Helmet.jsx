import React from "react";
import PropTypes from "prop-types";
export function Helmet({ title, children }) {
  document.title = "Yolo - " + title;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <section>{children}</section>;
}
Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};
