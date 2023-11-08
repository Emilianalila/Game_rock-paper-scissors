/* ALGORITHM
1) convert a random number into a move
2) the player have to pick a move
3) compare the result and give the winner 
4) show the result and the score using "DOM"
I used: variables, conditionals, functions and built-in objects */


let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore (); 

function playGame (playerMove){
  let computerMove = pickRandonMove ();
  let result;
  if (playerMove === computerMove){
    result = 'you are tie.';
  }else if (playerMove === 'rock'){
    if(computerMove === 'paper'){
      result = 'you lose.';
    }else if(computerMove === 'scissors'){
      result ='you win.'
    }
  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'you win.';
    }else if(computerMove === 'scissors'){
      result ='you lose.'
    }
  }else if(playerMove === 'scissors'){
    if(computerMove === 'paper'){
      result = 'you win.';
    }else if(computerMove === 'rock'){
      result ='you lose.'
    }
  }else{
    result = 'pick rock, paper or scissors'
  }
  
  if (result === 'you win.'){
    score.wins += 1;
  }else if (result === 'you lose.'){
    score.losses += 1;
  }else if (result === 'you are tie.'){
    score.ties += 1;
  }
  
  document.querySelector('.js-moves')
  .innerHTML = `You pick: ${playerMove}, Computer choose: ${computerMove}.`;

  document.querySelector('.js-result')
  .innerHTML = `"${result}"`;

  updateScore(); 

  localStorage.setItem('score', JSON.stringify(score));
}

function updateScore(){ 
  document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties:${score.ties}`;
}

function pickRandonMove (){           
  const randomNumber = Math.floor(Math.random()* 3);
  let computerMove;
  if(randomNumber === 0){
    computerMove = 'rock';
  }else if (randomNumber === 1){
    computerMove = 'paper';
  }else if (randomNumber === 2){
    computerMove = 'scissors';
  }
  return computerMove
}


