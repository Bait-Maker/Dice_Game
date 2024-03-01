// Change h1 text to display the player 
// with a higher dice roll
function showWinner(dice1, dice2) {
    let heading = document.querySelector("h1");
    heading.classList.add("smaller");
    if (dice1 > dice2) {
        heading.innerHTML = "Player 1 Wins!!!";
    }
    else if (dice1 < dice2) {
        heading.innerHTML = "Player 2 Wins!!!"
    }
    else {
        heading.innerHTML = "Its a Tie!"
    }
}

// Generates a random number,
// Set dice image to the number generated.
function rollDice() {
    let image1 = document.querySelector(".img1");
    let image2 = document.querySelector(".img2");
    var imageName1;
    var imageName2;

    // Random number for the dice to roll
    var dice1 = Math.random() * 6;
    dice1 = Math.floor(dice1) + 1;

    var dice2 = Math.random() * 6;
    dice2 = Math.floor(dice2) + 1;

    imageName1 = "./images/" + "dice" + dice1 + ".png";
    imageName2 = "./images/" + "dice" + dice2 + ".png";

    image1.src = imageName1;
    image2.src = imageName2;

    showWinner(dice1, dice2);
}

// when button is pressed, roll the dice
let diceButton = document.querySelector("button");

diceButton.addEventListener("click", (e) => { rollDice() });
