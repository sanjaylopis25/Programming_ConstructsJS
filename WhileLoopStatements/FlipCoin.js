//Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let counthead=0
let counttail=0
while(counthead<=11 || counttail<=11)
{
let Flip = Math.floor(Math.random()*2+1)
if(Flip==1)
{
    counthead++
}
else
{
    counttail++
}
}
if (counthead==11)
console.log("Head win")
if (counttail==11)
console.log("Tail win")