// Questions, answer options, and answer object
const logoSet = [

    {  
        image : "./Assets/logos/android.jpeg",
        choices : ["robot", "samsung", "android", "irobot"],
        answer : "android"
    },

    {
        image : "./Assets/logos/delta.png",
        choices : ["delta", "united airlines", "discover", "bens"],
        answer : "delta"
    },

    {
        image : "./Assets/logos/mastercard.jpg",
        choices : ["discover", "capital one", "visa", "mastercard"],
        answer : "mastercard"
    },

    {
        image : "./Assets/logos/motorola.png",
        choices : ["samsung", "android", "bmw", "motorola"],
        answer : "motorola"
    },

    {
        image : "./Assets/logos/msnbc.png",
        choices : ["abc", "msc", "msnbc", "abc family"],
        answer : "msnbc"
    },

    {
        image : "./Assets/logos/nestle.jpg",
        choices : ["nestle", "dove", "lovelace", "john deer"],
        answer : "nestle"
    },

    {
        image : "./Assets/logos/NYtimes.png",
        choices : ["abc", "washington post", "newyork times", "pbs"],
        answer : "newyork times"
    },

    {
        image : "./Assets/logos/puma.jpg",
        choices : ["nike", "adidas", "panthers", "puma"],
        answer : "puma"
    },

    {
        image : "./Assets/logos/sprint.png",
        choices : ["at&t", "sprint", "mobile one", "carrier"],
        answer : "sprint"
    },

    {
        image : "./Assets/logos/starbucks.png",
        choices : ["fresh market", "disney", "starbucks", "starbanks"],
        answer : "starbucks"
    }

];

// Sets each other test to false in case they weren't set
var landmarkQuiz = false;
var bookQuiz = false;
var elementQuiz = false;

// Logs it to storage 
localStorage.setItem("landmarkQuiz", landmarkQuiz);
localStorage.setItem("elementQuiz", elementQuiz);
localStorage.setItem("bookQuiz", bookQuiz);

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
    renderLogos();

}

function renderLogos() {

    // Shows score 
    myScore.textContent = "Score: " + score;

    // Creates an empty string to later append the question options to 
    optionsEL.innerHTML = '';

    // Increases each time function is ran to check which question to use 
    numQuestion++;

    // Runs through each question 
    if (numQuestion < logoSet.length) {
        var questions = logoSet[numQuestion];

        // Displays question image 
        questionImage = questions.image;
        imgEl.setAttribute("src", questionImage);

        var questionChoices = questions.choices;

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
};

// Listens for a click on answer option buttons 
optionsEL.addEventListener("click", function(event) {

    // Checks if the correct answer was chosen then adds 10 to score and re-runs function above
    if (questionAnswer === event.target.textContent) {
        score += 10;
        renderLogos();
    }
        
    // Checks if the incorrect answer was chosen then subtracts 10 to score and time then re-runs function above 
    else {
        score -= 10;
        timeLeft -= 10;
        renderLogos();
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
};

// Ends the game 
function gameEnd() {
    // This shows the program which test was just taken 
    var logoQuiz = true;
    localStorage.setItem("logoQuiz", logoQuiz);

    // Users final score to be logged 
    finalScore = score + timeLeft;
    window.localStorage.setItem("logoScore", finalScore);

    // Changes to highscore screen 
    window.location = "highscores.html"; 
};