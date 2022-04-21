
//UI 
const div = document.getElementById("div");

function userSelection() {


}
const rock = document.createElement('button'); 
rock.textContent = 'ROCK';
rock.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    return e.target;
});

const paper = document.createElement('button');
paper.textContent = 'PAPER';
paper.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    return e.target;
});
const scissors = document.createElement('button');
scissors.textContent = 'SCISSORS';
scissors.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    return e.target;
});



div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);


const rockPaperScissor = ['rock', 'paper', 'scissors']; //array for computerSelection

function computerPlay(computerSelection) {  
    //Picks a random index of the array and returns the string.
                                        
    computerSelection = rockPaperScissor[Math.floor(Math.random()* rockPaperScissor.length)];
    console.log(computerSelection)
    return computerSelection;
    
}

const defeat = 'Defeat';
const victory = 'Victory';

let userScore = 0;
let computerScore = 0;

function playRound (userSelection, computerSelection) {

     userSelection = e.target;
     computerSelection = computerPlay();

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
        }

        // function game() {
        //     //Calls playRound() until one of the players reaches 5 pts.
        //     for(let i = 0; i <= 10; i++) {
        //         if (i <= 10){ 
        //             console.log(computerScore, userScore);
        //             playRound()
        //              if (userScore === 5) {
        //                  console.log('You win', computerScore, userScore)
        //                 return 'You have won';

        //             } else if (computerScore === 5) {
        //                  console.log('Computer wins', computerScore, userScore)
        //                  return 'You have lost';
        //            } else if (i === 10 && computerScore === userScore) {
        //                console.log('There will be no winners today', computerScore, userScore);
        //            }
                
        //     }
            
        //   }
        // }

        // game();
        

        