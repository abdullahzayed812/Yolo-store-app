import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export function HeroSliderItem({ itemData, index, activeSlide }) {
  return (
    <article
      className={`hero-slider__item ${index === activeSlide ? "active" : ""}`}
    >
      <section className="hero-slider__item__info">
        <h3
          className={`hero-slider__item__info__title color--${itemData.color}`}
        >
          <span>{itemData.title}</span>
        </h3>
        <p className="hero-slider__item__info__description">
          <span>{itemData.description}</span>
        </p>
        <div className="hero-slider__item__info__btn">
          <Link to={itemData.path}>
            <Button
              backgroundColor={itemData.color}
              size="normal"
              icon="bx bx-cart"
              onclick={null}
              animate={true}
            >
              Set Details
            </Button>
          </Link>
        </div>
      </section>
      <figure className="hero-slider__item__image">
        <span className={`shape background--${itemData.color}`}></span>
        <img src={itemData.img} alt={itemData.color} />
      </figure>
    </article>
  );
}
