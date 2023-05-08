const choises = ['rock' , 'paper' , 'scissors'];
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

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

function playRound(playerSelection , computerSelection) {
    let youWinText = "You Win! " +  playerSelection +  " beats " + computerSelection;
    let youLoseText = "You Lose! " + computerSelection + " beats " + playerSelection;
    let drawnText = "Drawn game!";

    if ( computerSelection == 'rock' && playerSelection == 'paper' ||
        computerSelection == 'paper' && playerSelection == 'scissors' || 
        computerSelection == 'scissors' && playerSelection == 'rock')  {
        return youWinText
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
    computerSelection == 'paper' && playerSelection == 'rock' || 
    computerSelection == 'scissors' && playerSelection == 'paper') {
        return youLoseText
    }
    else if( computerSelection == playerSelection){
        return drawnText

    };

};


console.log(computerSelection);
console.log(playRound(playerSelection , computerSelection))