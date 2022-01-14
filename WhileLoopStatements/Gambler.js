/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. */

let timesWon=0
let stake= 100
let bet=1
let count=0
while(stake!=0 && stake!=200)
{        
    let game=Math.floor(Math.random()*2)
    if (game == 1)
    {
        console.log("Gambler Won")
        stake=stake+1
        timesWon++
    }
    else
    {
        console.log("Gambler Lost")
        stake=stake-1
    }
    count++    
}
console.log("Final stake: " + stake)
console.log("number of times won : "+timesWon+"and number of bets made :"+count)