let errorinfo = false;

function getPlayerChoice(){
  choice = prompt('Input a Your Choice');
  choice = choice.toLowerCase();
  if (choice == 'rock' || choice == 'paper'|| choice == 'scissors'  )
  { return choice;} 
  else { 
        invalidChoice();
        }  

  return choice;
}

function getComputerChoice(){
  let rand = Math.floor(((Math.random()*3)+1)); 
  let choice;
  
  
  switch(rand){
    case 1: choice = 'rock'; break;
    case 2: choice = 'paper'; break;
    case 3: choice = 'scissors'; break;
    default:
  } 
  
  return choice;
}

function invalidChoice(){
  choice = prompt('Invalid Choice! PLEASE INPUT A VALID Choice');
        choice = choice.toLowerCase();
        if (choice == 'rock' || choice == 'paper'|| choice == 'scissors'  )
          { return choice;}
        else{invalidChoice();}
}


function playRound(playerSelection, computerSelection){
if (playerSelection == 'rock' && computerSelection == 'paper' ){ return ['You Lose! Paper Beats Rock', 'computer']}
  else if (playerSelection == 'rock' && computerSelection == 'scissors' ){ return ['You Win! Rock Beats Scissors', 'player']}
    else if (playerSelection == 'rock' && computerSelection == 'rock' ){ return ['its a Draw Game! Two Rocky Fight', 'none']}
      else if (playerSelection == 'paper' && computerSelection == 'rock' ){ return ['You Win! Paper Beats Rock','player']}
        else if (playerSelection == 'paper' && computerSelection == 'scissors' ){ return ['You Lose! Scissors Beats Paper', 'computer']}
          else if (playerSelection == 'paper' && computerSelection == 'paper' ){ return ['its a Draw! its a wrapy Paper Fight', 'none']}
            else if (playerSelection == 'scissors' && computerSelection == 'rock' ){ return ['You Lose! Rock Beats scissors', 'computer']}
              else if (playerSelection == 'scissors' && computerSelection == 'paper' ){ return ['You Win! Scissors Beats Paper', 'player']}
                else if (playerSelection == 'scissors' && computerSelection == 'scissors' ){ return ['Its a Draw Game! What a Scissors Fight', 'none']}

} 

function game(){
  let computerSelection;
  let playerSelection;
  let playerScore=0;
  let computerScore=0;
  let draw=0;
  let outcome;
  let result;
  let winner;

  for (let i=1; i<=5; i++){
    computerSelection = getComputerChoice();

    playerSelection = getPlayerChoice();

  outcome = playRound(playerSelection, computerSelection);

  result= outcome[0];
  winner= outcome[1];

  if(winner == 'player'){
    playerScore += 1;
  } else if(winner == 'computer'){ computerScore +=1; }
  else{draw +=1;}

  console.log(result);

  }

  if(playerScore > computerScore){
    console.log('CONGRATULATIONS! You are the GRAND WINNER!')
    console.log('Player Score = ' + playerScore + '\n'+
                'Computer Score = ' + computerScore + '\n'+
                'Number of Draws = ' + draw
                )
  }else if(playerScore < computerScore){
    console.log('COMPUTER is the GRAND WINNER!')
    console.log('Player Score = ' + playerScore + '\n'+
                'Computer Score = ' + computerScore + '\n'+
                'Number of Draws = ' + draw
                )
  }else{console.log('IT\'S A TIE GAME. NO WINNER!')
    console.log('Player Score = ' + playerScore + '\n'+
                'Computer Score = ' + computerScore + '\n'+
                'Number of Draws = ' + draw
                )}
  
}


game();
