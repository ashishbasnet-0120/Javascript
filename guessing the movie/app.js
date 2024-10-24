/*let favourite="kalki";
let guess=prompt("guess the favourite movie: ");
if(guess!=favourite){
    console.log("sorry you are wrong");

}
else{
    console.log(`congratulatons you are right .The favourite movie is ${guess}`);
}*/



// METHOD 2

let favourite="kala";

let guess=prompt("enter the favourite movie: ");

while(guess!=favourite   ){
    console.log("you are wrong");
    guess=prompt("you are wrong please re enter: ");
}
console.log("congratulations");

