import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "./Grid";
import logo from "../assets/images/Logo-2.png";
const footerAboutLinks = [
  {
    display: "Introduce",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/about",
  },
  {
    display: "Recruit",
    path: "/about",
  },
  {
    display: "News",
    path: "/about",
  },
  {
    display: "Shop System",
    path: "/about",
  },
];
const footerCustomerLinks = [
  {
    display: "Return Policy",
    path: "/about",
  },
  {
    display: "Warranty Policy",
    path: "/about",
  },
  {
    display: "Warranty Policy",
    path: "/about",
  },
];
export function Footer() {
  return (
    <footer className="footer">
      <section className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <article>
            <h5 className="footer__title">Support call center</h5>
            <article className="footer__content">
              <p>
                Contact to order <strong>0123456789</strong>
              </p>
              <p>
                Order Problem <strong>0123456789</strong>
              </p>
              <p>
                Comments, complaints <strong>0123456789</strong>
              </p>
            </article>
          </article>
          <article>
            <h5 className="footer__title">About Yolo</h5>
            <article className="footer__content">
              {footerAboutLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.path}>{Link.display}</Link>
                </p>
              ))}
            </article>
          </article>
          <article>
            <h5 className="footer__title">Customer care</h5>
            <article className="footer__content">
              {footerCustomerLinks.map((link, index) => (
                <p key={index}>
                  <Link to={link.path}>{link.display}</Link>
                </p>
              ))}
            </article>
          </article>
          <article className="footer__about">
            <figure>
              <Link to="/">
                <img src={logo} alt="footer-logo" />
              </Link>
            </figure>
            <p>
              Towards the goal of bringing new joy of dressing every day to
              millions of Vietnamese consumers. Let's work with Yolo towards a
              more active and positive life.
            </p>
          </article>
        </Grid>
      </section>
    </footer>
  );
}
