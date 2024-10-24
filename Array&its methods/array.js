// creating an similar type of array
let marks=[2,4,5,78,990];
console.log(marks);


//creating an array which can store different datatypes

let pro=["Ashish",99.99, "Basnet"];
console.log(pro);

// accesing the element in array

console.log(pro[2]);

// determing the array length

console.log(pro.length);






//chaining the array

console.log(pro[0].length);

//proving that array are mutable
pro[1]="Bahadur";
console.log(pro);




// Array methods pop push shift and unshift
pro.push("chettri")
console.log(pro);

pro.pop();
console.log(pro);


pro.unshift("Handsome");
console.log(pro);

pro.shift();// removing first element from array
console.log(pro);

// Array methods index of 
let rap=["ashish","basnet","chettri"];
console.log(rap.indexOf("ashish"));// 0 ans

console.log(rap.indexOf("don"));// -1 if not found







// array method includes: searching for value
console.log(rap.includes("basnet")); //returns true
console.log(rap.includes("don"));// false if not found



// concat in array
let ash=[5,"Ashish",32];
let bas=[3,"you"];
let op=ash.concat(bas);
console.log(op);//[5,"Ashish",32,3,"you"]

console.log(ash);//[5,"Ashish",32]


//reverse an array
ash.reverse();
console.group(ash); // reversing the element in original array







// slice method
console.log(op.slice);// means want a copy of all elements


console.log(op.slice(1));// wants all element from 1 th indx to the last

console.log(op.slice(0,3));// here 0 is staring index and 3 is ending index .note it is just like string slice method so last index is exclusive


console.log(op.slice(-2)); // wants last two  element 



// sort methods
let papa=["Ashish","ashish","chettri","xray"];
console.log(papa.sort());


let Num=[100,20,8,64];
console.log(Num.sort());

                        // splice method most imp



let mama=["Ashish","basnet","chetrri","januaray","feburary"];
mama.splice(0,3 ,"Hari","Basnet");
console.log(mama);



                    //Array refrences
let a=[1,2,3,45,0];
let bob = a;
a.pop();
console.log(a);
console.log(bob);




                // constant array
const arr=[1,2,3,4,5];
arr.pop();
console.log(arr);
arr.push(6);
console.log(arr);

/*arr=[3,2,4,5,6,7,78,8,9,9,9,9];
console.log(arr); this is not possible*/


                    // NEsted array
let num1=[[1,2],[3,7],[3,4,5,6]];
console.log(num1);
console.log(num1.length);
console.log(num1[0]);

console.log(num1[2][3]);
