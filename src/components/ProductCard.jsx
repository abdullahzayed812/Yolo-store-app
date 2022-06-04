import React from "react";
import PropTypes from "prop-types";
import { numberWithCommas } from "../utils/numbersWithCommas";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useDispatch } from "react-redux";
import { set } from "../redux/product-modal/productModalSlice";

export function ProductCard({ image01, image02, title: name, price, slug }) {
  const dispatch = useDispatch();

  const setProductSlug = (productSlug) => {
    dispatch(set(productSlug));
  }

  return (
    <article className="product-card">
        <Link to={`/catalog/${slug}`}>
          <figure className="product-card__image">
            <img src={image02} alt="product-card-img" />
            <img src={image01} alt="product-card-img" />
          </figure>
          <h3 className="product-card__name">{name}</h3>
          <article className="product-card__price">
            <span className="product-card__price--current">
              {numberWithCommas(price)}
            </span>
            <span className="product-card__price--old">
              <del>{numberWithCommas(293000)}</del>
            </span>
          </article>
        </Link>
        <div className="product-card__btn">
          <Button 
            size="sm" 
            icon="bx bx-cart" 
            animate={true}
            onclick={() => setProductSlug(slug)}
          >
            Choose Buy
          </Button>
        </div>
    </article>
  );
}

ProductCard.propTypes = {
  image01: PropTypes.string.isRequired,
  image02: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};
