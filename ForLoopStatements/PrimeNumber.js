//Write a program that takes a input and determines if the number is a prime.

let num = 5
let i=0
let count=0
for (i=1; i<=num; i++)
{
    if (num % i == 0)                                     
    count = count + 1;
}
if (count == 2)                                            
{
    console.log(num + " is Prime number");
}
else
{
    console.log(num + " is not Prime number");
}