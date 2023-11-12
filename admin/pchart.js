const pctx = document.getElementById("piechart");

new Chart(pctx, {
  type: "pie",
  data: {
    labels: ["Botataung", "Latha", "Tamwe", "Yankin"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 25, 20, 25],
        borderWidth: 1,
        backgroundColor: [
          "rgb(56, 71, 82)",
          "rgb(29, 74, 96)",
          "rgb(74, 125, 147)",
          "rgb(104, 156, 188)",
        ],
        borderColor: "#384752;",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#384752;",
        },
      },
    },
  },
});
