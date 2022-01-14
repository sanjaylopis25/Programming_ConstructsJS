/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..*/

let n =256
let i=1

while(i<n)
{
    let result=(2**i++)
    if(result<=n)
    console.log("2^"+i+"="+result)
}