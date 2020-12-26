// Questions, answer options, and answer object
const elementSet = [

    {  
        image : "./Assets/elements/al.jpg",
        choices : ["aluminium", "almightium", "allonium", "alicium"],
        answer : "aluminium"
    },

    {
        image : "./Assets/elements/ca.jpg",
        choices : ["cadmium", "calcium", "cadmine", "cobalt"],
        answer : "calcium"
    },

    {
        image : "./Assets/elements/cobalt.jpg",
        choices : ["calcium", "cadmium", "copper", "cobalt"],
        answer : "cobalt"
    },

    {
        image : "./Assets/elements/uranium.jpg",
        choices : ["plutonium", "uranus", "uranium", "not an element"],
        answer : "uranium"
    },

    {
        image : "./Assets/elements/he.jpg",
        choices : ["hydrogen", "hemium", "helium", "hemanium"],
        answer : "helium"
    },

    {
        image : "./Assets/elements/p.jpg",
        choices : ["kasium", "kalium", "krypton", "potassium "],
        answer : "potassium"
    },

    {
        image : "./Assets/elements/hydro.jpg",
        choices : ["holmium", "hydrogen", "helium", "hassinum"],
        answer : "hydrogen"
    },

    {
        image : "./Assets/elements/nitro.jpg",
        choices : ["nitrogen", "nether", "nomium", "nicium"],
        answer : "nitrogen"
    },

    {
        image : "./Assets/elements/iron.jpg",
        choices : ["fenium", "fomium", "iron", "gold"],
        answer : "iron"
    },

    {
        image : "./Assets/elements/mag.jpg",
        choices : ["manganese", "magnium", "minium", "magnesium"],
        answer : "magnesium"
    }

];

// Sets each other test to false in case they weren't set
var bookQuiz = false;
var logoQuiz = false;
var landmarkQuiz = false;

// Logs it to storage
localStorage.setItem("bookQuiz", bookQuiz);
localStorage.setItem("landmarkQuiz", landmarkQuiz);
localStorage.setItem("logoQuiz", logoQuiz);
         
// Grabs elements on the html document
var myScore = document.querySelector("#score");
var optionsEL = document.querySelector("#answerOptions");
var imgEl = document.querySelector("#imageLandmark");
var timeEl = document.querySelector("#countdown");

// Initialize variables that need to be globally set 
var score = 0;
var timeLeft = 100;
var numQuestion = -1;
var questionImage;

// Starts quiz and timer
startQuiz();
function startQuiz() {

    setTime();
    renderElements();

}

function renderElements() {
    
    // Shows score 
    myScore.textContent = "Score: " + score;

    // Creates an empty string to later append the question options to 
    optionsEL.innerHTML = '';

    // Increases each time function is ran to check which question to use 
    numQuestion++;

    // Runs through each question 
    if (numQuestion < elementSet.length) {
        var questions = elementSet[numQuestion];

        // Displays question image 
        questionImage = questions.image;
        imgEl.setAttribute("src", questionImage);

        questionChoices = questions.choices;

        questionAnswer = questions.answer;

        // Runs through answer options and creates a button for each 
        for (let i = 0; i < questionChoices.length; i++) {
            var myOption = document.createElement("button");
            myOption.textContent = questionChoices[i];
            myOption.setAttribute("class", "btn-warning p-3 ml-3");
            myOptionBtrn = optionsEL.appendChild(myOption);
        }
    } else {
        // Ends game if there are no more questions
        gameEnd();
    }

}

// Listens for a click on answer option buttons 
optionsEL.addEventListener("click", function(event) {

    // Checks if the correct answer was chosen then adds 10 to score and re-runs function above 
    if (questionAnswer === event.target.textContent) {
        score += 10;
        renderElements();
    }    

    // Checks if the incorrect answer was chosen then subtracts 10 to score and time then re-runs function above 
    else {
        score -= 10;
        timeLeft -= 10;
        renderElements();
    }
});


// Timer that is checked every second
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        // Ends the game if time runs out 
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            gameEnd();
        }
    }, 1000);
}

// Ends the game 
function gameEnd() {

    // This shows the program which test was just taken 
    var elementQuiz = true;
    window.localStorage.setItem("elementQuiz", elementQuiz);

    // Users final score to be logged 
    finalScore = score + timeLeft;
    window.localStorage.setItem("elementScore", finalScore);

    // Changes to highscore screen 
    window.location = "highscores.html";
    
}