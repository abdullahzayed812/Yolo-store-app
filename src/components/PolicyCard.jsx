import React from "react";
import PropTypes from "prop-types";

export function PolicyCard({ name, description, icon }) {
  return (
    <article className="policy-card">
      <div className="policy-card__icon">
        <i className={icon} />
      </div>
      <div className="policy-card__info">
        <h5 className="policy-card__info__name">{name}</h5>
        <p className="policy-card__info__description">{description}</p>
      </div>
    </article>
  );
}

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
