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

pro.shift();
console.log(pro);