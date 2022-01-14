/*Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n. */

let n = 10
let i=0
for(i=1;i<n;i++)
{
    let result=Math.pow(2, i);
    console.log(result)
}
