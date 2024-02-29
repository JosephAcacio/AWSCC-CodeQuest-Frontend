// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display")// Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score") // Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display") // Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score") // Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status")  // Get the element with the id of "game-status"
const resetGameButton = document.getElementById("reset-game-btn")// Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn")// Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn")// Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn")// Get the element with the id of "scissors-btn"

let playerOneChoice;
let playerTwoChoice;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-rock-solid.svg" alt="rock">'
    playerOneChoice = 'rock';
    playGame()
});

paperBtn.addEventListener("click", function () {
    player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-paper-solid.svg" alt="paper">'
    playerOneChoice = 'paper';
    playGame()
});

scissorsBtn.addEventListener("click", function () {
    player1ChoiceDisplay.innerHTML = '<img src="./assets/hand-scissors-solid.svg" alt="scissor">'
    playerOneChoice = 'scissors';
    playGame()
});

resetGameButton.addEventListener("click", function () { 
    player1ChoiceDisplay.innerHTML = ''
    player2ChoiceDisplay.innerHTML = ''

    gameStatusDisplay.textContent = 'SHOW YOUR HAND TO START THE GAME!'
    player1ScoreDisplay.innerHTML = 0;
    player2ScoreDisplay.innerHTML = 0;
});

// Step 4: Define helper functions that will be the actions of the game

function playGame(){
    playerTwoChoice = Math.floor(Math.random() * 3 + 1);

    if(playerTwoChoice == 1){
        playerTwoChoice = 'rock';
    }else if(playerTwoChoice == 2){
        playerTwoChoice = 'paper'
    }else if(playerTwoChoice == 3){
        playerTwoChoice = 'scissors'
    }

    if(playerTwoChoice == 'rock'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-rock-solid.svg" alt="rock">'
    }else if(playerTwoChoice == 'paper'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-paper-solid.svg" alt="paper">'
    }else if(playerTwoChoice == 'scissors'){
        player2ChoiceDisplay.innerHTML = '<img src="./assets/hand-scissors-solid.svg" alt="scissor">'
    }

    //Game Status and scores
    let playerOneScore = parseInt(player1ScoreDisplay.textContent) + 1;
    let playerTwoScore = parseInt(player2ScoreDisplay.textContent) + 1;

    if(playerOneChoice == 'rock' && playerTwoChoice == 'rock'){
        gameStatusDisplay.textContent = 'Tie'
    }else if(playerOneChoice == 'rock' && playerTwoChoice == 'paper'){
        gameStatusDisplay.textContent = 'Player 2 Wins!'
        player2ScoreDisplay.textContent = playerTwoScore;
    }else if(playerOneChoice == 'rock' && playerTwoChoice == 'scissors'){
        gameStatusDisplay.textContent = 'Player 1 Wins!'
        player1ScoreDisplay.textContent = playerOneScore;
    }else if(playerOneChoice == 'paper' && playerTwoChoice == 'rock'){
        gameStatusDisplay.textContent = 'Player 1 Wins!'
        player1ScoreDisplay.textContent = playerOneScore;
    }else if(playerOneChoice == 'paper' && playerTwoChoice == 'paper'){
        gameStatusDisplay.textContent = 'Tie'
    }else if(playerOneChoice == 'paper' && playerTwoChoice == 'scissors'){
        gameStatusDisplay.textContent = 'Player 2 Wins!'
        player2ScoreDisplay.textContent = playerTwoScore;
    }else if(playerOneChoice == 'scissors'  && playerTwoChoice == 'rock'){
        gameStatusDisplay.textContent = 'Player 2 Wins!'
        player2ScoreDisplay.textContent = playerTwoScore;
    }else if(playerOneChoice == 'scissors'  && playerTwoChoice == 'paper'){
        gameStatusDisplay.textContent = 'Player 1 Wins!'
        player1ScoreDisplay.innerHTML = playerOneScore;
    }else if(playerOneChoice == 'scissors'  && playerTwoChoice == 'scissors'){
        gameStatusDisplay.textContent = 'Tie'
    }
}

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!