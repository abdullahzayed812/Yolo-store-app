import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "./Grid";
import { ProductCard } from "./ProductCard";

export function InfiniteList({ data }) {
  const perLoad = 6;
  const listRef = useRef(null);
  const [dataList, setDataList] = useState([]);
  const [times, setTimes] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setDataList(data.slice(0, perLoad));
    setTimes(1);
  }, [data]);

  useEffect(() => {
    const toggleLoad = () => {
      if (
        window.scrollY + window.innerHeight >=
        listRef.current.clientHeight + listRef.current.offsetTop + 300
      ) {
        setLoad(true);
      }
    };
    window.addEventListener("scroll", toggleLoad);
    return () => window.removeEventListener("scroll", toggleLoad);
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxTimes = data.length % perLoad === 0 ? pages : pages + 1;
      if (load && times <= maxTimes) {
        const start = perLoad * times;
        const end = perLoad + start;
        setDataList(dataList.concat(data.slice(start, end)));
        setTimes(times + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, times, dataList, data]);

  return (
    <section ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {dataList.map((item, index) => (
          <ProductCard
            key={index}
            image01={item.image01}
            image02={item.image02}
            title={item.title}
            price={parseInt(item.price)}
            slug={item.slug}
          />
        ))}
      </Grid>
    </section>
  );
}

InfiniteList.propTypes = {
  data: PropTypes.array.isRequired,
};
