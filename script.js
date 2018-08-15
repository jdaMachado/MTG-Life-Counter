var p1Display = document.getElementById("p1");
var p1Score = 20;
p1Display.textContent = p1Score;

var p2Display = document.getElementById("p2");
var p2Score = 20;
p2Display.textContent = p2Score;

var p1Minus1Button = document.getElementById("p1Minus1");
var p1Plus1Button = document.getElementById("p1Plus1");
var p1Minus5Button = document.getElementById("p1Minus5");
var p1Plus5Button = document.getElementById("p1Plus5");

var p2Minus1Button = document.getElementById("p2Minus1");
var p2Plus1Button = document.getElementById("p2Plus1");
var p2Minus5Button = document.getElementById("p2Minus5");
var p2Plus5Button = document.getElementById("p2Plus5");

var p1cantLose = false;
var p2cantLose = false;
var p1CLButton = document.getElementById("p1cl");
var p2CLButton = document.getElementById("p2cl");

var resetButton = document.getElementById("reset");


p1Minus1Button.addEventListener("click", function(){
    p1Score--;
    p1Display.textContent = p1Score;
    if (( p1Score <= 0) && !p1cantLose ){
        p1Display.style.color = "red";
        p2Display.style.color = "green";
    }
});

p1Plus1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score;
});

p1Minus5Button.addEventListener("click", function(){
    p1Score = p1Score - 5;
    p1Display.textContent = p1Score;
    if (( p1Score <= 0) && !p1cantLose ){
        p1Display.style.color = "red";
        p2Display.style.color = "green";
    }
});

p1Plus5Button.addEventListener("click", function(){
    p1Score = p1Score + 5;
    p1Display.textContent = p1Score;
});


p2Minus1Button.addEventListener("click", function(){
    p2Score--;
    p2Display.textContent = p2Score;
    if (( p2Score <= 0) && !p2antLose ){
        p2Display.style.color = "red";
        p1Display.style.color = "green";
    }
});

p2Plus1Button.addEventListener("click", function(){
    p2Score++;
    p2Display.textContent = p2Score;
});

p2Minus5Button.addEventListener("click", function(){
    p2Score = p2Score - 5;
    p2Display.textContent = p2Score;
    if (( p2Score <= 0) && !p2cantLose ){
        p2Display.style.color = "red";
        p1Display.style.color = "green";
    }
});

p2Plus5Button.addEventListener("click", function(){
    p2Score = p2Score + 5;
    p2Display.textContent = p2Score;
});

p1CLButton.addEventListener("click", function(){
    p1cantLose=!p1cantLose;
})

p2CLButton.addEventListener("click", function(){
    p2cantLose=!p2cantLose;
})


resetButton.addEventListener("click", function(){
    resetGame();
})

function resetGame(){
    p1Score = p1Display.textContent = p2Score = p2Display.textContent = 20;

    p1Display.style.color = p2Display.style.color = "black";

};

function refreshing(){
    $('input[type="checkbox"]').each(function(){
        $(this).prop('checked', false);
    });
}
