const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
let result = document.getElementsByTagName("h4");
const button = document.getElementById("btn");

function calculateBMI() {

    console.log("Button is clicked");
    
    let BMI = weight / (height * height);
    let message = "";

    if (BMI < 18.5) {
        message = `<h4>Underweight</h4>`
    } else if (BMI > 18.5 && BMI < 24.9) {
        message = '<h4>Normal Weight</h4>'
    } else if (BMI > 25 && BMI < 29.9) {
        message = `<h4>OverWeight</h4>`
    } else {
        message = '<h4>Obese</h4>'
    }
};

button.addEventListener("click", calculateBMI);



