
// Starter code
 $(document).ready(function(pageLoad){

 	/*--- Display information modal box ---*/
   	$(".what").click(function(){
     	$(".overlay").fadeIn(1000);

   	});

   	/*--- Hide information modal box ---*/
   	$("a.close").click(function(){
   		$(".overlay").fadeOut(1000);
   	});


    /*** TB - Monitor "New Game" button click ***/
    $("a.new").click(function(){
      newGame();

    });

    /*** TB - Start newGame on page load ***/
    newGame();

 });


// Declare global variables
var secretNumber,
    guess,
    guessCount,
    feedback,
    pastGuess,
    list;


// Main - "Guess Button" Click Event
document.getElementById("guessButton").onclick=function(event){
  event.preventDefault();   //only thing that prevents page reload?
  guess = userGuess();
  if (validGuess()) {
    guessHistory();
    userFeedback();
    listGuess();
    updateStats();
    console.log(secretNumber);

  }
}


//Start new game & initialize
function newGame(){
    document.getElementById("guessButton").disabled = false;
    document.getElementById("userGuess").disabled = false;
    guessCount = 0;
    pastGuess = [];
    updateScreen();
    secretNumber = getSecretNum();
}


//Generate random number
function getSecretNum(){
    return Math.floor((Math.random() * 100)+1);
}


//Get user guess
function userGuess(){
     // Retrieve #userGuess
    var currentGuess = parseInt(document.getElementById("userGuess").value);

    // Reset userGuess field
    document.getElementById("userGuess").value = "";
    // jQuery solution = $("#userGuess").val("");

    return currentGuess;
}


//Validate guess
function validGuess(){
    var validNum;
    if (isNaN(guess) || guess % 1 != 0 || guess < 1 || guess > 100){
      alert("Please enter a valid number between 1 and 100");
      validNum = false;
    } else if (pastGuess.indexOf(guess) !== -1){
        alert("You have already guessed that number");
        validNum = false;
    } else {
        validNum = true;
        return validNum;
    }
}


//Provide user feedback
function userFeedback(){
    var guessDiff = Math.abs(secretNumber - guess);
    if (guessDiff == 0){
      feedback = "Spot on!  Good Guess";
      winner();
    } else if (guessDiff <= 10 ){
        feedback = "Very Hot";
    } else if (guessDiff <= 20){
        feedback = "Hot";
    } else if (guessDiff <= 30) {
        feedback = "Warm";
    } else if (guessDiff <= 50) {
        feedback = "Cold";
    } else {
        feedback = "Cold";
    }
    return feedback;
}


//Track guesses
function guessHistory(){
    pastGuess.push(guess);
    guessCount++;
}


//List previous guesses
function listGuess(){
  // Retrieve list element 'ul'
  list = document.getElementById("guessList");

  var item = document.createElement('li');
  item.appendChild(document.createTextNode(guess));
  list.appendChild(item);
}


//Update stats
function updateStats(){
  document.getElementById("count").innerHTML = guessCount;
   //jQuery solution = $("#count").text(guessCount);

  document.getElementById("feedback").innerHTML = feedback;
    //$("#feedback").text(feedback);
}

// Reset screen stats and boxes for new game
function updateScreen(){
  /* Took time to figure out - also added jQuery solutions
     for future reference */

  document.getElementById("feedback").innerHTML = " Make Your Guess!";
    //jQuery = $("#feedback").text("Make Your Guess!");

  document.getElementById("count").innerHTML = 0;

  document.getElementById("guessList").innerHTML = "";
    //jQuery = $("#guessList").empty();
}


function winner(){
  updateStats();
  document.getElementById("guessButton").disabled = true;
  document.getElementById("userGuess").disabled = true;
}

