var comp_score = document.querySelector("#comp-score");
var user_score = document.querySelector("#user-score");
        var comp_score = 0
var user_score = 0
        
        var userChoice = prompt("What will you choose> Rock, Paper, or Scissors?");
        
        var computerChoice = Math.random();
        if (computerChoice < .33) {
            computerChoice = "rock";
        } else if(computerChoice <= 1.66) {
            computerChoice = "paper";
        } else if(computerChoice <= 2.33) {
            computerChoice = "scissors";
        }
        var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                alert ("It's a tie! Want to retry?");
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    alert ("You win!");
                
                } else {
                    alert ("You lose.");
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    alert ("You win!");
                } else {
                    alert ("You lose.");
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    alert ("You lose.");
                } else {
                    alert ("You win!");
                }
            }
        };

var results = compare(userChoice,computerChoice);
           document.write("<br><hr><br>" + results);
           for(int; i = 0; i <= 12 [i + 1]); {
  System.out.println(i);
}