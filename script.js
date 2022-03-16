
//It should have a function that picks 'rock' 'paper' 'scissors' at random and returns the value
function computerChoice(computerSelection) {

    let rockPaperScissor = ['rock', 'paper', 'scissors'];
    computerSelection = rockPaperScissor[Math.floor(Math.random()* rockPaperScissor.length)];
    console.log(computerSelection);
}

computerChoice();
