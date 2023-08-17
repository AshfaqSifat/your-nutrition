let button = document.querySelector("button");
button.addEventListener("click", a);
function a(event) {
    event.preventDefault();

    error1.style.display = "none";
    error2.style.display = "none";

    let x = 0;
    let y = 1;

    let sex = document.getElementById("sex");
    let sexValue = sex.value;

    let name = document.getElementById("name");
    let nameValue = name.value;

    let height = document.getElementById("height");
    let heightValue = height.value;

    let weight = document.getElementById("weight");
    let weightValue = weight.value;

    let health = document.getElementById("health");
    let healthValue = health.value;

    if (heightValue > 0 && weightValue > 0) {
        error2.style.display = "none";
        x = 1;
    }
    else {
        error2.style.display = "block";
        error2.style.color = "red";
    }
    if (sexValue == "" || heightValue == "" || weightValue == "" || healthValue == "") {
        error1.style.display = "block";
        error1.style.color = "red";
        y = 0;
    }
    if (x == 1 && y == 1) {
        window.location.href = "./page2.html";
    }
}



let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
error1.style.display = "none";
error2.style.display = "none";