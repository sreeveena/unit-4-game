// function to create a random number between 19 -120
function scoreToReach(){
   return Math.floor(Math.random() * (102)) + 19;
}
//function to generate rando value between 1-12
function random4Crystals(){
   return Math.floor(Math.random() * (12)) + 1;
}
// The score user needs to reach and was generated by computer using math.random function
 $(".randomNumber").text(scoreToReach());
 
//console.log(reachScore());

// This function increment the score when ever a gem is clicked
var sum = 0;
var wins = 0;
var losses = 0;
function incrementScore(){
    sum += parseInt($(this).text());
    // console.log(sum);
    $(".scoreCounter").text(sum);

    if(parseInt($(".randomNumber").text()) === sum){
        // console.log ("compare Success");
    wins++;
    $(".status").text("You Won!");
    $(".wins").text("Wins: "+ wins);
    setDefaultValues();
    
    }else if(parseInt($(".randomNumber").text()) < sum){
        // console.log ("compare Failure");
        $(".status").text("You Lost!");
        losses++;
        $(".losses").text("Losses: "+ losses);
        setDefaultValues();
    }
    
}

// Different random numbers generated by computer for each gem
 $("#image1").text(random4Crystals());
 $("#image2").text(random4Crystals());
 $("#image3").text(random4Crystals());
 $("#image4").text(random4Crystals());
// console.log($("#image1").text());
// console.log($("#image2").text());
// console.log($("#image3").text());
// console.log($("#image4").text());

//calling the function increment when a particular gem is clicked
$("#image1").on("click", incrementScore);
$("#image2").on("click", incrementScore);
$("#image3").on("click", incrementScore);
$("#image4").on("click", incrementScore);

// function to set different values and make total score to zero

function setDefaultValues(){
    $(".scoreCounter").text("0");
    sum = 0;
    $(".randomNumber").text(scoreToReach());
    $("#image1").text(random4Crystals());
     $("#image2").text(random4Crystals());
     $("#image3").text(random4Crystals());
     $("#image4").text(random4Crystals());
//      console.log($("#image1").text());
// console.log($("#image2").text());
// console.log($("#image3").text());
// console.log($("#image4").text());
}





