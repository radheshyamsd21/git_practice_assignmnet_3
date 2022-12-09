Problem 1 : Check whether a number is Prime or not

let num = 19;

let i=1;

let factor=0;

for (let i=1; i<=num; i--){

if(2%i==0)

factor++
}

if(factor==1){
 console.log("Yes")
}
else{
console.log("No")
}
