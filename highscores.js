var landmarkQuiz = localStorage.getItem("landmarkQuiz")
var elementQuiz = localStorage.getItem("elementQuiz")
var logoQuiz = localStorage.getItem("logoQuiz")
var bookQuiz = localStorage.getItem("bookQuiz")


var landmark = JSON.parse(localStorage.getItem(landmark)) || [];
var element = JSON.parse(localStorage.getItem(element)) || [];
var logo = JSON.parse(localStorage.getItem(logo)) || [];
var book = JSON.parse(localStorage.getItem(book)) || [];

var landmarkRecent = JSON.parse(localStorage.getItem('landmarkScore'))
var elementRecent = localStorage.getItem('elementScore')
var logoRecent = localStorage.getItem('logoScore')
var bookRecent = localStorage.getItem('bookScore')

console.log(landmark)
console.log(element)
console.log(logo)
console.log(book)

var landCat = document.querySelector("#landmarkScores")
var bookCat = document.querySelector("#CoverScores")
var logoCat = document.querySelector("#logoScores")
var eleCat = document.querySelector("#ElementScores")
var userInitials = document.querySelector("#inputScore")

localStorage.getItem(bookCat)

userInitials.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        event.preventDefault();
        console.log(localStorage)

        if (landmarkQuiz == "true") {
            const scoreToAddd = {
                score: landmarkRecent,
                name: userInitials.value
            };
            landmark.push(scoreToAddd)
            element.sort( (a,b) => b.score - a.score)

            landmark.splice(5);

            localStorage.setItem("element", JSON.stringify(landmark));

            landCat.innerHTML = landmark.map(score => {
                return `<li class="high-scores">${score.name}-${score.score}</li>`;
            }).join("");

            landmarkQuiz = false;
            localStorage.setItem("landmarkQuiz", landmarkQuiz);

            console.log(landmark)
        }

        else if (elementQuiz == "true") {
            const scoreToAddd = {
                score: elementRecent,
                name: userInitials.value
            };
            element.push(scoreToAddd)
            element.sort( (a,b) => b.score - a.score)

            element.splice(5);

            localStorage.setItem("element", JSON.stringify(element));

            eleCat.innerHTML = element.map(score => {
                return `<li class="high-scores">${score.name}-${score.score}</li>`;
            }).join("");

            elementQuiz = false;
            localStorage.setItem("elementQuiz", elementQuiz);
            console.log(element)
        }

        else if (logoQuiz == "true") {
            const scoreToAddd = {
                score: logoRecent,
                name: userInitials.value
            };
            logo.push(scoreToAddd)
            logo.sort( (a,b) => b.score - a.score)

            logo.splice(5);

            localStorage.setItem("element", JSON.stringify(logo));

            logoCat.innerHTML = logo.map(score => {
                return `<li class="high-scores">${score.name}-${score.score}</li>`;
            }).join("");

            logoQuiz = false;
            localStorage.setItem("elementQuiz", logoQuiz);
            console.log(logo)
        }

        else if (bookQuiz == "true") {
            const scoreToAddd = {
                score: bookRecent,
                name: userInitials.value
            };
            book.push(scoreToAddd)
            book.sort( (a,b) => b.score - a.score)

            book.splice(5);

            localStorage.setItem("element", JSON.stringify(book));

            bookCat.innerHTML = book.map(score => {
                return `<li class="high-scores">${score.name}-${score.score}</li>`;
            }).join("");

            localStorage.setItem("bookCat", bookCat)

            bookQuiz = false;
            localStorage.setItem("bookQuiz", bookQuiz);
            console.log(book)
        }
        else{
            console.log("ya goofed")
        }

    
    }
});

