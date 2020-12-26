// Questions, answer options, and answer object
const bookSet = [

    {  
        image : "./Assets/books/code.jpg",
        choices : ["angels and demons", "the da vinci code", "the last day", "misery"],
        answer : "the da vinci code"
    },

    {
        image : "./Assets/books/dragon.jpg",
        choices : ["lord of the rings", "dragon rider", "how to train your dragon", "eragon"],
        answer : "eragon"
    },

    {
        image : "./Assets/books/events.jpg",
        choices : ["the phantom", "phantasm", "good omens", "a series of unfortunate events"],
        answer : "a series of unfortunate events"
    },

    {
        image : "./Assets/books/gatsby.jpg",
        choices : ["the giver", "the great gatsby", "the outsiders", "the unknown"],
        answer : "the great gatsby"
    },

    {
        image : "./Assets/books/hunger.jpg",
        choices : ["hunger games", "mockingbird", "mockingjay", "mazerunner"],
        answer : "hunger games"
    },

    {
        image : "./Assets/books/it.jpg",
        choices : ["the haunting", "it", "insomnia", "the shining"],
        answer : "it"
    },

    {
        image : "./Assets/books/percy.jpg",
        choices : ["percy jackson and the olympians: the lightning thief", "gods of manhattan", "atlantis", "atlantis rising"],
        answer : "percy jackson and the olympians: the lightning thief"
    },

    {
        image : "./Assets/books/potter.jpg",
        choices : ["harry potter and the order of the phoenix", "harry potter and the deathly hallows", "harry potter and the half-blood prince", "harry potter and the goblet of fire"],
        answer : "harry potter and the deathly hallows"
    },

    {
        image : "./Assets/books/Twilight.jpg",
        choices : ["dawn", "vampire stories", "twilight", "after"],
        answer : "twilight"
    },

    {
        image : "./Assets/books/wild.jpg",
        choices : ["the monster within", "corduory", "where the wild things are", "casberry"],
        answer : "where the wild things are"
    }

];

// Sets each other test to false in case they weren't set
var landmarkQuiz = false;
var logoQuiz = false;
var elementQuiz = false;

// Logs it to storage
localStorage.setItem("landmarkQuiz", landmarkQuiz);
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
    renderBooks();

}

function renderBooks() {

    // Shows score
    myScore.textContent = "Score: " + score;

    // Creates an empty string to later append the question options to 
    optionsEL.innerHTML = '';

    // Increases each time function is ran to check which question to use 
    numQuestion++;

    // Runs through each question   
    if (numQuestion < bookSet.length) {
        var questions = bookSet[numQuestion];

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
        renderBooks();
    }
        
    // Checks if the incorrect answer was chosen then subtracts 10 to score and time then re-runs function above 
    else {
        score -= 10;
        timeLeft -= 10;
        renderBooks();
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
    var bookQuiz = true;
    localStorage.setItem("bookQuiz", bookQuiz);

    // Users final score to be logged 
    finalScore = score + timeLeft;
    window.localStorage.setItem("bookScore", finalScore);

    // Changes to highscore screen 
    window.location = "highscores.html";
    
}