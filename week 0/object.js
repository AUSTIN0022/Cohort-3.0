/*  Assignment #1
Write a function that takes a user as an input and greets them with their name and age
*/
function greet(user){
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

let user = {
    name: "Austin",
    age: 25
}

greet(user);

/* Assignment #2 & #3
Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
*/
function greet2(user){
    let gender = "";

    if(user.gender == "Male") {
        gender = "Mr.";
    } else if (user.gender == "Female") {
        gender = "Mr.";
    } else {
        gender = "Others";
    }

    let canVote = user.age > 18 ? "can vote" : "can not vote";

    console.log(`Hi ${gender} ${user.name}, You age is ${user.age}. and you ${canVote}`);
}

let user2 = {
    name: "Austin",
    age: 25,
    gender: "Male",
};

greet2(user2);