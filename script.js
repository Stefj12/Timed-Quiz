var questions = [
    {
        questTit:"Which school is termed as the Mecca of college football in South Bend?",
        options:["Alabama","OhioState","USC","NotreDame"],
        answer:"Notre Dame"

    },
    {
        questTit:"The winningest program in college football history in Ann Arbor is who?",
        options:["Iowa","Michigan","USC",",Georgia"],
        answer:"Michigan"

    },
    {
        questTit:"The oldest program in the Sunshine State is which school?",
        options:["Clemson","Alabama","USC","Florida"],
        answer:"Florida"

    },
    {
        questTit:"Who caught Doug Flutie's Hail Mary pass to beat Miami in 1984?",
        options:["Deion Sanders","Walter Camp","Bo Jackson","Gerard Phelan"],
        answer:"Gerard Phelan"

    },
]  


var timeclock = 60
var playerscode = 0
var challengeques = 0

var startBtn = document.getElementById("startGame")
var questionScr = document.getElementById("questionScr")

function startQuiz(){
    console.log("Game Started")
    var startScreenEl = document.getElementById("startScreen");
    startScreenEl.setAttribute("class", "hide");
    
    
    questionScr.removeAttribute("class")
nextQuest()
}

function nextQuest(){
   console.log("Population Next Quest") //get current question object from array
   var currentQuestion = questions[challengeques];
   document.getElementById("askQuestion").textContent = currentQuestion.questTit;
   
}

function checkAnswer(){
   var nextQuest = nextquestion[challengeques];
   document.getElementById("nextQuestion").textContent = nextQuest.questTit;
   console.log("Population Next Quest")
}

function QuizResults(){

}

startBtn.onclick = startQuiz;
