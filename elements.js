const elementSet = [

    {  
        image : "./Assets/logos/al.jpg",
        choices : ["aluminium", "almightium", "allonium", "alicium"],
        answer : "aluminium"
    },

    {
        image : "./Assets/logos/ca.jpg",
        choices : ["cadmium", "calcium", "cadmine", "cobalt"],
        answer : "calcium"
    },

    {
        image : "./Assets/logos/cobalt.jpg",
        choices : ["calcium", "cadmium", "copper", "cobalt"],
        answer : "cobalt"
    },

    {
        image : "./Assets/logos/uranium.jpg",
        choices : ["plutonium", "uranus", "uranium", "not an element"],
        answer : "uranium"
    },

    {
        image : "./Assets/logos/he.jpg",
        choices : ["hydrogen", "hemium", "helium", "hemanium"],
        answer : "helium"
    },

    {
        image : "./Assets/logos/p.jpg",
        choices : ["kasium", "kalium", "krypton", "potassium "],
        answer : "potassium"
    },

    {
        image : "./Assets/logos/hydro.jpg",
        choices : ["holmium", "hydrogen", "helium", "hassinum"],
        answer : "hydrogen"
    },

    {
        image : "./Assets/logos/nitro.jpg",
        choices : ["nitrogen", "nether", "nomium", "nicium"],
        answer : "nitrogen"
    },

    {
        image : "./Assets/logos/iron.jpg",
        choices : ["fenium", "fomium", "iron", "gold"],
        answer : "iron"
    },

    {
        image : "./Assets/logos/mag.jpg",
        choices : ["manganese", "magnium", "minium", "magnesium"],
        answer : "magnesium"
    }

]

var myScore = document.querySelector("#score")
var optionsEL = document.querySelector("#answerOptions")
var imgEl = document.querySelector("#imageLandmark")
var timeEl = document.querySelector("#countdown")
var userLog = document.querySelector(".inputScore")
score = 0;

timeLeft = 100;
numQuestion = -1;
startQuiz();
var questionImage;

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
})

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
    window.location = "highscores.html";
    finalScore = score + timeLeft;
}