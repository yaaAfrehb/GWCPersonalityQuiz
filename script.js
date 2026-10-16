/*Add your JavaScript here*/
var geckoScore = 0;
var bunnyScore = 0;
var questionCount = 0;
var Restart;

// buttons!//

var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener("click", bunny);
var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener("click", gecko);

var q2a1 = document.getElementById("q2a1");
q2a1.addEventListener("click", bunny);
var q2a2 = document.getElementById("q2a2");
q2a2.addEventListener("click", gecko);

var q3a1 = document.getElementById("q3a1");
q3a1.addEventListener("click", gecko);
var q3a2 = document.getElementById("q3a2");
q3a2.addEventListener("click", bunny);

//restart button//
var Restart = document.getElementById("Restart");
Restart.addEventListener("click", restartQuiz);

//functions//
function bunny() {bunnyScore += 1;
questionCount += 1; 
console.log("questionCount = " + questionCount + " bunnyScore = " + bunnyScore);
             if (questionCount == 3) {
  console.log("The quiz is done!")
} if (bunnyScore >=2){
  console.log("You're more like a bunny!");
}
  else if (geckoScore >= 2){
  console.log("You're more like a gecko!");
  } outCome();}


function gecko() {geckoScore += 1;
questionCount += 1; 
console.log("questionCount = " + questionCount + " geckoScore = " + geckoScore);
            if (questionCount == 3) {
  console.log("The quiz is done!")
} outCome();
                 }

//outcome//
function outCome(){
  if (questionCount == 3){
  if (bunnyScore >=2){
  console.log("You're more like a bunny!");
result.innerHTML = "You're more like a bunny!"}
  else if (geckoScore >= 2){
  console.log("You're more like a gecko!");
  result.innerHTML = "You're more like a gecko!"}
}
}
var result = document.getElementById("result");

function restartQuiz(){
  geckoScore = 0;
  bunnyScore = 0;
  questionCount = 0;

  result.innerHTML = "Your result is...";
  console.log("Quiz restarted!");
}
  