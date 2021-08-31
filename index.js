var readlineSync = require('readline-sync');

var score=0;
var username=readlineSync.question("What's your name?");

console.log("Welcome "+username+", DO YOU KNOW Hiddartho?");

//function

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong");
  }
  console.log("current score ",score);
  console.log("--------------------");
}
var questions=[{
  question:"Where do i live?",
  answer:"dib"
},
{
  question:"What do i Study?",
  answer:"bca"
}];

//loop
var i;
for(i=0;i<questions.length;i++){
 play(questions[i].question,questions[i].answer)
}
console.log("YAY!, You scored: ",score)

//high scores

var highScore=[{
  name:"sergio",
  score:"10"
},
{
  name:"Anukruti",
  score:"5"
}];

console.log("The HIGH SCORES are:");

for(var i=0;i<highScore.length;i++){
  console.log(highScore[i].name,highScore[i].score);
}
