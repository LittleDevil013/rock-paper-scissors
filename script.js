const choises = ['rock' , 'paper' , 'scissors'];
let playerScore = 0;
let computerScoure = 0;



function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    let computerChoice =  choises[randomValue];
    return computerChoice;
};


function getPlayerChoice() {
   let promptValue =  prompt("Rock , Paper or Scissors?");
   let playerChoice =  promptValue.toLocaleLowerCase();
   return playerChoice;
};

function playRound() {

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();


    let youWinText = "You Win! " +  playerSelection +  " beats " + computerSelection;
    let youLoseText = "You Lose! " + computerSelection + " beats " + playerSelection;
    let drawnText = "Drawn game!";
    

    if ( computerSelection == 'rock' && playerSelection == 'paper' ||
        computerSelection == 'paper' && playerSelection == 'scissors' || 
        computerSelection == 'scissors' && playerSelection == 'rock')  {
            playerScore++;
        return youWinText
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
    computerSelection == 'paper' && playerSelection == 'rock' || 
    computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScoure++;
        return youLoseText
    }
    else if( computerSelection == playerSelection) {
        playerScore++;
        computerScoure++;
        return drawnText

    };

};

function game() {

    for (i = 1; i <= 5; i++){
        console.log(playRound());
    };

};

game();

if (playerScore > computerScoure) {
    console.log("You win the Game!!!")
}
else if(computerScoure > playerScore){
    console.log("You lost the Game!!!")
};



