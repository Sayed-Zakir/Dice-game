var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage1 = "images/dice" + randomnumber1 + ".png";
var randomimage2 = "images/dice" + randomnumber2 + ".png";

var number1 = document.querySelectorAll("img")[0].setAttribute("src", randomimage1);
var number2 = document.querySelectorAll("img")[1].setAttribute("src", randomimage2);


if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "✨ Player 1 Won !"
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won ✨ !"
} else if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw !"
}