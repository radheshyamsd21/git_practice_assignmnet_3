Problem 1 : Check whether a number is Prime or not

let num = 17;

let i=1;

let factor=0;

for (let i=1; i<=num; i++){

if(num%i==0)

factor++
}

if(factor==2){
 console.log("it is prime")
}
else{
console.log("it is not prime")
}
