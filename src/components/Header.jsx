import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
const navData = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Products",
    path: "/catalog",
  },
  {
    display: "Cart",
    path: "/cart",
  }
];
export function Header() {
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const closeIconRef = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => {
    const addShrinkClass = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", addShrinkClass);
    return () => window.removeEventListener("scroll", addShrinkClass);
  }, []);
  const toggleMobileMenu = () => {
    menuRef.current.classList.toggle("active");
    closeIconRef.current.classList.toggle("active");
  };
  const activeNav = navData.findIndex((link) => link.path === pathname);
  return (
    <header className="main-header" ref={headerRef}>
      <section className="container">
        <div className="main-header__logo">
          <Link to="/">
            <img src={logo} alt="logo-img" />
          </Link>
        </div>
        <section className="main-header__menu">
          <div
            onClick={toggleMobileMenu}
            className="main-header__menu__mobile--toggle"
          >
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <section className="main-header__menu__left">
            <div
              ref={closeIconRef}
              onClick={toggleMobileMenu}
              className="main-header__menu__left__close"
            >
              <i className="bx bx-chevron-left"></i>
            </div>
            <nav className="main-header__menu__left__nav" ref={menuRef}>
              {navData.map((item, index) => (
                <div
                  key={index}
                  onClick={toggleMobileMenu}
                  className={`main-header__menu__left__nav__item ${
                    index === activeNav ? "active" : ""
                  }`}
                >
                  <Link
                    to={item.path}
                    className="main-header__menu__left__nav__item__link"
                  >
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </section>
          <section className="main-header__menu__right">
            <div className="main-header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="main-header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="main-header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </section>
        </section>
      </section>
    </header>
  );
}
