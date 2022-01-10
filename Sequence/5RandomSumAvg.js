//Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let RandomNum1 = Math.floor(Math.random()*10+20)
let RandomNum2 = Math.floor(Math.random()*10+20)
let RandomNum3 = Math.floor(Math.random()*10+20)
let RandomNum4 = Math.floor(Math.random()*10+20)
let RandomNum5 = Math.floor(Math.random()*10+20)
let Sum=0;
let Avg=0;
let Arr =[RandomNum1,RandomNum2,RandomNum3,RandomNum4,RandomNum5,]
for(i=0; i<Arr.length; i++)
{
    console.log(Arr[i])
    Sum = Sum+Arr[i];
}
console.log(Sum)
Avg = Sum/Arr.length;
console.log(Avg)