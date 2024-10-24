/* printing odd umbers from 1 to 15

for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}


//printing even number from 2 to 10
for(let i=2;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}*/

// multiplication table for 
let i=5;

    for(let j=1;j<=10;j++){
        console.log(i*j);
    }

    // next method for multiplication
    for(let i=5;i<=50;i=i+5){
        console.log(i);
    }


    // while loop
    let k=0;
    while(k<=16){
        console.log(k);
        k++;
    }




    // break keyword

    for(let i=1;i<10;i++){
        if(i==7){
            break;
        }
        console.log(i)
    }



                        //LOOPS WITH ARRAY
                        let marks=[32,45,34];
                        marks.push(60);
                        for(let i=0;i<marks.length;i++){
                            console.log(i,marks[i]);
                        }

                    //OR
for(let i=marks.length;i>=0;i--){
    console.log(i,marks[i]);
}


// loop with nested array
let uncle=[["hero","heroine"], ["raja","rani"]];
for(let i=0;i<uncle.length;i++){
    console.log(uncle[i]);

    for(let j=0;j<uncle.length;j++){
        console.log(uncle[i][j]);
    }
}

// use of  nested for of loop
for(list of uncle){
    console.log(list);
        for(item of list){
            console.log(item);
        }
    
}