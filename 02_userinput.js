// How to accept user input?
// With window prompt
// var username = window.prompt("Enter your name.");
// console.log(`Your name is ${username}`);

// With text box
// let username;
// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML= "Hello " + username;
// }

// arithmatic opetator  ( + - / * %(modulus) **(exponintial))

// Program to find odd or even number
let num;
num = window.prompt("Enter any number:  ");
if (num%2==0){
    console.log(`${num} is even number`);
}
else{
    console.log(`${num} is odd number`);
}

