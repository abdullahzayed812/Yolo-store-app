import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../components/Button";
import { numberWithCommas } from "../utils/numbersWithCommas";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItemsSlice";

export function ProductView({ product }) {
  const [previewImage, setPreviewImage] = useState(product && product.image01);
  const [expand, setExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  if (!product) {
    product = {
      price: 0,
      title: "",
      colors: [],
      size: [],
    };
  }
  useEffect(() => {
    setPreviewImage(product.image01);
    setColor(undefined);
    setSize(undefined);
    setQuantity(1);
  }, [product]);

  const changeQuantity = (type) => {
    if (type === "plus")
      setQuantity(prevQuantity => prevQuantity + 1);
    else
      setQuantity(prevQuantity => prevQuantity - 1 < 1 ? 1 : prevQuantity - 1);
  }

  const changeMainImage = (type) => {
    if (type === "one")
      setPreviewImage(product.image01);
    if (type === "two")
      setPreviewImage(product.image02);
  };

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };

  const changeColor = (color) => {
    setColor((prev) => (prev = color));
  };

  const changeSize = (size) => {
    setSize((prev) => (prev = size));
  };

  const check = () => {
    if (color === undefined) {
      alert("You must choose the color of product");
      return false;
    }
    if (size === undefined) {
      alert("You must choose the size of product");
      return false;
    }
    return true;
  }

  const addToCart = () => {
    if (check()) {
      dispatch(addItem({
        slug: product.slug,
        color: color,
        size: size,
        quantity: quantity,
        price: product.price
      }));
    }
  }

  const buyNow = () => {
    if (check()) navigate("/cart");
  }

  return (
    <section className="product">
      <section className="product__images">
        <article className="product__images__list">
          <figure
            className="product__images__list__item"
            onClick={() => changeMainImage("one")}
          >
            <img src={product.image01} alt={product.title} />
          </figure>
          <figure
            className="product__images__list__item"
            onClick={() => changeMainImage("two")}
          >
            <img src={product.image02} alt={product.title} />
          </figure>
        </article>
        <figure className="product__images__main">
          <img src={previewImage} alt={product.title} />
        </figure>
        <article className="product__description">
          <h3 className="product__description__title">{product.title}</h3>
          <p
            className={`product__description__content
            ${expand && "expand"}`}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
          <div className="product__description__toggle">
            <Button size="sm" onclick={toggleExpand}>
              {expand ? "Read Less" : "Read More"}
            </Button>
          </div>
        </article>
      </section>
      <section className="product__info">
        <h3 className="product__info__title">{product.title}</h3>
        <h4 className="product__info__price">
          {numberWithCommas(product.price)}
        </h4>
        <article className="product__info__item">
          <h5 className="product__info__item__title">Colors</h5>
          <section className="product__info__item__colors">
            {product.colors.map((item, index) => (
              <span
                key={index}
                className={`product__info__item__colors__item background--${item}
                   ${color === item && "active"}`}
                onClick={() => changeColor(item)}
              ></span>
            ))}
          </section>
        </article>
        <article className="product__info__item">
          <h5 className="product__info__item__title">Sizes</h5>
          <section className="product__info__item__sizes">
            {product.size.map((item, index) => (
              <span
                className={`product__info__item__sizes__item
                  ${size === item && "active"}`}
                key={index}
                onClick={() => changeSize(item)}
              >
                {item}
              </span>
            ))}
          </section>
        </article>
        <article className="product__info__quantity">
          <div className="product__info__quantity__icon" onClick={() => changeQuantity("minus")}>
            <i className="bx bx-minus" />
          </div>
          <div className="product__info__quantity__value">
            <span>{quantity}</span>
          </div>
          <div className="product__info__quantity__icon" onClick={() => changeQuantity("plus")}>
            <i className="bx bx-plus" />
          </div>
        </article>
        <section className="cart-buttons">
          <Button onclick={addToCart}>Add to cart</Button>
          <Button onclick={buyNow}>Buy now</Button>
        </section>
      </section>
    </section>
  );
}

ProductView.propTypes = {
  product: PropTypes.object,
};
