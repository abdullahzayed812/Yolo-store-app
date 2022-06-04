import React from "react";
import { Helmet } from "../components/Helmet";
import { heroSliderData } from "../assets/fake-data/hero-slider";
import { policy } from "../assets/fake-data/policy";
import { productsData } from "../assets/fake-data/products";
import { HeroSlider } from "../components/HeroSlider";
import { ProductCard } from "../components/ProductCard";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import { Policy } from "../components/Policy";
import { Link } from "react-router-dom";
import { Grid } from "../components/Grid";
import banner from "../assets/images/banner.png";

export function Home() {
  return (
    <Helmet title="Home">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        period={5000}
      />
      <Section>
        <SectionBody>
          <Policy policy={policy} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Top selling products of the week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productsData.getProduct(4).map((item, index) => (
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
      <Section>
        <SectionTitle>New product</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productsData.getProduct(8).map((item, index) => (
              <ProductCard
                key={index}
                image01={item.image01}
                image02={item.image02}
                title={item.title}
                price={parseInt(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>{" "}
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Popular products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productsData.getProduct(12).map((item, index) => (
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
