import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemsSlice";
import { numberWithCommas } from "../utils/numbersWithCommas";

export function CartItem({ item }) {
  const [product, setProduct] = useState(item)
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(item);
    setQuantity(item.quantity);
  }, [item])

  const updateQuantity = (option) => {
    if (option === "+") {
      dispatch(updateItem({...product, quantity: quantity + 1}));
    } else if (option === "-") {
      dispatch(updateItem({...product, quantity: quantity <= 1 ? 1 : quantity - 1}));
    }
  }

  const removeCartItem = () => {
    dispatch(removeItem(product));
  }

  return (
    <article className="cart__list__item">
      <figure className="cart__list__item__image">
        <img src={product.product.image01} alt={product.product.title} />
      </figure>
      <article className="cart__list__item__info">
        <span className="cart__list__item__info__title">
          {product.product.title} - {product.color} - {product.size}
        </span>
        <span className="cart__list__item__info__price">
          Product price: <span>{numberWithCommas(product.product.price)}</span>
        </span>
        <div className="cart__list__item__info__quantity">
          <div className="product__info__quantity__icon" onClick={() => updateQuantity("-")}>
            <i className="bx bx-minus" />
          </div>
          <div className="product__info__quantity__value">
            <span>{quantity}</span>
          </div>
          <div className="product__info__quantity__icon" onClick={() => updateQuantity("+")}>
            <i className="bx bx-plus" />
          </div>
        </div>
        <div className="cart__item__list__info__del" onClick={removeCartItem}>
          <i className="bx bx-trash" />
        </div>
      </article>
    </article>
  )
}