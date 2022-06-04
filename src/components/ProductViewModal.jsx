import { ProductView } from "./ProductView";
import { Button } from "./Button";
import { productsData } from "../assets/fake-data/products";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { remove } from "../redux/product-modal/productModalSlice";

export function ProductViewModal() {
  const [product, setProduct] = useState(undefined);
  const { productSlug } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(productsData.getProductBySlug(productSlug));
  }, [productSlug]);

  const hideProductModal = () => {
    dispatch(remove());
  }

  return (
    <section className={`product-view__modal ${product && "active"}`}>
      <section className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__close">
          <Button
            size="sm"
            onclick={hideProductModal}
          >
            Close
          </Button>
        </div>
      </section>
    </section>
  );
}