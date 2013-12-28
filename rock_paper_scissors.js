var playerChoice = prompt("Do you choose Rock, Paper or Scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Rock";
} else if (0.35 < computerChoice && computerChoice < 0.67) {
	computerChoice = "Paper";
} else {
	computerChoice = "Scissors";
}

var compare = function(computerChoice, playerChoice){
if
(computerChoice === playerChoice) {
 console.log ("The result is a tie!");
}


if (computerChoice === "Rock") { 
    if (playerChoice === "Scissors") {
        console.log ("Rock Wins!"); 
          } else if (playerChoice === "Paper") {
            console.log ("Paper Wins!");
            }
}
           
if (computerChoice === "Paper") { 
    if (playerChoice === "Scissors") {
        console.log ("Scissors Wins!"); 
         } else if (playerChoice === "Rock") {
            console.log ("Paper Wins!");
            }
}
         
if (computerChoice === "Scissors") { 
    if (playerChoice === "Paper") {
        console.log ("Scissors Wins!");
        }  else if (playerChoice === "Rock") {
            console.log ("Rock Wins!");
            }
}
console.log(compare(computerChoice, playerChoice));
};
