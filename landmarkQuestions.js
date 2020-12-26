// Questions, answer options, and answer object
const landmarkSet = [

    {  
        image : "./Assets/landmarks/TheLouvre.jpg",
        choices : ["London, England", "Berlin, Germany", "Rome, Italy", "Paris, France"],
        answer : "Paris, France"
    },

    {
        image : "./Assets/landmarks/Taj-Mahal.jpg",
        choices : ["Agra, India", "Xi'an, China", "Amsterdam, Netherlands", "Florence, Italy"],
        answer : "Agra, India"
    },

    {
        image : "./Assets/landmarks/stonehenge.jpg",
        choices : ["Kenya, Africa", "Wiltshire, England", "Vienna, Austria", "Prague, Czechia"],
        answer : "Wiltshire, England"
    },

    {
        image : "./Assets/landmarks/statueoflibery.jpg",
        choices : ["Washington, D.C.", "New York, New York State", "Austin, Texas", "Berlin, Germany"],
        answer : "New York, New York State"
    },

    {
        image : "./Assets/landmarks/rushmore.jpg",
        choices : ["Pennington County, South Dakota", "Jackson, Wyoming", "Great Falls, Montana", "Lincoln, Nebraska"],
        answer : "Pennington County, South Dakota"
    },

    {
        image : "./Assets/landmarks/TowerofPisa.jpg",
        choices : ["Vienna, Austria", "Budapest, Hungary", "Pisa, Italy", "Nepal, China"],
        answer : "Pisa, Italy"
    },

    {
        image : "./Assets/landmarks/golden-gate-bridge.jpg",
        choices : ["Helsinki, Finland", "San Antonio, Texas", "Los Angeles, California", "San Francisco, California"],
        answer : "San Francisco, California"
    },

    {
        image : "./Assets/landmarks/Colosseum-Rome-Italy.jpg",
        choices : ["Rome, Italy", "Amsterdam, Netherlands", "Florence, Italy", "Venice, Italy"],
        answer : "Rome, Italy"
    },

    {
        image : "./Assets/landmarks/Christ_the_Redeemer.jpg",
        choices : ["Santiago, Chile", "Rio de Janeiro, Brazil", "Quito, Ecuador", "Arequipa, Peru"],
        answer : "Rio de Janeiro, Brazil"
    },

    {
        image : "./Assets/landmarks/Arc-de-Triomphe.jpg",
        choices : ["Frankfurt, Germany", "London, England", "Paris, France", "Brussels, Belgium"],
        answer : "Paris, France"
    }

];

// Sets each other test to false in case they weren't set
var bookQuiz = false;
var logoQuiz = false;
var elementQuiz = false;

// Logs it to storage 
localStorage.setItem("bookQuiz", bookQuiz);
localStorage.setItem("elementQuiz", elementQuiz);
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
    renderLandmarks();

}


function renderLandmarks() {

    // Shows score 
    myScore.textContent = "Score: " + score;

    // Creates an empty string to later append the question options to 
    optionsEL.innerHTML = '';

    // Increases each time function is ran to check which question to use 
    numQuestion++;

    // Runs through each question 
    if (numQuestion < landmarkSet.length) {
        var questions = landmarkSet[numQuestion];

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
        renderLandmarks();
        
    // Checks if the incorrect answer was chosen then subtracts 10 to score and time then re-runs function above  
    } else {
        score -= 10;
        timeLeft -= 10;
        renderLandmarks();
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
    var landmarkQuiz = true;
    localStorage.setItem("landmarkQuiz", landmarkQuiz);

    // Users final score to be logged 
    finalScore = score + timeLeft;
    window.localStorage.setItem("landmarkScore", finalScore);

    // Changes to highscore screen 
    window.location = "highscores.html";
    
}