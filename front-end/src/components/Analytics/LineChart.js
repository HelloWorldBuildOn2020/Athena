import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Transactions",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#00ADEE",
        borderColor: "#00ADEE",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#091B35",
        pointBackgroundColor: "#00ADEE",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#091B35",
        pointHoverBorderColor: "#C7D2DB",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <>
      <Line data={data} options={{ maintainAspectRatio: true }} />
    </>
  );
};
export default LineChart;
