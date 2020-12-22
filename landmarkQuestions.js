const question = [

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

$(document).ready(function() {
    for (let index = 0; index < question.length; index++) {
        $(".questionFigure").attr("src", question[index].image);
        var choice = question[index].choices
        for (var options in choice) {
            var myName = $('<input type="radio">');

            myName.attr("name", options);
            var myValue = myName.attr("value", question[index].choices[options]);
            $("#answerOptions").append($('<span>').text(choice[options]).prepend(myName));
            console.log(myName.attr("value"));
            console.log(question[index].choices[options]);
            var myChoice = $(myValue).attr("value");
        }
        
        console.log(myChoice);
        // var rightAnswer = myName.attr("value", )
        if (myChoice == question[index].answer) {
            // correctAnswer == parseInt(check.attr("value"))) {
            alert("correct")
        }
        else {
            alert("w")
            continue;
        }
        
        
        
    }
});