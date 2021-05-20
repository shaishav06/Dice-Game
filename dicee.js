var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var ImageSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", ImageSource);

// For image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var ImageSource2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", ImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins🤩️🚩️!!! ";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins🤩️🚩️!!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!😥️"
}