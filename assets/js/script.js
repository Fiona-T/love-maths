// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { //when dom has loaded, run this function
    let buttons = document.getElementsByTagName("button"); //get the buttons
    for (let button of buttons){ //iterate through buttons array, returning each element in the array and storing in variable button
        button.addEventListener("click", function() { //event listener for each button, when clicked on, run function
            if (this.getAttribute("data-type") === "submit") { //if the data type is submit  
                //alert("You clicked Submit!") // then display the alert - now replace this with below
                checkAnswer(); //when submit button pressed, call function to check answer
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
/**
 * compare user answer to 1st element in the array returned from the calculateCorrectAnswer function
 * display the relevant user message depending on if answer is correct or incorrect
 * run the game again, using the same game type returned from the calculateCorrectAnswer() function
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value); // userAnswer var is value from answer-box input
    let calculatedAnswer = calculateCorrectAnswer(); //calculatedAnswer var is the array returned from that function
    let isCorrect = userAnswer === calculatedAnswer[0]; //sets isCorrect var to either true or false depending on whether user answer same as 1st element of array from calcAnswer function

    if (isCorrect) { //check if isCorrect is true
        alert("Excellent! You got it right :D"); //congratulation message
    } else {
        alert(`Ooops...you answered ${userAnswer}, but the correct answer was ${calculatedAnswer[0]}!`); //otherwise show them correct answer
    }

    runGame(calculatedAnswer[1]); //then runs the game again, using 2nd element from calculatedAnswer array i.e. the game type
}

/**
 * Gets the operands and the operator from the dom
 * returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText); //gets content of operand1 element, convert to number and assigns this to var
    let operand2 = parseInt(document.getElementById("operand2").innerText); //gets content of operand1 element, convert to number and assigns this to var
    let operator = document.getElementById("operator").innerText; //gets content of operator element and assigns this to operator var

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; //returns an array - 1st element is answer, 2nd element is the game type (to continue with addition game)
    } else { //if the operator is not +, then show error msg
        alert(`Unrecognised operator ${operator}`);
        throw `Unrecognised operator ${operator}. Aborting!`;
    }
}

// increment the correct score
function incrementScore() {
    
}

// increment the wrong answers
function incrementWrongAnswer() {
    
}

// display the questions
/**
 * sets text content of elements to the random numbers generated in runGame
 * and the operator to + since this is addition game
 * @param {*} operand1 
 * @param {*} operand2 
 */
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