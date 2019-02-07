$(document).ready(function(){


var scoreToMatch = Math.floor(Math.random() * 101) + 19;
console.log(scoreToMatch);

var totalScore = 0;
console.log(totalScore)

$("#Random-number").text(scoreToMatch);
$("#totalScore").text(totalScore);



var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;

var wins = 0;
var losses = 0;
$("#Wins").text(wins);
$("#Losses").text(losses)

var ResetGame = () => {
    scoreToMatch = Math.floor(Math.random() * 101) + 19;
    $("#Random-number").text(scoreToMatch);
    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;
    totalScore = 0;
}

var win = () => {
    wins++;
    $("#wins").text(wins);
    alert("You win");
    
    
}

var lose = () => {
    losses++;
    $("#losses").text(losses);
    alert("You Lose");
    
}

console.log(crystal1)
console.log(crystal2)
console.log(crystal3)
console.log(crystal4)



$("#crystal1").on("click",function(){

    totalScore = crystal1 + totalScore

    $("#totalScore").text(totalScore);

    if(totalScore==scoreToMatch){
    
    win();
    ResetGame();
    }
    
    else if (totalScore>scoreToMatch){
        lose();
        ResetGame();
    }

    
});

$("#crystal2").on("click",function(){

    totalScore = crystal2 + totalScore;

    $("#totalScore").text(totalScore);

    if(totalScore==scoreToMatch){
    
        win();
        ResetGame();
        }
        
        else if (totalScore>scoreToMatch){
            lose();
            ResetGame();
        }

    


});


$("#crystal3").on("click",function(){

    totalScore = crystal3 + totalScore;

    $("#totalScore").text(totalScore);

    if(totalScore==scoreToMatch){
    
        win();
        ResetGame();
        }
        
        else if (totalScore>scoreToMatch){
            lose();
            ResetGame();
        }

   


});


$("#crystal4").on("click",function(){

    totalScore = crystal4 + totalScore

    $("#totalScore").text(totalScore);

    if(totalScore==scoreToMatch){
    
        win();
        ResetGame();
        }
        
        else if (totalScore>scoreToMatch){
            lose();
            ResetGame();
        }

   

})












})