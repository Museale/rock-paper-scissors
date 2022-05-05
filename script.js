const div = document.getElementById('div');

    const btn = document.getElementsByClassName('btn');
        Array.from(btn).forEach(item => {
            item.addEventListener('click', (e) => {
                let userSelection = e.target.textContent;
                playRound(userSelection, computerPlay());
                console.log('You ' + userSelection);
                return userSelection; 
            });
        });

const display = document.getElementById('display');

    const score = document.createElement('p');
    score.textContent = 'Current Score: ' + 'User: 0 ' + ' Computer: 0';

    const lastChoice = document.createElement('p');
    lastChoice.textContent = 'You picked: - - - - Computer picked: - - - -';

    const winner = document.createElement('p');
    winner.textContent = 'Whomst\'vbeen winning?!';

function computerPlay() {
    const rockPaperScissors  = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];
    const computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    console.log('Computer ' + computerSelection);
    return computerSelection;
}

let userScore = 0;
let computerScore = 0;

function playRound(user, computer) {
  
    console.log('user', user, 'computer', computer)
    switch(true) {
        case user === 'ROCK': 
        computer === 'PAPER' || 'SPOCK' ? computerScore++ : userScore++;
        break;
        case user === 'PAPER': 
        computer === 'SPOCK' || 'LIZARD' ? computerScore++ : userScore++;
        break;
        case user === 'SCISSORS': 
        computer === 'ROCK' || 'ROCK' ? computerScore++ : userScore++;
        break;
        case user === 'LIZARD': 
        computer === 'SCISSORS' || 'ROCK' ? computerScore++ : userScore++;
        break;
        case user === 'SPOCK':
        computer === 'LIZARD' || 'PAPER' ? computerScore++ : userScore++;
        break;
        default: 
        'DRAW';
    }
    score.textContent = 'Current Score: ' + ' User: ' + userScore + ' Computer: ' + computerScore;
    lastChoice.textContent = 'You picked: ' + user + ' Computer picked: ' + computer;
    console.log(userScore, computerScore)
    return userScore, computerScore;
    
};


    display.appendChild(score);
    display.appendChild(lastChoice);
    display.appendChild(winner);