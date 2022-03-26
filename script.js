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



function computerPlay(){
    const hands = ["Rock","Paper","Scissors"];
    computerPlay = Math.floor(Math.random()*3);
    return hands[computerPlay];
}


function playRound(playerSelection, computerSelection){
    
    if(playerSelection ==="Rock" && computerSelection == "Scissors")
    {
        console.log("Player won with Rock!");
    }
    else if(playerSelection ==="Scissors" && computerSelection == "Paper")
    {
        console.log("Player won with scissors!!");
    }
    else if(playerSelection === "Paper" && computerSelection == "Rock")
    {
        console.log("Player won with Paper!");
    }
    else if(playerSelection === computerSelection){
        console.log("Draw")
    }
    else{
        console.log("Computer won!");
    }
}
const computerSelection = computerPlay();
function game(){
    for(let i = 0; i < 5; i++){
        
        
        const playerSelection = prompt("Rock Paper or Scissors");
        
        playRound(playerSelection, computerSelection);
        console.log(playRound())

    }
}





//console.log(playRound(playerSelection, computerSelection));