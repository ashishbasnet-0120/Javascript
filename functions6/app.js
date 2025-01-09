// function

function namePlease(){
    console.log("Ashish Basnet");
}

namePlease();


// can vote or not
function vote(){
    let age=20;
    if(age=>18){
        console.log("you can vote");
    }else{
        console.log(" you can't vote");
    }
}

//calling

vote();


                              // generating a dice that gives number 1 to 6
function dice(){
    let start=prompt("do you want to play dice: ");
    if(start=="yes"){
        const random=Math.floor(Math.random()*6+1);
        let con=prompt("if you want to check the dice number then see the console press 1 or 0: ");
        if(con==1){
            console.log("your random number is ",random);
        }
        else if(con==0){
            alert("you quit the game");

        }
        
    }
    else if(start=="no"){
        alert("you quit the game");
        
    }
}

dice();

                                // functions with arguments
function inform(name,age,location){

    console.log(`${name}'s age is ${age} and location is ${location}`);
}

inform("Ashish Basnet",14,"Pokhara");

inform(14,"Ashish");// order is important just look the note i expalin briefly

                // function that gives average of three numbers
function average(num1,num2,num3){
    avg=(num1+num2+num3)/3;
    console.log(avg);
}
average(5,5,15);


                    // multiplication of table using function

function multi(a){
    for(let i=1;i<=10;i++){
         let ans=a*i;
         console.log(ans);
    }
}
multi(5);

                // return keyword
function heart(a,b){
    console.log("hey");
    return a+b;
    console.log("hey");// this code will not be executed becase after return keywrd the below code will not be executed

}

heart(2,3);//  ptint hey because return just return the value for print we have to use console.log

console.log(heart(2,3));


            //function that returns sum of 1 to n

            function add(a){
                let sum=0;
                for(let i=1;i<=a;i++){
                   
                    sum=sum+i;
                    
                }
                return sum;
                
            }
            console.log(add(5));

            // lexical scope

            function shyam(){
                let x=3;
                let y=5;
                function ram(){
                   console.log(x+y);
                }
            ram();
            }
            shyam();


            // function expressions or nameless function
    
            const sum=function(a,b){
                return a+b;
            }
           console.log( sum(2,3));            


           // higher order expression
        function multidun(func,n){

            for(let i=1; i<=n; i++){
                func();
            }
            
          
            }
            let greet=function(){
                console.log("ramen");
           
        }
        console.log(multidun(greet,5));

        // higher order func return 

        function oddEven(request){
            if(request=="odd"){
                return function(n){
                    console.log(!(n%2==0));
                }
               
            }
            else if(request=="even"){
                return function(n){
                    console.log((n%2==0));

            }
            
            }
            else {
                console.log("wrong ");
                
            }
        }
        let request="even";
       
        //methods

        const oper={
            add:function(a,b){
                return a+b;
            },

            sub(a,b){
                return a-b;
            },
        }

        console.log(oper.add(1,2));
        console.log(oper.sub(1,2))