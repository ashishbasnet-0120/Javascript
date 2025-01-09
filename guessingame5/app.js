// guessing the number from 1 to max

let user=prompt("please enter any number from 1 to max: ");
const random=Math.floor(Math.random()*user+1);
while(true){
    if(user==random){
        alert("congratulation. you are right.");
   break;
    }

    if(user=="quit"){
        alert("you quit the game");
        break;
    }

    if(user<random){
        user=prompt(" your guess is too small: ");
    }
    else if(user>random){
        user=prompt("your guess is too large");
    }
}