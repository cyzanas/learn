let num=parseInt(prompt("enter a Number: "))
let arr=[]
for(let i=1;i<=num;i++){
    arr.push(i)
}
let sum=arr.reduce((acc,cur)=>acc+cur,0);
let product=arr.reduce((acc,cur)=>acc*cur,1);

console.log(`the sum is ${sum}`)
console.log(`the product is ${product}`)
