/*Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form */

let n = 10 
let i=0
let Harmonic=0
for(i=1;i<=n;i++)
{
    let result = (1 / i)
    console.log("1/" + i + "=" +result)
    Harmonic = Harmonic + result;    
}
console.log("Sum of Harmonic number is : " + Harmonic)