//Variables for counting
var countGuessL = 3;
var countGuessF = [];
var countWin = 0;
var countloss = 0;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];



document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {
 
       document.getElementById("countWin").innerHTML = countWin;
       document.getElementById("countloss").innerHTML = countloss;
       document.getElementById("countGuessL").innerHTML = countGuessL;
       document.getElementById("countGuessF").innerHTML = countGuessF;
   
       if (userGuess === computerGuess) {
           countWin++;
           countGuessL = 3;
           countGuessF = [];
       }

       if (userGuess != computerGuess) {
           countGuessL --;
           countGuessF.push(userGuess);
       }

       if (countGuessL === 0) {

       countGuessL = 3;
       countloss ++;
       countGuessF = [];
       }
    }
      
}       
