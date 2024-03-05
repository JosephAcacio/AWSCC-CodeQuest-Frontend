const startButton = document.getElementById("start_button");

const startTitle = document.getElementById("start_title")

const gameView = document.getElementById("game_view");

const playerAnswerDisplay = document.getElementById("player_answer_display")

const playerGuess = document.getElementById("player_guess");

const playAgain = document.getElementById("restart");

const fightImage = document.getElementById("fight_image")

const reveal = document.getElementById('reveal');


let chance = 6;

let toDisplay;


startButton.addEventListener('click', () => {
    startTitle.style.display = 'none'
    startButton.style.display = 'none'
    gameView.style.display = "block"
    begin()
})

function begin(){
    randomNumber = Math.floor(Math.random() * 100 + 1)
    console.log(randomNumber)
}

let playerAnswer = document.getElementById("player_answer")
playerAnswer.addEventListener('change', event => {
    const answer = parseInt(playerAnswer.value);
    console.log(answer);
    if(isNaN(answer)){
        alert("Please enter a valid number!");
    }else if(!isNaN(answer) && chance != 0){
        toDisplay = answer;
        check()
    }
    
    playerAnswer.value = ''
    
} )


function check(){
    let newDiv = document.createElement("div");
    newDiv.textContent = toDisplay;
    if(toDisplay > randomNumber){
            newDiv.classList.add("box_guess_lower")
        }else if(toDisplay < randomNumber){
            newDiv.classList.add("box_guess_higher")
        }else if(toDisplay == randomNumber){
            playerAnswerDisplay.innerHTML = "You saved the Avatar!";
            playerGuess.style.display = 'none'
            playAgain.style.display = 'block';
            fightImage.src = "./images/Aang-pic.png"
            reveal.textContent = `${randomNumber} is the Number`;
            return;
        }

        playerAnswerDisplay.appendChild(newDiv);

        chance = chance - 1;

        if(chance == 0){
            playerGuess.style.display = 'none';
            playerAnswerDisplay.style.fontSize = 32;
            playerAnswerDisplay.innerHTML = "Firelord Ozai  has taken over the world...";
            playAgain.style.display = 'block';
            fightImage.src = "./images/Ozai-pic.png"
            reveal.textContent = `${randomNumber} is the Number`;
        }
}

playAgain.addEventListener( "click", function (){
    playAgain.style.display = 'none'
    playerGuess.style.display = 'flex'
    chance = 6;
    playerAnswerDisplay.innerHTML = ''
    fightImage.src = "./images/fighting_image.png"
    begin()
    reveal.textContent = 'Guess the Number';
})


