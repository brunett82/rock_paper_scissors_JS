//Variables where outcome from each game are stored and tracked
var wins = 0;
var losses = 0;
var ties = 0;

//Options that computer will pick from to play game
var compOptions = ['R', 'P', 'S'];

var game = function(){
    //Prompts player to enter their choice and sets variable for use in remainder of function
    var userChoice = prompt('Enter R, P, or S');
    //Converts player choice to upper case letter for cleaner compare to computer's choice
    userChoice = userChoice.toUpperCase();
    //Function which enables a random selection of R,P,or S from the compOptions global variable
    var choices = Math.floor(Math.random() * compOptions.length);
    //Variable that assigns the random choice generated in choices variable above to the compChoice variable
    var compChoice = options[choices];
    //If statement used to alert player of a tie and add 1 to the var ties for record keeping
    if (userChoice === compChoice){
        ties++;
        alert('Tie!');
    } 
    /*Else if statement used to evaluate the selections of the player and the computer.  If one of the conditions is true, 1 point is added to the wins variable and an alert is fired stating the player won*/
    else if (
        (userChoice === 'R' && compChoice === 'S') ||
        (userChoice === 'P' && compChoice === 'R') ||
        (userChoice === 'S' && compChoice === 'P')
    )   {
        wins++;
        alert('Winner!');
    }
    //If conditions above are not met this statement will assume the player lost the game
    else {
        loses++;
        alert('Loser!');
    }
    //Alert to be shown between games to show the running tally of wins, losses, and ties during the current session
    alert(
        "Totals:\n Wins: " + wins "\nLosses: " + losses + "\nTies: " + ties
    );
    //Variable that creates a confirmation pop-up to ask if the player would like to play another round
    var nextRound = confirm("Would you like to play again?")
    //If player chooses yes in the confirmation pop-up the function starts again
    if (nextRound) {
        game();
    }
};

//Runs the game function when the browser opens
game();