
let button = document.getElementById("button");
button.onclick = function (event) {
    event.preventDefault();
    let div = document.getElementById("div")
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    let breakfast = document.getElementById("breakfast").value;
    let query = breakfast
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'tcQn8q9QIXpGwOLKPrkcug==thAO7k1ljxyaC48h' },
        contentType: 'application/json',
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                let name = document.createElement("h2");
                name.textContent = "Food Item: " + result[i].name;
                div.appendChild(name);

                let calories = document.createElement("p");
                calories.textContent = "Amount of Calories (Total): " + result[i].calories;
                div.appendChild(calories);
                console.log(result);

                let servingSize = document.createElement ("p");
                servingSize.textContent = "Serving Size (grams): " + result[i].serving_size_g;
                div.appendChild(servingSize);
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
