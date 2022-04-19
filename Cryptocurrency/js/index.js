// const ctx2 = document.getElementById("myChart2").getContext('2d');
// const ctx1 = document.getElementById('myChart1').getContext('2d');
// const ctx3 = document.getElementById('myChart3').getContext('2d');
// const ctx4 = document.getElementById('myChart4').getContext('2d');



// const myChart1 = new Chart(ctx1, {
//     type: 'bar',
//     data: {
//         labels: ['jan', 'Feb', 'Mar', 'Apr', 'May'],
//         datasets: [{
//             label: 'Bitcoin',
//             data: [50, 10, 22, 5, 19],
//             backgroundColor: [
//                 '#B3843B',
//                 '#AE3BB3',
//                 '#25EC47',
//                 'Purple',
//                 '#EE6C3F'
//             ],

//         }],
//     },
//     options: {
//         responsive: false,
//     },
// })
// const myChart2 = new Chart(ctx2, {
//     type: 'bar',
//     data: {
//         labels: ['jan', 'Feb', 'Mar', 'Apr', 'May'],
//         datasets: [{
//             label: 'Ethereum',
//             data: [5, 10, 15, 5, 10],
//             backgroundColor: [
//                 '#AE3BB3',
//                 '#B3843B',
//                 '#EE6C3F',
//                 'Purple',
//                 '#25EC47'
//             ],

//         }],
//     },
//     options: {
//         responsive: false,
//     },
// })

// const myChart3 = new Chart(ctx3, {
//     type: 'bar',
//     data: {
//         labels: ['jan', 'Feb', 'Mar', 'Apr', 'May'],
//         datasets: [{
//             label: 'Tether',
//             data: [5, 10, 3, 19, 5],
//             backgroundColor: [
//                 '#AE3BB3',
//                 '#EE6C3F',
//                 '#25EC47',
//                 'Purple',
//                 '#B3843B'
//             ],

//         }],
//     },
//     options: {
//         responsive: false,
//     },
// })

// const myChart4 = new Chart(ctx4, {
//     type: 'bar',
//     data: {
//         labels: ['jan', 'Feb', 'Mar', 'Apr', 'May'],
//         datasets: [{
//             label: 'Bnb',
//             data: [5, 10, 3, 5, 19],
//             backgroundColor: [
//                 '#AE3BB3',
//                 '#B3843B',
//                 '#EE6C3F',
//                 '#25EC47',
//                 'Purple'
//             ],

//         }],
//     },
//     options: {
//         responsive: false,
//     },
// })



// const ctx5 = document.getElementById('myChart5').getContext('2d');

// const myChart5 = new Chart(ctx5, {
//     type: 'line',
//     data: {
//         labels: ['', '', '', '', '', '', '', '', '', ''],
//         datasets: [{
//             label: 'Bitcoin',
//             data: [5, 8, 10, 5, 15, 20, 23, 22, 25, 30],
//             backgroundColor: [
//                 '#B3843B',
//                 '#AE3BB3',
//                 '#25EC47',
//                 'Purple',
//                 '#EE6C3F'
//             ],
//             borderColor: "Green"

//         }],
//     },
//     options: {
//         responsive: false,
//         plugins: {
//             legend: {
//                 display: false,
//                 labels: {
//                     color: 'rgb(255, 99, 132)'
//                 }
//             }
//         },
//         animations: {
//             tension: {
//                 duration: 1200,
//                 easing: 'linear',
//                 from: 1,
//                 to: 0,
//                 loop: true
//             }
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false
//                 }
//             },
//             y: {
//                 ticks: {
//                     display: false
//                 },
//                 grid: {
//                     display: false
//                 }
//             }
//         }
//     }
// })
const convertTojson = function (res) {
	return res.json();
}

const showData = function (data) {
	console.log(data);
	const bitcoin   = document.getElementById("bitcoin");
	const ethereum  = document.getElementById("ethereum");
	const hnt       = document.getElementById("hnt");
	const alts      = document.getElementById("alts");
	const doge      = document.getElementById("doge");
	const pkex      = document.getElementById("pkex");
	const ada       = document.getElementById("ada");
	const xlm       = document.getElementById("xlm");
	const near      = document.getElementById("near");
	const ltc       = document.getElementById("ltc");
	const sol       = document.getElementById('sol');


	bitcoin.innerText  = data.bitcoin.inr;
	ethereum.innerText = data.ethereum.inr;
	hnt.innerText      = data.helium.inr;
	alts.innerText     = data.altswitch.inr;
	doge.innerText     = data.dogecoin.inr;
	pkex.innerText     = data.polkaex.inr;
	ada.innerText       = data.cardano.inr;
	xlm.innerText       = data.stellar.inr;
	near.innerText      = data.near.inr;
	ltc.innerText       = data.litecoin.inr;
	sol.innerText       = data.solana.inr;

}
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2CaltSwitch%2Cstellar%2Cdogecoin%2Colana%2Csolana%2Chelium%2Clitecoin%2Cnear%2CpolkaEx&vs_currencies=inr").then(convertTojson).then(showData);


