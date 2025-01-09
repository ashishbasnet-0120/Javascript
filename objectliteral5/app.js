// object literals

const brand={
    name:"surya",
    price:1250,
    class:"high"
};
console.log(brand);

// creating a thread/ twitter post
const thread={
username:"@ashishbasnet",
post:"about my self",
repost:10,
tags:["@sabin","@siddhartha"]
};
console.log(thread);



// getting values 

console.log(thread["username"]);
console.log(thread.repost);

// js automatically convert the key into string 

const ram={
1:"gita",
2:32,
true:"false",
undefined:"no"
};


console.log(ram["1"]);// ans gita js read key=1 as string

//console.log(ram.2);// it is not possible because js does not recogize number as string while accessing through .

console.log(ram.true);// but read true as string beause it is not a number

console.log(ram["undefined"]);


// updating adding and deleting  in object

const don={
name:"ashish",
class:5,
};
console.log(don);

don.name=420;// updating
console.log(don);


don.level="high"// adding
console.log(don);


delete don.level;//// deleting
console.log(don);


// objects of objects
const information={
    ram:{
        name:"safal",
        city:"dipayal"
    },

    Ashish:{

        name:"basnet",
        city:12,
    },

};

console.log( information.ram.city);// accessing the value

information.Ashish.level="high";//adding
console.log(information.Ashish);

                              // Array of objects
const know=[
{
    student:"ashish",
    class:12,
},
{
    student:"safal",
    city:12
},
];

console.log(know[1]);

console.log(know[0].student);
know[0].student="ramesh";

console.log(know[0].student);

// math objects

console.log(Math.abs(-5));// 5

console.log(Math.random());

console.log(Math.pow(3,2));//9

console.log(Math.floor(-9.9999));

console.log(Math.ceil(-9.9999));


// generating random integer from 1 to 20


let random=Math.floor(Math.random()*20+1);
console.log(random);

// generating random number from 1 to 5

let num=Math.floor(Math.random()*5+1);
console.log(num);