function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var hexLength = 6;
    var color = '#';
    for (var i = 0; i < hexLength; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    $(document).ready(function() {
        $("#banner").css("background-color", getRandomColor());

    })
    return "";
}
setRandomColor();

//My question
const myQuestion = [
     { "images": "ant.jpg", "answer1": "Frog", "answer2": "Emu", "answer3": "Koala", "answer4": "Ant", "answer": "Ant" },
    { "images": "camel.jpg", "answer1": "Cow", "answer2": "Dog", "answer3": "Camel", "answer4": "Addax", "answer": "Camel" },
    { "images": "antelope.jpg", "answer1": "Monkey", "answer2": "Antelope", "answer3": "Pig", "answer4": "Mouse", "answer": "Antelope" },
    { "images": "baboon.jpg", "answer1": "Baboon", "answer2": "Chicken", "answer3": "Panda", "answer4": "Horse", "answer": "Baboon" },
    { "images": "bunny.jpg", "answer1": "Buffalo", "answer2": "Turkey", "answer3": "Bunny", "answer4": "Dog", "answer": "Bunny" },
    { "images": "Dog.jpg", "answer1": "Pig", "answer2": "Dog", "answer3": "Tiger", "answer4": "Cat", "answer": "Dog" },
    { "images": "rabbit.jpg", "answer1": "Monkey", "answer2": "Rabbit", "answer3": "Camel", "answer4": "Addax", "answer": "Rabbit" },
    { "images": "tiger.jpg", "answer1": "Ant", "answer2": "Rooter", "answer3": "Tiger", "answer4": "Bunny", "answer": "Tiger" },
    { "images": "monkey.jpg", "answer1": "Monkey", "answer2": "Snake", "answer3": "Cat", "answer4": "Antelope", "answer": "Monkey" },
    { "images": "snake.jpg", "answer1": "Snake", "answer2": "Fish", "answer3": "Elephent", "answer4": "Koala", "answer": "Snake" },
    
]
var questionIndex = 0;

function loadMyQuestion() {
    $("#answer1").text(myQuestion[questionIndex].answer1);
    $("#answer2").text(myQuestion[questionIndex].answer2);
    $("#answer3").text(myQuestion[questionIndex].answer3);
    $("#answer4").text(myQuestion[questionIndex].answer4);
    $("#img_MyQuestion").attr("src", "./land/" + myQuestion[questionIndex].images);

}
// Load first question when page load
$(document).ready(function() {
    $("#test_lose").hide();
    $("#test_win").hide();
    loadMyQuestion();
})

// check answer
function checkAnswer(event) {
    var _click = event;
    var userAnswer = _click.text;
    if (myQuestion[questionIndex].answer == userAnswer) {
        //to do
        showWinResult();
        $(document).ready(function() {
            
            $("#win_text_result")[0].innerText = userAnswer;
            $("#score_coin")[0].innerText = parseInt($("#score_coin")[0].innerText) + 100;
            $("#count_win_question")[0].innerText = parseInt($("#count_win_question")[0].innerText) + 1;
        });

        var currentQuestion = myQuestion.length -1;
        if(questionIndex == currentQuestion){
             showWinfnResult();
             
        }
        // console.log(questionIndex, currentQuestion);           

    } else {
        //to do
        showLoseResult();

    }
}

function onNextClick() {
    $(document).ready(function(){
        var coin = $("#score_coin").text();
        if (coin >= 200) {
            $("#next1").show();
        }
        else {
            $("#next1").hide();
        }

    });
    loadMyQuestion(questionIndex ++);
    hideWinResult();
    setRandomColor();
    
    $("#level").trigger('play');
}

// next question (Subtraction 200 coin)
function Next() {
             
    var coin = $("#score_coin").text();          
    if (coin >= 200) {
        var xcoin = coin - 200;
       $("#score_coin").text(xcoin);  }

       questionIndex++;
loadMyQuestion(questionIndex++);

}

function showWinResult() {
    $("#question").hide();
    $("#button").hide();
    $("#test_win").slideDown(1500);
    $("#ding").trigger('play');
}

function hideWinResult() {
    $("#test_win").hide();
    $("#question").show();
    $("#button").show();
}

function showLoseResult() {
    $("#question").hide();
    $("#button").hide();
    $("#test_lose").slideDown(1500);
    $("#lose_point_number")[0].textContent = $("#score_coin")[0].innerText;
    
    $("#wrong").trigger('play');
}

function showWinfnResult() {
    $("#test_win").hide();
    $("#question").hide();
    $("#win_final").slideDown(1500);
    $("#win_point_number")[0].textContent = parseInt($("#score_coin")[0].innerText) + 100;
    console.log($("#score_coin")[0].innerText);

}

function hideLoseResult() {
    $("#test_lose").hide();
    $("#question").show();
    $("#button").show();
}