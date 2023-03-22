let computerScore = 0;
let humanScore = 0;
let draws = 0;
// This function randomizes the computer's choice
const answer = ["rock", "paper", "scissors"];

const scoreHuman = document.querySelector('.human-score')
const scoreComputer = document.querySelector('.computer-score')
const scoreUpdate = document.querySelector('.score-update')




        
function getComputerChoice () {
    const random = Math.floor(Math.random()*answer.length);
    return answer[random];

}

//does all of this need to go inside the loop?

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice ();
        let result = playRound (playerSelection, computerSelection);
        gameScore (result);
        let msg = message (result);
        console.log (playRound (playerSelection, computerSelection));

        scoreHuman.textContent = humanScore;
        scoreComputer.textContent = computerScore;
        scoreUpdate.textContent = msg;





        
        
    });
});



//This function sets up who wins and loses between human and computer based on their choices
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("tie");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("humanWins");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("humanWins");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("humanWins")
    } else {
        return ("computerWins")
    }
}

function message (result) {
    if (result === "humanWins") {
        return ('You Won!')
    } else if (result === "tie") {
        return ("It's a Tie!")
    } else if (result === "humanWins" && humanScore >= 3) {
        return ("You're one win away from destroying the computers!! Let's GO!")
    } else {
        return ('Computer Won.')
    }
}


// loops a game of RPS, calls score function to display score after each round
// function game () {
//     for (i=0; i<10; i++) {
//         let playerSelection = prompt ("please make your selection:").toLowerCase ();
//         let computerSelection = getComputerChoice ();
//         let result = playRound (playerSelection, computerSelection);
//         console.log (result);
//         gameScore (result);
//         console.log ("Computer Score:" + computerScore)
//         console.log ("Human Score:" + humanScore)

//         if (humanScore === 3 || computerScore === 3) {
//             break;
//         }
//     }
// }
//determines score based on results of the game
function gameScore (result) {
    if (result === "humanWins") {
        humanScore++;
    } else if (result === "tie") {
        draws++
    } else {
        computerScore++
    }

    if (humanScore === 5) {
        console.log ("Game Over. Human Wins"); 
        alert ("Game Over. Human Wins!")  
    } 

    if (computerScore === 5) {
        console.log ("Game Over. Computer Wins");
        alert ("Game Over. Computer Wins.")
    }
}

// console.log (game())