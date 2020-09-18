import React from "react";
import Header from "../Core/Header";
import DataSection from "./DataSection";
import { AnalyticsContainer } from "../Core/Container";

const Analytics = (props) => {
  return (
    <>
      <Header headerTitle="Analytics" />
      <AnalyticsContainer content={<DataSection />} />
    </>
  );
};

export default Analytics;
