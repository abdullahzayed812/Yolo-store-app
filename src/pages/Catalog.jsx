import React, { useState, useCallback, useEffect, useRef } from "react";
import { Helmet } from "../components/Helmet";
import { productsData } from "../assets/fake-data/products";
import { category } from "../assets/fake-data/category";
import { colors } from "../assets/fake-data/productsColor";
import { size } from "../assets/fake-data/productsSizes";
import { CheckBox } from "../components/CheckBox";
import { Button } from "../components/Button";
import { InfiniteList } from "../components/InfiniteList";

export function Catalog() {
  const initialFilter = {
    category: [],
    colors: [],
    size: [],
  };
  const productList = productsData.getAllProducts();
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initialFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLORS":
          setFilter({
            ...filter,
            colors: [...filter.colors, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (category) => category !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLORS":
          const newColors = filter.colors.filter(
            (color) => color !== item.color
          );
          setFilter({ ...filter, colors: newColors });
          break;
        case "SIZE":
          const newSize = filter.size.filter((size) => size !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
          break;
      }
    }
  };

  const clearFilter = () => {
    setFilter(initialFilter);
  };

  const updateProducts = useCallback(() => {
    let temp = productList;
    if (filter.category.length > 0) {
      temp = temp.filter((product) =>
        filter.category.includes(product.categorySlug)
      );
    }
    if (filter.colors.length > 0) {
      temp = temp.filter((product) => {
        const check = product.colors.find((color) =>
          filter.colors.includes(color)
        );
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((product) => {
        const check = product.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);
  const toggleFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="Catalog">
      <section className="catalog">
        <div className="catalog__filter__toggle">
          <Button size="sm" onclick={toggleFilter}>
            filter products
          </Button>
        </div>
        <article className="catalog__filter" ref={filterRef}>
          <div
            className="catalog__filter__toggle__close"
            onClick={toggleFilter}
          >
            <i className="bx bx-left-arrow-alt" />
          </div>
          <section className="catalog__filter__widget">
            <h4 className="catalog__filter__widget__title">
              product portfolio
            </h4>
            <section className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    checked={filter.category.includes(item.categorySlug)}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                  />
                </div>
              ))}
            </section>
          </section>
          <section className="catalog__filter__widget">
            <h4 className="catalog__filter__widget__title">Color</h4>
            <section className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    checked={filter.colors.includes(item.color)}
                    onChange={(input) =>
                      filterSelect("COLORS", input.checked, item)
                    }
                  />
                </div>
              ))}
            </section>
          </section>
          <section className="catalog__filter__widget">
            <h4 className="catalog__filter__widget__title">Color</h4>
            <section className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    checked={filter.size.includes(item.size)}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                  />
                </div>
              ))}
            </section>
          </section>
          <section className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onclick={clearFilter}>
                Remove filter
              </Button>
            </div>
          </section>
        </article>
        <article className="catalog__content">
          <InfiniteList data={products} />
        </article>
      </section>
    </Helmet>
  );
}
