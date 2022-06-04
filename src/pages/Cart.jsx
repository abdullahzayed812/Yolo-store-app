import { Helmet } from "../components/Helmet";
import { productsData } from "../assets/fake-data/products";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { numberWithCommas } from "../utils/numbersWithCommas";

export function Cart() {
  const { items } = useSelector((state) => state.cartItems);

  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setCartProducts(productsData.getCartItemsDetails(items));
    setTotalProducts(
      items.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      items.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0)
    );
  }, [items]);
    
  return (
    <Helmet title="Cart">
      <section className="cart">
        <section className="cart__info">
          <p>You have {totalProducts} product in cart</p>
          <div className="cart__info__total-price">
            <span>total Price</span>
            <h2 className="cart__info__total-price__price">{numberWithCommas(totalPrice)}</h2>
          </div>
          <div className="cart__info__buttons">
            <Button>Continue shopping</Button>
            <Button>Continue shopping</Button>
          </div>
        </section>
        <section className="cart__list">
          {cartProducts.map((product) => (
            <CartItem item={product} key={product.id}/>
          ))}
        </section>
      </section>
    </Helmet>
  )
}
