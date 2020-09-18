import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const data = {
    labels: ["GAT Eng", "Math1", "English"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#C7D2DB", "#091B35", "#00ADEE"],
        hoverBackgroundColor: ["#B5BFC6", "#0E2C4F", "#009AC9"],
      },
    ],
  };

  return (
    <>
      <Doughnut
        data={data}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
};

export default DoughnutChart;
