// Check if the user is ready to play!
var readyToPlay =confirm('Are You Ready To Go On Adventure?')

var name= prompt("What is your name?")
//tucker and zyra found a house
var enterHouse = confirm("Do you want to go inside the house?")
alert("entering the house...")

if(enterHouse == true) { 
//zyra entered the house along tucker right beside her
alert("tucker and zyra sees three gray balls");
}
var chooseBall = prompt("They walk into the main room and found ball. Do you want to try 1, 2, or 3?");
var gameOver = true 
if(gameOver == false) {
if(chooseBall == 1) {
    alert("ball bounced just right! you get to the next level!");

}else if(chooseBall == 3) {
    alert("ohh my favorite ball!. Next level")
    
}else {
    alert("ball deflated. Game over!")
    gameOver = true
}
}
var enterKitchen = confirm("entering the kitchen")
    alert("BONES, BONES, BONES!")
var chooseBones = prompt("Large bones, Medium bones, Small bones")

if(chooseBones == "Large bones") {
    alert ("large bone is way too big! game over!");
   
}
else if(chooseBones == "Medium bones") {
    alert("the Medium bones is just right..enjoying! onto the next room")
}
else { 
    alert("choking! choking! Game over")
}   

//as the day starting to end they both headed upstairs bedroom
var enterBedroom = confirm("entering the bedroom")

var chooseBed = prompt("They see 3 beds to sleep, left, right, middle")
if(chooseBed == "left") {
    alert("the bed is deflated. uncomfortable! game over!");
    
}
else if(chooseBed == "middle") {
    alert("sleeping in bed with mommy, feel safe and nice. You win!")
    
}
else {
    alert("tossing and turning. too soft. The End!")
    gameOver = false
}
if(gameOver) {

}