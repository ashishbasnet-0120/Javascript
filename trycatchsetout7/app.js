// this keyword
const info={
    name:"ashish",
    class:12,
    math:120,
    science:250,
    getvalue(){
        let marks=(this.math+this.science)/2;// basically this keyword is used to point the value of object 
        console.log(marks);
    }
}
console.log(info.getvalue());// calling the getvalue()method

 function getvalue(){
    let marks=(this.math+this.science)/2;// basically this keyword is used to point the value of object 
    console.log(marks);
}
console.log(getvalue());// it is not implemented because it is not ointing the value of object

// try catch in js simple way
console.log("hello");
console.log("hello");
console.log("hello");
try{ 
    console.log(a);// a is not defined 
}catch{
    console.log("problem found");
}

// try catch in js using catch block as function
console.log("hello");
console.log("hello");
console.log("hello");
try{ 
    console.log(a);// a is not defined 
}catch(err){
    console.log(err);
}


// arrow functions in js

const power=(a,b)=>{
    let ans=a**b;
    console.log(ans);
}
console.log(power(2,3));// calling

// similarly
const powe= n =>{// this is valid only for single arguments
    let ans=n*n;
    console.log(ans);
}
console.log(powe(2));// calling

// implicit  return arrow function 
const sum=(a,b) =>(a+b);
console.log(sum(2,3));


// setTimeout 

console.log("hello");
setTimeout(() => {
    console.log("window");
}, 5000);

console.log("Welcome to Our");


// setinterval 
console.log("hello");
 let id=setInterval(() => {
    console.log("window");
}, 2000);


console.log("Welcome to Our");

clearInterval(id);//  setinterval will continue until this is used in console window for stopping

// this with arrow function most imp concept
const raja={
    name:"Ashish",
    prop:this,
    in1:function(){setTimeout(()=>{
        console.log(this);
    },300)},
    in2:function(){setTimeout(function(){
        console.log(this);
    },300)},
}
raja.in1();
raja.in2();
