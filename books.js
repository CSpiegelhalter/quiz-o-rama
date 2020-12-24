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

]

var landmarkQuiz = false;
var logoQuiz = false;
var elementQuiz = false;


localStorage.setItem("landmarkQuiz", landmarkQuiz);
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
    renderBooks();

}

function renderBooks() {
    myScore.textContent = "Score: " + score;
    optionsEL.innerHTML = ''
    numQuestion++;
    if (numQuestion < bookSet.length) {
        var questions = bookSet[numQuestion];
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
            renderBooks();
        }
        

    else {
        score -= 10;
        timeLeft -= 10;
        renderBooks();
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
    var bookQuiz = true;
    localStorage.setItem("bookQuiz", bookQuiz)
    finalScore = score + timeLeft;
    window.localStorage.setItem("bookScore", finalScore);
    window.location = "highscores.html";
    
}