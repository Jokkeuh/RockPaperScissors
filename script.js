const btnR = document.getElementById("rock");
const btnP = document.getElementById("paper");
const btnS = document.getElementById("scissors");


let computerScore = 0;
let playerScore = 0;



btnR.addEventListener("click", () =>{
    
    playRound("Rock", computerPlay());
    let text = `You played Rock,CPU played ${result} Playerscore: ${playerScore} CPU score: ${computerScore} `
    document.getElementById("scores").innerHTML = text;
    
});

btnP.addEventListener("click", () =>{
    playRound("Paper", computerPlay());
    let text = `You played Paper,CPU played ${result} Playerscore: ${playerScore} CPU score: ${computerScore} `
    document.getElementById("scores").innerHTML = text;
});

btnS.addEventListener("click", () =>{
    playRound("Scissors", computerPlay());
    let text = `You played Scissors, CPU played ${result} Playerscore: ${playerScore} CPU score: ${computerScore} `
    document.getElementById("scores").innerHTML = text;
});

function playRound(playerSelection, computerSelection){
    if(computerScore === 5){
        let text = "COMPUTER WINS GAME, YOU LOSER!"
        document.getElementById("round").innerHTML = text;
        computerScore = 0;
        playerScore = 0;
        }
    if(playerScore === 5){
        let text = "Player wins!!!!!!!!"
        document.getElementById("round").innerHTML = text;
        computerScore = 0;
        playerScore = 0;
    }
   
    
     if(playerSelection === computerSelection){
         let text ="Tie";
         document.getElementById("score").innerHTML = text;
     }
     else if(playerSelection == "Rock"){
         if(computerSelection == "Paper"){
             console.log("Computer wins!");
             computerScore++;
             let text ="LOSE";
             document.getElementById("score").innerHTML = text;
             }

         else if(computerSelection == "Scissors"){
            console.log("Player wins!");
            playerScore++;
            let text ="WIN ROUND";
            document.getElementById("score").innerHTML = text;
            
         }
     }
     else if(playerSelection == "Paper"){
         if(computerSelection == "Scissors"){
             console.log("Computer wins!")
             computerScore++;
             let text ="LOSE";
             document.getElementById("score").innerHTML = text;
             
             
         }
         else if(computerSelection == "Rock"){
             console.log("Player wins!")
             playerScore++;
             let text ="WIN ROUND";
             document.getElementById("score").innerHTML = text;
             

         }
     }
     else if(playerSelection == "Scissors"){
         if(computerSelection == "Rock"){
             console.log("Computer wins!")
             computerScore++;
             let text ="LOSE";
             document.getElementById("score").innerHTML = text;
             
             
         }
         else if(computerSelection == "Paper"){
             console.log("Player wins!")
             playerScore++;
             let text ="WIN ROUND";
             document.getElementById("score").innerHTML = text;
             
            
         }
        
     }
}
function computerPlay(){
    const choice = ["Rock","Paper","Scissors"];
    cpuChoice = Math.floor(Math.random()*3);
    result = choice[cpuChoice];
    return result;
}


    function game(){
            
            const computerSelection = computerPlay();
            //const playerSelection = prompt("Rock Paper or Scissors");
            
            
            playRound(playerSelection, computerSelection);
            console.log(playerSelection);
            console.log(computerSelection);
            

        };
    