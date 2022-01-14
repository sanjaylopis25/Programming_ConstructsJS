//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
console.log("Enter Multiples of 10")
let n = 10000
if(n==10)
{
    console.log("Ten")
}
else if(n==100)
{
    console.log("Hundred")
}
else if(n==1000)
{
    console.log("Thousand")
}
else if(n==10000)
{
    console.log("Ten Thousand")
}
else if(n==100000)
{
    console.log("One Lakh")
}
else if(n==1000000)
{
    console.log("Ten Lakh")
}
else if(n==10000000)
{
    console.log("One Crore")
}
else
{
    console.log("Invalid Input")
}