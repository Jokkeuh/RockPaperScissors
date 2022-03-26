/*let computerPlay = 0;



}
function playerSelection(){
    let choice = window.prompt("Rock Paper or Scissors");
    // scissors > paper > rock > paper
    // console.log(choice)
        player = choice;
    
}
function run(){
    Cpu = computerSelection().textContent;
    playerSelection()

    console.log(Cpu);
    console.log(Player);
}*/






function playRound(playerSelection, computerSelection){
   let computerScore = 0;
   let playerScore = 0;
    
     if(playerSelection === computerSelection){
         console.log("Tie");
     }
     else if(playerSelection == "Rock"){
         if(computerSelection == "Paper"){
             console.log("Computer wins!");
             computerScore++;
             console.log(`CPU score: ${computerScore}`)
         }

         else if(computerSelection == "Scissors"){
            console.log("Player wins!");
            playerScore++;
            console.log(`Player score: ${playerScore}`)
         }
     }
     else if(playerSelection == "Paper"){
         if(computerSelection == "Scissors"){
             console.log("Computer wins!")
             computerScore++;
             console.log(`CPU score: ${computerScore}`)
         }
         else if(computerSelection == "Rock"){
             console.log("Player wins!")
             playerScore++;
             console.log(`Player score: ${playerScore}`)

         }
     }
     else if(playerSelection == "Scissors"){
         if(computerSelection == "Rock"){
             console.log("Computer wins!")
             computerScore++;
             console.log(`CPU score: ${computerScore}`)
         }
         else if(computerSelection == "Paper"){
             console.log("Player wins!")
             playerScore++;
             console.log(`Player score: ${playerScore}`)
         }
     }
}
function computerPlay(){
    const choice = ["Rock","Paper","Scissors"];
    x = Math.floor(Math.random()*3);
    return choice[x];
}


    function game(playerScore, computerScore){
        for(let i = 0; i < 5; i++){
            
            const computerSelection = computerPlay();
            const playerSelection = prompt("Rock Paper or Scissors");
            
            
            playRound(playerSelection, computerSelection);
            console.log(playerSelection);
            console.log(computerSelection);
            

        }
    }

game();