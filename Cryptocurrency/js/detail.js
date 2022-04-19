const convertTojson = function (res) {
  return res.json();
};

const showInfo = function (data) {
  const coin_img = document.getElementById("coin_img");
  const coin_name = document.getElementById("coin_name");
  const coin_description = document.getElementById("coin_description");

  coin_description.innerHTML = data.description.en;
  coin_name.innerText = data.name;
  coin_img.src = data.image.large;
  // console.log(data);
};
const showPrice = function (data) {
  const inr = document.getElementById("inr");
  const eur = document.getElementById("eur");
  const usd = document.getElementById("usd");

  inr.innerText = `₹ ${data[coin_id].inr}`;
  eur.innerText = `€ ${data[coin_id].eur}`;
  usd.innerText = `$ ${data[coin_id].usd}`;
};

function convertUnixToReadable(timestamp) {
    const date = new Date(timestamp);
    const date_string = date.getDate();
    const month_string = date.getMonth() + 1;
  
    const readable = date_string + ' - ' + month_string;
    return readable;
  }

let labels = [];
let prices = [];
const showChart = function (data) {
  for (let i = 0; i < data.prices.length; i++) {
    const single_price = data.prices[i];
    labels.push(convertUnixToReadable(single_price[0]));
    prices.push(single_price[1]);
    console.log(single_price[1]);
  }

  const ctx1 = document.getElementById("myChart1").getContext("2d");

  const myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Bitcoin",
          data: prices,
          backgroundColor: [
            "Red",
            "Green",
            "Purple"
          ],
          borderColor: "Red",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "Red",
          },
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

var url     = new URL(window.location.href);
var params  = new URLSearchParams(url.search);
let coin_id = params.get("coin");

fetch(
  `https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
)
  .then(convertTojson)
  .then(showInfo);
fetch(
  `https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=inr%2Cusd%2Ceur`
)
  .then(convertTojson)
  .then(showPrice);
fetch(
  `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=inr&days=14&interval=daily`
)
  .then(convertTojson)
  .then(showChart);
