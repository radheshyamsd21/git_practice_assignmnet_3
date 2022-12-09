
//Problem 1 : Check whether a number is Prime or not

let num = 13;

let factor=0;

for (let i=1; i<=num; i++)
{
if(num%i==0)
{
factor++
}
}
if(factor==2){
 console.log("Yes it is prime number")
}
else{
console.log("No  it is not a prime number")
}



