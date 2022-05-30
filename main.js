jQuery(document).ready(function ($) {
  // api
  $.ajax({
    url: "https://api.coingecko.com/api/v3/search/trending",
    dataType: "json",
    type: "get",
    success: function (result) {
      // append list to this wrapper
      var parentWrapper = document.getElementById("ticker-wrapper");
      var allValue = result.coins;
      console.log("coming from response", allValue);

      var listItems = allValue
        .map((item) => {
          return `<li style="display: inline-block; margin-right: 10px">
                  <div class="cryPo-single-card">
                    <div class="cryPo-right-side">
                      <span class="cryPo-small-title">
                        ${item.item.name}
                      </span>
                      <span class="cryPo-subtitle">${item.item.price_btc}</span>
                      <div class="cryPo-text-wrapper">
                        <span class="cryPo-para lite-green">-2.54%</span>
                        <span class="cryPo-para">24H change</span>
                      </div>
                    </div>
                    <img class="cryPo-sm-img" src="./img/one.png" alt="" />
                  </div>
                </li>`;
        })
        .join(" ");

      //   console.log("parent node", parentWrapper);
      // parentWrapper.innerHTML = listItems;
    },
    error: function (err) {
      console.log(err);
    },
  });

  //   owl slider
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>",
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  // chart js
  var ctx = document.querySelector(".initChart").getContext("2d");
  var ctx2 = document.querySelector(".initChart2").getContext("2d");
  var ctx3 = document.querySelector(".initChart3").getContext("2d");
  var ctx4 = document.querySelector(".initChart4").getContext("2d");
  var ctx5 = document.querySelector(".initChart5").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Evmos",
        "TerraClassicUSD",
        "Green Satoshi Token on BSC",
        "STEPN",
        "Solana",
        "bella-protocol",
      ],
      datasets: [
        {
          label: "Cripto", // Name the series
          data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          // borderWidth: 1 // Specify bar border width
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });

  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: [
        "Evmos",
        "TerraClassicUSD",
        "Green Satoshi Token on BSC",
        "STEPN",
        "Solana",
        "bella-protocol",
      ],
      datasets: [
        {
          label: "Cripto", // Name the series
          data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          // borderWidth: 1 // Specify bar border width
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });

  var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: [
        "Evmos",
        "TerraClassicUSD",
        "Green Satoshi Token on BSC",
        "STEPN",
        "Solana",
        "bella-protocol",
      ],
      datasets: [
        {
          label: "Cripto", // Name the series
          data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          // borderWidth: 1 // Specify bar border width
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });

  var myChart4 = new Chart(ctx4, {
    type: "line",
    data: {
      labels: [
        "Evmos",
        "TerraClassicUSD",
        "Green Satoshi Token on BSC",
        "STEPN",
        "Solana",
        "bella-protocol",
      ],
      datasets: [
        {
          label: "Cripto", // Name the series
          data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          // borderWidth: 1 // Specify bar border width
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });

  var myChart5 = new Chart(ctx5, {
    type: "line",
    data: {
      labels: [
        "Evmos",
        "TerraClassicUSD",
        "Green Satoshi Token on BSC",
        "STEPN",
        "Solana",
        "bella-protocol",
      ],
      datasets: [
        {
          label: "Cripto", // Name the series
          data: [500, 50, 2424, 14040, 14141, 4111], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          // borderWidth: 1 // Specify bar border width
        },
      ],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height ,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });
});
