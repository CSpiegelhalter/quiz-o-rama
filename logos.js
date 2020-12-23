const logoSet = [

    {  
        image : "./Assets/logos/android.jpeg",
        choices : ["London, England", "Berlin, Germany", "Rome, Italy", "Paris, France"],
        answer : "Paris, France"
    },

    {
        image : "./Assets/logos/delta.png",
        choices : ["Agra, India", "Xi'an, China", "Amsterdam, Netherlands", "Florence, Italy"],
        answer : "Agra, India"
    },

    {
        image : "./Assets/logos/mastercard.jpg",
        choices : ["Kenya, Africa", "Wiltshire, England", "Vienna, Austria", "Prague, Czechia"],
        answer : "Wiltshire, England"
    },

    {
        image : "./Assets/logos/motorola.png",
        choices : ["Washington, D.C.", "New York, New York State", "Austin, Texas", "Berlin, Germany"],
        answer : "New York, New York State"
    },

    {
        image : "./Assets/logos/msnbc.png",
        choices : ["Pennington County, South Dakota", "Jackson, Wyoming", "Great Falls, Montana", "Lincoln, Nebraska"],
        answer : "Pennington County, South Dakota"
    },

    {
        image : "./Assets/logos/nestle.jpg",
        choices : ["Vienna, Austria", "Budapest, Hungary", "Pisa, Italy", "Nepal, China"],
        answer : "Pisa, Italy"
    },

    {
        image : "./Assets/logos/NYtimes.png",
        choices : ["Helsinki, Finland", "San Antonio, Texas", "Los Angeles, California", "San Francisco, California"],
        answer : "San Francisco, California"
    },

    {
        image : "./Assets/logos/puma.jpg",
        choices : ["Rome, Italy", "Amsterdam, Netherlands", "Florence, Italy", "Venice, Italy"],
        answer : "Rome, Italy"
    },

    {
        image : "./Assets/logos/sprint.png",
        choices : ["Santiago, Chile", "Rio de Janeiro, Brazil", "Quito, Ecuador", "Arequipa, Peru"],
        answer : "Rio de Janeiro, Brazil"
    },

    {
        image : "./Assets/logos/starbucks.png",
        choices : ["Frankfurt, Germany", "London, England", "Paris, France", "Brussels, Belgium"],
        answer : "Paris, France"
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
console.log("testing");


function startQuiz() {

    setTime();
    renderLogos();

}

function renderLogos() {
    renderLogos.called = true;
    myScore.textContent = "Score: " + score;
    optionsEL.innerHTML = ''
    numQuestion++;
    if (numQuestion < logoSet.length) {
        var questions = logoSet[numQuestion];
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
        renderLogos()
    }
        

    else {
        score -= 10;
        timeLeft -= 10;
        renderLogos();
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