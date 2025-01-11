// selecting element by getementbyid

console.dir(document.getElementById("ram").innerText="Null");// here selecting the element by id and it return element as object and accessing the prop and manupulating

// selecting element by classname

let ram=document.getElementsByClassName("nepal");
for(let i=1; i<=ram.length; i++){
    console.log(i, ram[i]);
}
console.log(ram);




// selecting by tag name
let babu=document.getElementsByTagName("p")[1].innerText="handsome";// accessing the elements as html collection and and the collection is also act as a object then changing the property

console.log(babu);






//queryselector
console.dir(document.querySelector("#ram"));

console.dir(document.querySelector("p"));// gives paragraph of first element
console.dir(document.querySelectorAll("p"));// gives paragraph of all element



// manuplating using properties and methods

let sugam=document.querySelector("p").innerText="<u>Hello ram iam ashish<u>";;

console.log(sugam);

let sita=document.querySelector("p").innerHTML;

console.log(sita);



// manipulating attributes 

let para=document.querySelector("p");
let getvalue=para.getAttribute("img");//
console.dir(getvalue);//null because img tag is not present in p tag 

let man=document.querySelector("img");
man=man.setAttribute("src","ss.png");
console.log(man);