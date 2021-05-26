// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { //when dom has loaded, run this function
    let buttons = document.getElementsByTagName("button"); //get the buttons
    for (let button of buttons){ //iterate through buttons array, returning each element in the array and storing in variable button
        button.addEventListener("click", function() { //event listener for each button, when clicked on, run function
            if (this.getAttribute("data-type") === "submit") { //if the data type is submit  
                alert("You clicked Submit!") // then display the alert
            } else { //otherwise
                let gameType = this.getAttribute("data-type"); //variable gameType is equal to the element data type
                alert(`You clicked ${gameType}`); //tells user the game type - note using backticks here
            }
        })
    }
})


// run the game
/**
 * the main game loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // each number is a random whole number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

// check the answer
function checkAnswer() {

}

// calculte answer
function calculteCorrectAnswer() {
    
}

// increment the correct score
function incrementScore() {
    
}

// increment the wrong answers
function incrementWrongAnswer() {
    
}

// display the questions
function displayAdditionQuestion() {
    
}

// display the questions
function displaySubtractQuestion() {
    
}

// display the questions
function displayMultiplyQuestion() {
    
}