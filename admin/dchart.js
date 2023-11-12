const dctx = document.getElementById("doughnut");

new Chart(dctx, {
  type: "doughnut",
  data: {
    labels: ["Tulip Bouquet", "Pink Rose Basket", "Sunflower Bouquet"],
    datasets: [
      {
        label: "# of Votes",
        data: [40, 30, 20],
        borderWidth: 1,
        backgroundColor: [
          "rgb(29, 74, 96)",
          "rgb(104, 156, 188)",
          "rgb(74, 125, 147)",
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
