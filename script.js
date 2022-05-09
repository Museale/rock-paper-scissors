const div = document.getElementById('div');

    const btn = document.getElementsByClassName('btn');
        Array.from(btn).forEach(item => {
            item.addEventListener('click', (e) => {
                let userSelection = e.target.textContent;
                if (userScore < 5 && computerScore < 5) {
                playRound(userSelection, computerPlay());
                console.log('You ' + userSelection);
                }
                return userSelection;
            });
        });

let userScore = 0;
let computerScore = 0;

const display = document.getElementById('display');

    const score = document.createElement('p');
    score.textContent = 'Current Score: ' + 'User: 0 ' + ' Computer: 0';

    const lastChoice = document.createElement('p');
    lastChoice.textContent = 'You picked: - - - - Computer picked: - - - -';

    const winner = document.createElement('p');
    winner.textContent = 'Who will win?';

    const draw = document.createElement('p');


const rules = document.getElementById('rules');

    const rulesDescription = document.createElement('p');
    rulesDescription.textContent = "The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.";


function computerPlay() {
    const rockPaperScissors  = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];
    const computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    console.log('Computer ' + computerSelection);
    return computerSelection;
}

function playRound(user, computer) {

    if (user === computer) {
        console.log('DRAW');
        draw.textContent = 'DRAW!';
        score.textContent = 'Current Score: ' + ' User: ' + userScore + ' Computer: ' + computerScore;
        lastChoice.textContent = 'You picked: ' + user + ' Computer picked: ' + computer;
        return 'DRAW';
    };

    draw.textContent = '';

    switch(true) {
        case user == 'ROCK':
        computer == 'PAPER' || computer == 'SPOCK' ? computerScore++ : userScore++;
        break;
        case user == 'PAPER':
        computer == 'SCISSORS' || computer ==  'LIZARD' ? computerScore++ : userScore++;
        break;
        case user == 'SCISSORS':
        computer == 'ROCK' || computer ==  'ROCK' ? computerScore++ : userScore++;
        break;
        case user == 'LIZARD':
        computer == 'SCISSORS' || computer ==  'ROCK' ? computerScore++ : userScore++;
        break;
        case user == 'SPOCK':
        computer == 'LIZARD' || computer == 'PAPER' ? computerScore++ : userScore++;
        break;
    }


    score.textContent = 'Current Score: ' + ' User: ' + userScore + ' Computer: ' + computerScore;

    lastChoice.textContent = 'You picked: ' + user + ' Computer picked: ' + computer;

    console.log(userScore, computerScore)

    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            return winner.textContent = 'GAME OVER! YOU WIN.';

        } else if (computerScore > userScore) {
            return winner.textContent = 'GAME OVER! COMPUTER WINS.';

        }
};


    winner.textContent = "Who will win?";
};

    display.appendChild(winner);
    display.appendChild(score);
    display.appendChild(draw);
    display.appendChild(lastChoice);
    rules.appendChild(rulesDescription);