import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

function DashboardCharts({ data }) {
  const { paymentsByFilm, filmsByLanguage, filmsByCategory, topUsers } = data;

  return (
    <div>
      <h2>Dashboard Charts</h2>

      <div>
        <h3>Total Payments by Film</h3>
        <Bar
          data={{
            labels: paymentsByFilm.labels,
            datasets: [
              {
                label: "Payments",
                data: paymentsByFilm.values,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>

      <div>
        <h3>Films by Language</h3>
        <Pie
          data={{
            labels: filmsByLanguage.labels,
            datasets: [
              {
                label: "Languages",
                data: filmsByLanguage.values,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
              },
            ],
          }}
        />
      </div>

      <div>
        <h3>Films by Category</h3>
        <Bar
          data={{
            labels: filmsByCategory.labels,
            datasets: [
              {
                label: "Category Count",
                data: filmsByCategory.values,
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>

      <div>
        <h3>Top 10 Users by Payment</h3>
        <Bar
          data={{
            labels: topUsers.labels,
            datasets: [
              {
                label: "Total Paid",
                data: topUsers.values,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default DashboardCharts;
