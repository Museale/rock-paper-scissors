
const rockPaperScissor = ['rock', 'paper', 'scissors'];


function computerPlay(computerSelection) {

    computerSelection = rockPaperScissor[Math.floor(Math.random()* rockPaperScissor.length)];
    return computerSelection;
    
}


const defeat = 'Defeat';
const victory = 'Victory';

let userScore = 0;
let computerScore = 0;

function playRound (userSelection, computerSelection) {

     let regex = /^rock$|^paper$|^scissors$/i;
     let rockEx = /rock/i;
     let paperEx = /paper/i;
     let ScissorEx = /scissors/i;

     userSelection = prompt('Rock, paper, scissors:');
     computerSelection = computerPlay();
     
     if (userSelection === null || userSelection === '') {
         alert('You can\'t beat the computer with that attitude. Input rock, paper or scissors!') 
     } else if(userSelection.match(regex)) {
            if (computerSelection === 'rock' && userSelection.match(paperEx)) {
             
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                userScore++;
                return victory;

            } else if (computerSelection === 'scissors' && userSelection.match(paperEx)) {
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                computerScore++;
                return defeat;
                
            } else if (computerSelection === 'paper' && userSelection.match(rockEx)) {
             
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                computerScore++;
                return defeat;

            } else if (computerSelection === 'scissors' && userSelection.match(rockEx)) {
             
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                userScore++;
                return victory;

            } else if (computerSelection === 'rock' && userSelection.match(ScissorEx)) {
              
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                computerScore++;
                return defeat;

            } else if (computerSelection === 'paper' && userSelection.match(ScissorEx)) {
                
                console.log('Computer picked:', computerSelection, 'You picked:', userSelection);
                userScore++;
                return victory;

            } else if (userSelection.toLowerCase() === computerSelection) {
                console.log('It\'s a draw. ', 'Computer picked:', computerSelection, 'You picked:', userSelection);
            
            }
      } else {
        console.log('Invalid input');
        alert('Input rock, paper or scissors!');
      }
    
}

        function game() {
            
            for(let i = 0; i <= 10; i++) {
                if (i <= 10){ 
                    console.log(computerScore, userScore);
                    playRound()
                     if (userScore === 5) {
                         console.log('You win', computerScore, userScore)
                        return 'You have won';

                    } else if (computerScore === 5) {
                         console.log('Computer wins', computerScore, userScore)
                         return 'You have lost';
                   } else if (i === 10 && computerScore === userScore) {
                       console.log('There will be no winners today', computerScore, userScore);
                   }
                
            }
            
          }
        }

        game();
        