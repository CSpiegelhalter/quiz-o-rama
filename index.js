
$("#start").on("click", function() {
    $("#gameName").toggleClass("fade");
    $("#buttons").toggleClass("fade");
    setTimeout(function() {
        var opacity = window.getComputedStyle(gameName).getPropertyValue("opacity")
        console.log(opacity);
        if (opacity == 0) {
            gameName.parentNode.removeChild(gameName);
            buttons.parentNode.removeChild(buttons);
            window.location = "chooseGame.html";
        } else {
            return;
        }
    }, 1000);
});










