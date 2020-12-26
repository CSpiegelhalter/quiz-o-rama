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

]

var bookQuiz = false;
var logoQuiz = false;
var elementQuiz = false;


localStorage.setItem("bookQuiz", bookQuiz);
localStorage.setItem("elementQuiz", elementQuiz);
localStorage.setItem("logoQuiz", logoQuiz);


var myScore = document.querySelector("#score")
var optionsEL = document.querySelector("#answerOptions")
var imgEl = document.querySelector("#imageLandmark")
var timeEl = document.querySelector("#countdown")
var userLog = document.querySelector(".inputScore")
score = 0;

timeLeft = 100;
numQuestion = -1;
var questionImage;
console.log("testing");
startQuiz()

function startQuiz() {

    setTime();
    renderLandmarks();

}


function renderLandmarks() {
    console.log("hello world")
    myScore.textContent = "Score: " + score;
    optionsEL.innerHTML = ''
    numQuestion++;
    if (numQuestion < landmarkSet.length) {
        var questions = landmarkSet[numQuestion];
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

    if (questionAnswer === event.target.textContent) {
        score += 10;
        renderLandmarks()
        

    } else {
        score -= 10;
        timeLeft -= 10;
        renderLandmarks();
    }
})

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            gameEnd()
        }
    }, 1000);
}

function gameEnd() {
    var landmarkQuiz = true;
    localStorage.setItem("landmarkQuiz", landmarkQuiz)
    finalScore = score + timeLeft;
    window.localStorage.setItem("landmarkScore", finalScore);
    window.location = "highscores.html";
    
}