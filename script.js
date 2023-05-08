const choises = ['rock' , 'paper' , 'scissors'];

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

console.log(getComputerChoice());
console.log(getPlayerChoice());