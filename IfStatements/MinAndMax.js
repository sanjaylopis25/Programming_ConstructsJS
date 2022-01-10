//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let RandomNum1 = Math.floor(Math.random()*900+100)
let RandomNum2 = Math.floor(Math.random()*900+100)
let RandomNum3 = Math.floor(Math.random()*900+100)
let RandomNum4 = Math.floor(Math.random()*900+100)
let RandomNum5 = Math.floor(Math.random()*900+100)

if (RandomNum1>RandomNum2 && RandomNum1>RandomNum3 && RandomNum1>RandomNum4 && RandomNum1>RandomNum5)
{
    console.log("Max is :" +RandomNum1);
}
else if (RandomNum2>RandomNum1 && RandomNum2>RandomNum3 && RandomNum2>RandomNum4 && RandomNum2>RandomNum5)
{
    console.log("Max is :" +RandomNum2);
}
else if (RandomNum3>RandomNum1 && RandomNum3>RandomNum2 && RandomNum3>RandomNum4 && RandomNum3>RandomNum5)
{
    console.log("Max is :" +RandomNum3);
}
else if (RandomNum4>RandomNum1 && RandomNum4>RandomNum2 && RandomNum4>RandomNum3 && RandomNum4>RandomNum5)
{
    console.log("Max is :" +RandomNum4);
}
else
{
    console.log("Max is :" +RandomNum5);
}
if (RandomNum1<RandomNum2 && RandomNum1<RandomNum3 && RandomNum1<RandomNum4 && RandomNum1<RandomNum5)
{
    console.log("Min is :" +RandomNum1);
}
else if (RandomNum2<RandomNum1 && RandomNum2<RandomNum3 && RandomNum2<RandomNum4 && RandomNum2<RandomNum5)
{
    console.log("Min is :" +RandomNum2);
}
else if (RandomNum3<RandomNum1 && RandomNum3<RandomNum2 && RandomNum3<RandomNum4 && RandomNum3<RandomNum5)
{
    console.log("Min is :" +RandomNum3);
}
else if (RandomNum4<RandomNum1 && RandomNum4<RandomNum2 && RandomNum4<RandomNum3 && RandomNum4<RandomNum5)
{
    console.log("Min is :" +RandomNum4);
}
else
{
    console.log("Min is :" +RandomNum5);
}