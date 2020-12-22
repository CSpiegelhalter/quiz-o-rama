$("#start").on("click", function() {
    // var gameName = $("#gameName");
    // var buttons = $("#buttons");
    $("#gameName").toggleClass("fade");
    $("#buttons").toggleClass("fade");
    setTimeout(function() { var opacity = window.getComputedStyle(gameName).getPropertyValue("opacity")
    console.log(opacity);
    if ((opacity == 0) && (opacity == 0)) {
        gameName.parentNode.removeChild(gameName);
        buttons.parentNode.removeChild(buttons);
        window.location = "chooseGame.html";
    }
    else{
        return;
    }}, 1000);   
}); 

$("#back").on("click", function() {
    window.location.href = 'chooseGame.html';
});

$("#landmarks").on("click", function() {
    window.location.href = 'game.html';
});

// const startingTime = 60;
// const countdownEl = $("#countdown")

// window.onload = setInterval(timer, 1000);


// function timer() {
//     $("#countdown").text(time);
//     startingTime--;
// }

