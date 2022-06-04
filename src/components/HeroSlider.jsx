import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { HeroSliderItem } from "./HeroSliderItem";

export function HeroSlider({ data, control, period = 3000, auto }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const lastSlide = data.length - 1;
  const nextSlide = useCallback(() => {
    if (activeSlide >= lastSlide) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  }, [activeSlide, lastSlide]);
  const prevSlide = () => {
    if (activeSlide <= 0) {
      setActiveSlide(lastSlide);
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  };
  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, period);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, period, auto]);
  return (
    <section className="hero-slider">
      {data.map((item, index) => {
        return (
          <HeroSliderItem
            itemData={item}
            key={index}
            index={index}
            activeSlide={activeSlide}
          />
        );
      })}
      {control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left prev"></i>
          </div>
          <div className="hero-slider__control__item index">
            {activeSlide + 1}/{lastSlide + 1}
          </div>
          <div className="hero-slider__control__item next" onClick={nextSlide}>
            <i className="bx bx-chevron-right next"></i>
          </div>
        </div>
      ) : null}
    </section>
  );
}

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  period: PropTypes.number,
};
