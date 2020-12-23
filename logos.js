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