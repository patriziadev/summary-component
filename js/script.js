const summaryItem = document.getElementById("item");
const score = document.getElementById("score");
let dataFetched = [];

const scoreCalculation = function (reaction, memory, verbal, visual) {};

const fetchData = function () {
    return fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            dataFetched = data;
            getResults(dataFetched);
            completeSummary(dataFetched);
        })
        .catch((error) => console.log(error));
};

const getResults = function (data) {
    scoresArray = data.map((value) => value.score);
    averageResult = Math.floor(
        scoresArray.reduce((a, b) => a + b) / scoresArray.length
    );
    score.innerHTML = averageResult;
};

const completeSummary = function (data) {
    itemToAdd = "";
    for (let i = 0; i < data.length; i++) {
        let category = data[i].category;
        let icon = data[i].icon;
        let score = data[i].score;
        itemToAdd += `<div 
                class="category ${category.toLowerCase()}"> 
                    <div class="${category.toLowerCase()}"><img src="${icon}" alt="${category}"> ${category}</div><div class="score"><strong>${score}</strong> / 100</div></div>`;
    }
    summaryItem.innerHTML = itemToAdd;
};

fetchData();
