// trim method

let about=prompt("enter anything: ");// string methods does not change the original string they make new string with new proprty
console.log(about.trim());// here console.log() is a method we use trim method inside it 







//str.toUpperCase() and str.toLowerCase()
let name="safaL";
 console.log(name.toUpperCase());// we can use console or save the result in new variable and display it
console.log(name.toLowerCase());
console.log(name);// safaL  so strings are immutable in js




//string method with arguments

let msg="i love programming language";
let result=msg.indexOf("programming");
console.log(result);// 7 because it also count space and gives index of first letter we are searching for

console.log(msg.indexOf("z"));//-1 because z not belong to the string and method can't find


// method chaining

let safal="   ashish  ";
console.log(safal.trim().toUpperCase());// ASHISH


// slice method
let price="i am ashish basnet";
//if i want to print ashish then
console.log(price.slice(5,11));//ending index is 11 because last index is non inclusive

console.log(price.slice(-10));// -10 means price.length-10 sp result= ish basnet


console.log(price.slice(17));// output=t 


// replace and repeat methid in string


// replace
let product="biscuit and chauchau";
let newProduct=product.replace("chauchau","chocolate");
console.log(newProduct);

//repeat

console.log(newProduct.repeat(4));
