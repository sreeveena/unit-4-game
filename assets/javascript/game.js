// function to create a random number between 19 -120
function reachScore(){
   return Math.floor(Math.random() * (102)) + 19;
}
//function to generate rando value between 1-12
function crystalRandom(){
   return Math.floor(Math.random() * (12)) + 1;
}
$(".randomNumber").text(reachScore());
//console.log(reachScore());