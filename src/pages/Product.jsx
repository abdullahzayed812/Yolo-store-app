import React from "react";
import { Helmet } from "../components/Helmet";
import { productsData } from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import { Grid } from "../components/Grid";
import { ProductCard } from "../components/ProductCard";
import { ProductView } from "../components/ProductView";

export function Product() {
  const slug = useParams().slug;
  const product = productsData.getProductBySlug(slug);
  const relatedProducts = productsData.getProduct(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <SectionTitle>
            Related Products
          </SectionTitle>
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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
        </SectionBody>
      </Section>
    </Helmet>
  );
}
