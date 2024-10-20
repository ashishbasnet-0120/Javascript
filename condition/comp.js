let a=10;
console.log(a>10);
console.log(a<=5);
  //making traffic light system

  let color="Red";
  if(color=="Red"){
    console.log("please! stop your vehicle");
  }
  else if(color==="Yellow"){
    confirm.log("Get ready for move");

  }
  else if(color==="Green"){
    console.log("You can go.");

  }

  else{
    console.log("There is no huge traffic you can proceed.");
  }

  //voting system using if else
  let age=10;
  if(age>=18){
    console.log("you can vote");
  }
  else{
    console.log("You are minor so, you are not allowed to vote.");
  }
  // nesting if else statement
  let marks=85;

  if(marks>=35){
    if(marks<40){
        console.log("you are just pass.");

    }
    else if(marks<=70){
        console.log("Good");
    }
    else if(marks>70){
        console.log("Outstanding");
    }
  }
  else{
    console.log("You are failed.");
  }