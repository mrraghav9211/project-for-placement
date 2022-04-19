// -------  search --------
const convertTojson = function (res) {
    return res.json();
}

const showData = function (data) {
    const search_result = document.getElementById("search_result");
    search_result.innerHTML = "";
    for (let i = 0; i < data.coins.length; i++) {
        const search_data = data.coins[i];


        const tr_elem = document.createElement('tr');
        const sr_no = document.createElement('td');
        const logo_elem = document.createElement('td');
        const name_elem = document.createElement('td');
        const more_elem = document.createElement('td');
        const rank_elem = document.createElement('td');
        const img_elem = document.createElement('img');
        const show_more = document.createElement('a');

        sr_no.innerText = i;
        img_elem.src = search_data.thumb;
        rank_elem.innerText = search_data.market_cap_rank;
        name_elem.innerText = `${search_data.name} (${search_data.symbol})`;
        show_more.innerText = "More";
        show_more.href = `./details.html?coin=${search_data.id}`;

        more_elem.appendChild(show_more);
        logo_elem.appendChild(img_elem);
        tr_elem.appendChild(sr_no);
        tr_elem.appendChild(logo_elem);
        tr_elem.appendChild(name_elem);
        tr_elem.appendChild(rank_elem);
        tr_elem.appendChild(more_elem);
        search_result.appendChild(tr_elem);
    }

}

const searchHandle = function () {
    const input_container = document.getElementById('input_container');
    const input_string = input_container.value;
    

}
let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let coin_id = params.get('input')
fetch(`https://api.coingecko.com/api/v3/search?query=${coin_id}`).then(convertTojson).then(showData);
// const btn = document.getElementById('btn');
// btn.addEventListener('click', searchHandle);
// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr").then(convertTojson).then(showData);
