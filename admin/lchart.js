const lctx = document.getElementById("linechart");

new Chart(lctx, {
  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Sales",
        data: [30, 55, 70, 80, 60, 40, 70],
        borderWidth: 2,
        borderColor: "#384752",
        backgroundColor: "#e8e8ce",
        color: "#384752",
        fontColor: "#384752",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#384752",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#384752", // Set the x-axis label color
        },
      },
      y: {
        ticks: {
          color: "#384752", // Set the y-axis label color
        },
      },
    },
  },
});
