import React from "react";

export function Section({ children }) {
  return <section className="section">{children}</section>;
}

export function SectionTitle({ children }) {
  return <section className="section__title">{children}</section>;
}

export function SectionBody({ children }) {
  return <section className="section__body">{children}</section>;
}
