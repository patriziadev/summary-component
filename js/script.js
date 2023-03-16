const summaryItem = document.getElementById("item");

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
    });
