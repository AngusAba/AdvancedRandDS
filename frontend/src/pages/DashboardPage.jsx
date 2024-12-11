import React, { useState, useEffect } from "react";
import DashboardCharts from "../components/DashboardCharts";

function DashboardPage() {
  const [chartData, setChartData] = useState({
    paymentsByFilm: { labels: [], values: [] },
    filmsByLanguage: { labels: [], values: [] },
    filmsByCategory: { labels: [], values: [] },
    topUsers: { labels: [], values: [] },
  });

  useEffect(() => {
    // Fetch dashboard data from backend API
    fetch("/api/dashboard-data")
      .then((res) => res.json())
      .then((data) => setChartData(data))
      .catch((err) => console.error("Failed to fetch dashboard data:", err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardCharts data={chartData} />
    </div>
  );
}

export default DashboardPage;
