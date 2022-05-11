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
    score.textContent = 'User: 0 ' + ' Computer: 0';

    const lastChoice = document.createElement('p');
    
    lastChoice.textContent = ' You picked: - - -' + ' Computer picked: - - - ';

    const winner = document.createElement('p');
    winner.textContent = '- - -';

    const draw = document.createElement('p');
  
const rules = document.getElementById('rules');
 
    const rulesBtn = document.createElement('button');
    rulesBtn.textContent = 'RULES';
    rulesBtn.classList.add('rulesBtn');
    rulesBtn.addEventListener('click', () => {
        document.getElementById('rulesDescription');
        rulesDescription.appendChild(rulesDescriptionP);
        rulesBtn.style.display = "none";
        rulesAwayBtn.style.visibility ="visible";
        rulesDescriptionP.style.visibility ="visible";
        
    });

    const rulesAwayBtn = document.createElement('button');
    rulesAwayBtn.textContent = 'RULES';
    rulesAwayBtn.style.visibility ="hidden";
    rulesAwayBtn.classList.add('rulesBtn');
    rulesAwayBtn.addEventListener('click', () => {
        rulesDescriptionP.style.visibility = "hidden";
        rulesAwayBtn.style.visibility ="hidden";
        rulesBtn.style.display = "flex";

    });

    const rulesDescriptionP = document.createElement('p');
    rulesDescriptionP.classList.add('rulesDescription');    rulesDescriptionP.textContent = "The rules are as follows: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.";


function computerPlay() {
    const rockPaperScissors  = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];
    const computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    console.log('Computer ' + computerSelection);
    return computerSelection;
}

function playRound(user, computer) {

    if (user === computer) {
        console.log('DRAW');
        winner.textContent = 'DRAW!';
        score.textContent = 'User: ' + userScore + ' Computer: ' + computerScore;
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


    score.textContent = 'User: ' + userScore + ' Computer: ' + computerScore;

    lastChoice.textContent = 'You picked: ' + user + ' Computer picked: ' + computer;

    console.log(userScore, computerScore)

    if (userScore == 5 || computerScore == 5) {
        if (userScore > computerScore) {
            winner.classList.add('gameOver');

            return winner.textContent = 'GAME OVER! YOU WIN.';
            


        } else if (computerScore > userScore) {
            winner.classList.add('gameOver');
            return winner.textContent = 'GAME OVER! COMPUTER WINS.';

        }
};


    winner.textContent = '- - -';
};

   
const reloadButton = document.createElement('button');
reloadButton.textContent = 'NEW GAME';
reloadButton.classList.add('reloadBtn');
reloadButton.addEventListener("click", () => {
    location.reload();
});


display.appendChild(winner);
display.appendChild(score);
display.appendChild(lastChoice);
rules.appendChild(rulesAwayBtn);
rules.appendChild(rulesBtn);
rules.appendChild(reloadButton);

