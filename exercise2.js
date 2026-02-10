let num=25;
let guess=parseInt(prompt("enter the Number"));

while(guess !== num){
    console.log("wrong try again mate")
    guess=parseInt(prompt("enter the Number"));
}
console.log("Congrats you got the right number")