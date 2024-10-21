// question 1
let num=20;
if(num%10==0){
    console.log("good");
}
else{
console.log("bad");
}
// prompt and alert

let nam=prompt("your name:");
let age=prompt("your age: ");
let info=`your name is ${nam} and age is ${age}.`;
alert(info);


//golden string or not
let value="Ashish Basnet";
if((value[0]=="a"|| value[0]=="A") && (value.length>5)){
    console.log("good");
}
else{
    console.log("bad");
}
// greatest among three number

let a=5;
let b=6;
let c=7;
if(a>b){
    if(a>c){
        console.log(a,"is greatest");
    }
    else{
        console.log( c,"is greatest");
    }
}
else{
    if(b>c){
        console.log(b,"is gratest");
    }
    else{
        
            console.log(c,"is greatest");
        }
    }
