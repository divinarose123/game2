/*
Requirements
The choose your own game should have, at minimum, 3 steps
The game will have 3 different endings
The story of your choose your own adventure game can be of your choosing
*/

//alert
//confirm
//prompt
/*
alert('Welcome to Tucker and Zyra adventure game')
alert('Not just any normal day, but a weird day')
alert('Will you be able to make it home safetly on your normal walk?')
alert('Will you able to resist the delicious food they left in the counter')
alert('Will you be able to resist from chasing small critters?')
alert('Will you able to resist not being distructive when they leave the house?')
*/
var gameOver = false
var score = 0;
var name = prompt('Before we go on adventure, tell me your name?')
var readyToPlay= confirm('Ready to go on adventure?')

if(gameOver == false) {
    alert('BEEP BEEP BEEP')
    alert('Good morning! Time to go for a walk')
    
    var wakeUp= prompt('Would you like to wake them up, bark or wait')

    if(wakeUp === 'bark') {
        alert('Woke them up! got you guys ready to walk! Next level!')
        score++
    }else if(wakeUp === 'wait') {
        alert('waited for too long, ended up peeing in the carpet! Try again!')
        gameOver = true
        score--
    }else{
        alert('lick lick, woke up!')
        score++
        
    }
}

if(gameOver == false ) {
    alert(`on to the next level, your score is ${score}`)
    alert('Going for walk..peeing..pooping..walking..playing')
    alert('OH NO! ')
    var littleCreatures = prompt('You guys saw a two creatures, pigeon, cat, or keep walking')

    if(littleCreatures === 'keep walking') {
        alert('Such good babies! you guys get treats! Next level!')
        score++

    } else if(littleCreatures === 'pigeon') {
        alert('Chase the pigeon, now you got lost! try again!')
           gameOver = true
           score--
    }else{
        alert('hissed at you guys and scratched you! try again!')
        score--
    
    }
}

if(gameOver == false) {
    alert(`good job! you made it home! your score is ${score}`)
    alert('Now I have to go to work! behave! ')
    alert('OHHHHHH, What is this?')
    var temptations = prompt('You guys saw a chocolate, chew bone, toy, or trash')

    if(temptations === 'chocolate') {
    alert('YUMMY soo YUMMY')
    alert('8 hours later, mom opens the door!')
    alert('FARTSSS, Vomit!')
    alert('mom take you guys to the vet! better luck next time!')
    gameOver = true
}else if(temptations === 'toy') {
    alert('8 hours later, mom opens door')
    alert('Good babies!! heres a treat!')
    score++
  
}else if(temptations === 'trash') {
    alert('gobble gobble, so much good stuff')
    alert('opens the door, BAD BABIES! Try again!')
}else{
    alert('Opens the door! awww you guys playing and being good babies')
    alert('heres a treat!')
}
}

if(gameOver == false) {
    alert(`Almost the end of the day, FOOD FOOD!! score is ${score}`)
    alert('grumbles, grumbles....')
    alert('FOOD FOOD')
    var dinnerTime = prompt('Time for dinner! oh no theres 4 choices, purple plate, blue bowl, gray plate, pink bowl')

    if(dinnerTime === 'pink bowl') {
        alert('got my food!! soo full! heres an extra treat!')
        score++
    }else if(dinnerTime === 'gray plate') {
        alert('taste different than usual! ohh snap! its dads!')
        alert('That big glare staring right back at me!')
        alert('try again')
        gameOver = true
    }else if(dinnerTime === 'blue bowl') {
        alert('the other onw don/t have anthing to eat! thanks a lot')
        alert('now your food is their food! game over!')
    }else{
        alert('soo much goodness! gobble gobble')
        alert('bad babies!!')
        alert('try again!')
    }

}

if(gameOver == false) {
    alert(`yawning the end of the day, score is ${score}`)
    alert('time to go to sleep')
    var nightTime = prompt('so sleepy which bed, right, left, or middle')

    if(nightTime === 'right')
    alert('falls asleep')
    alert('soo comfy still safe at night')
    gameOver = true
}else if(nightTime === 'middle') {
    alert('with mom and dad. feels safe and just right! the end!')
}else{
    alert('lots of blankets and pillows still warm.')
}