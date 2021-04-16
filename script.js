//Variables where outcome from each game are stored and tracked
var wins = 0;
var loses = 0;
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
        window.alert('Tie!')
    }
}