let optArray = ["rock", "paper", "scisors"];
let playerScore;
let computerScore;

let computerMove;



console.log(computerMove);

document.querySelector('.rock').addEventListener('click', function(){
    computerMove = (optArray[Math.trunc(Math.random()*optArray.length)]);
    if (computerMove == 'rock'){
        document.querySelector('.message').textContent = 'its a Tie!'
        console.log(computerMove);
    } else if(computerMove == 'scisors'){
        document.querySelector('.message').textContent = 'You Win!'
        console.log(computerMove);

        playerScore++;
    } else if (computerMove == 'paper'){
        document.querySelector('.message').textContent = 'You lost!'
        console.log(computerMove);
        computerScore++;
    }
})

document.querySelector('.paper').addEventListener('click', function(){
    computerMove = (optArray[Math.trunc(Math.random()*optArray.length)]);
    if (computerMove == 'paper'){
        document.querySelector('.message').textContent = 'its a Tie!'
        console.log(computerMove);

        
    } else if(computerMove == 'scisors'){
        document.querySelector('.message').textContent = 'You lost!'
        playerScore++;
        console.log(computerMove);

    } else if (computerMove == 'rock'){
        document.querySelector('.message').textContent = 'You Win!'
        computerScore++;
        console.log(computerMove);

    }
})

document.querySelector('.siscors').addEventListener('click', function(){
    computerMove = (optArray[Math.trunc(Math.random()*optArray.length)]);
    if (computerMove == 'siscors'){
        document.querySelector('.message').textContent = 'it\'s a tie!';
        console.log(computerMove);

        
    } else if(computerMove == 'paper'){
        document.querySelector('.message').textContent = 'You win!';
        console.log(computerMove);

        playerScore++;
    } else if (computerMove == 'rock') {
        document.querySelector('.message').textContent = ' you lose!';
        console.log(computerMove);

        computerScore++;
    }
})