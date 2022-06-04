import React from "react";
import { PolicyCard } from "./PolicyCard";
import { Grid } from "../components/Grid";

export function Policy({ policy }) {
  return (
    <Grid col={4} mdCol={2} smCol={1} gap={30}>
      {policy.map((item, index) => {
        return <PolicyCard key={index} {...item} />;
      })}
    </Grid>
  );
}
