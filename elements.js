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

]

var bookQuiz = false;
var logoQuiz = false;
var landmarkQuiz = false;


localStorage.setItem("bookQuiz", bookQuiz);
localStorage.setItem("landmarkQuiz", landmarkQuiz);
localStorage.setItem("logoQuiz", logoQuiz);
         

var myScore = document.querySelector("#score")
var optionsEL = document.querySelector("#answerOptions")
var imgEl = document.querySelector("#imageLandmark")
var timeEl = document.querySelector("#countdown")
var userLog = document.querySelector(".inputScore")
var scoreList = document.querySelector("#ElementScores")
var userInitials = document.querySelector("input")
var initials = ""
score = 0;

timeLeft = 100;
numQuestion = -1;
var questionImage;
startQuiz()

function startQuiz() {

    setTime();
    renderElements();

}

function renderElements() {
    
    myScore.textContent = "Score: " + score;
    optionsEL.innerHTML = ''
    numQuestion++;
    if (numQuestion < elementSet.length) {
        var questions = elementSet[numQuestion];
        questionImage = questions.image;
        imgEl.setAttribute("src", questionImage)

        questionChoices = questions.choices;
        console.log(questionChoices)
        questionAnswer = questions.answer;

        for (let i = 0; i < questionChoices.length; i++) {
            var myOption = document.createElement("button");
            myOption.textContent = questionChoices[i];
            myOption.setAttribute("class", "btn-warning p-3 ml-3");
            myOptionBtrn = optionsEL.appendChild(myOption)
        }
    } else {

        gameEnd()
    }

}

optionsEL.addEventListener("click", function(event) {

    console.log(event.target.textContent)
    if (questionAnswer === event.target.textContent) {
        score += 10;
        renderElements();

    }    

    else {
        score -= 10;
        timeLeft -= 10;
        renderElements();
    }
});



function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function gameEnd() {
    var elementQuiz = true;
    window.localStorage.setItem("elementQuiz", elementQuiz)
    finalScore = score + timeLeft;
    window.localStorage.setItem("elementScore", finalScore);
    window.location = "highscores.html";
    
}