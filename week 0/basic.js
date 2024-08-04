// Assignment #1
//Write a function sum that finds the sum of two numbers. 
function sum(num1,num2){
    let total = num1 + num2;
    return total;
}
let ans=sum(5,"name");
console.log(ans);


// Assignment #2
//Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age){
    if(age>=18){
        return true;
    } else {
        return false;
    }
}
let vote = canVote(17);
console.log(vote);


/* Assignment
Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
*/
let number = 5;
if(number % 2 === 0){
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


/* Assignment
Write a function called sum that finds the sum from 1 to a number
*/

function sumAll(num){
    let total = 0;
    for(let i = 0; i <= num; i++){
        total += i;
    }
    console.log("sum from 1 to "+ num+" is "+total);
}

sumAll(15);