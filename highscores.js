// Check which test was just taken 
var landmarkQuiz = localStorage.getItem("landmarkQuiz");
var elementQuiz = localStorage.getItem("elementQuiz");
var logoQuiz = localStorage.getItem("logoQuiz");
var bookQuiz = localStorage.getItem("bookQuiz");

// Gets score and name stored in localStorage or returns and empty array if it hasn't been made 
var landmark = JSON.parse(localStorage.getItem("landmark")) || [];
var element = JSON.parse(localStorage.getItem("element")) || [];
var logo = JSON.parse(localStorage.getItem("logo")) || [];
var book = JSON.parse(localStorage.getItem("book")) || [];

// Checks latest score 
var landmarkRecent = localStorage.getItem('landmarkScore');
var elementRecent = localStorage.getItem('elementScore');
var logoRecent = localStorage.getItem('logoScore');
var bookRecent = localStorage.getItem('bookScore');

// Gets elements from html document 
var landCat = document.querySelector("#landmarkScores");
var bookCat = document.querySelector("#CoverScores");
var logoCat = document.querySelector("#logoScores");
var eleCat = document.querySelector("#ElementScores");
var userInitials = document.querySelector("#inputScore");

// Checks storage for previous scores and displays them 
if (landmark !== null) {
    landCat.innerHTML = landmark.map(score => {
        return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
    }).join("");
} 
// Checks storage for previous scores and displays them 
if (element !== null) {
    eleCat.innerHTML = element.map(score => {
        return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
    }).join("");
} 
// Checks storage for previous scores and displays them 
if (logo !== null) {
    logoCat.innerHTML = logo.map(score => {
        return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
    }).join("");
} 
// Checks storage for previous scores and displays them 
if (book !== null) {
    bookCat.innerHTML = book.map(score => {
        return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
    }).join("");
} 

// Runs code if 'Enter' button is pressed after typing in the input box 
userInitials.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        event.preventDefault();

        // Runs if landmark quiz was just taken 
        if (landmarkQuiz == "true") {

            // Creates an object that needs to be logged 
            const scoreToAddd = {
                score: landmarkRecent,
                name: userInitials.value
            };

            // Adds object to array and then sorts it 
            landmark.push(scoreToAddd);
            landmark.sort( (a,b) => b.score - a.score);

            // Only allows the top 5 scores 
            landmark.splice(5);

            // Stores score in storage 
            localStorage.setItem("landmark", JSON.stringify(landmark));

            // Creates an 'li' element with score and name 
            landCat.innerHTML = landmark.map(score => {
                return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
            }).join("");

            // Resets program back to default so you can take another quiz 
            landmarkQuiz = false;
            localStorage.setItem("landmarkQuiz", landmarkQuiz);
            
        }

        // Runs if element quiz was just taken 
        else if (elementQuiz == "true") {

            // Creates an object that needs to be logged 
            const scoreToAddd = {
                score: elementRecent,
                name: userInitials.value
            };

            // Adds object to array and then sorts it
            element.push(scoreToAddd);
            element.sort( (a,b) => b.score - a.score);

            // Only allows the top 5 scores 
            element.splice(5);

            // Stores score in storage 
            localStorage.setItem("element", JSON.stringify(element));

            // Creates an 'li' element with score and name 
            eleCat.innerHTML = element.map(score => {
                return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
            }).join("");

            // Resets program back to default so you can take another quiz 
            elementQuiz = false;
            localStorage.setItem("elementQuiz", elementQuiz);
            
        }

        // Runs if logo quiz was just taken 
        else if (logoQuiz == "true") {

            // Creates an object that needs to be logged 
            const scoreToAddd = {
                score: logoRecent,
                name: userInitials.value
            };

            // Adds object to array and then sorts it
            logo.push(scoreToAddd);
            logo.sort( (a,b) => b.score - a.score);

            // Only allows the top 5 scores
            logo.splice(5);

            // Stores score in storage 
            localStorage.setItem("logo", JSON.stringify(logo));

            // Creates an 'li' element with score and name 
            logoCat.innerHTML = logo.map(score => {
                return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
            }).join("");

            // Resets program back to default so you can take another quiz 
            logoQuiz = false;
            localStorage.setItem("logoQuiz", logoQuiz);           
        }

        // Runs if book cover quiz was just taken 
        else if (bookQuiz == "true") {

            // Creates an object that needs to be logged 
            const scoreToAddd = {
                score: bookRecent,
                name: userInitials.value
            };

            // Adds object to array and then sorts it
            book.push(scoreToAddd);
            book.sort( (a,b) => b.score - a.score);

            // Only allows the top 5 scores
            book.splice(5);

            // Stores score in storage 
            localStorage.setItem("book", JSON.stringify(book));

            // Creates an 'li' element with score and name 
            bookCat.innerHTML = book.map(score => {
                return `<li class="high-scores">${score.name}:  ${score.score}</li>`;
            }).join("");

            // Resets program back to default so you can take another quiz 
            bookQuiz = false;
            localStorage.setItem("bookQuiz", bookQuiz);            
        }    
    }
});
