const choises = ['rock' , 'paper' , 'scissors'] ;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return choises[computerChoice];

}

console.log(getComputerChoice())