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
                //alert(`You clicked ${gameType}`); //tells user the game type - note using backticks here - removed as was just to test
                runGame(gameType); //run the runGame function on button click if not submit, parameter is gameType. 
            }
        })
    }

    runGame("addition"); //the default is to run the addition game after the dom has loaded
})


// run the game
/**
 * the main game loop, called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // each number is a random whole number between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //check if the game type is addition
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); //run the function relevant to that game type, taking in the parameters from above num1 and 2
    } else {
        alert(`unknown game type: ${gameType}`); //alert to display to user
        throw `unknown game type: ${gameType}. Aborting!` //msg to display in console and will end the game
    }
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
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// display the questions
function displaySubtractQuestion() {
    
}

// display the questions
function displayMultiplyQuestion() {
    
}