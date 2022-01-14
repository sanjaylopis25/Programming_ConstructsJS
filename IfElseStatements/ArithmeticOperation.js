/*Enter 3 Numbers do following arithmetic operation and find the one that

is maximum and minimum
1. a + b * c        3. c + a / b
2. a % b + c        4. a * b + c      
*/

let a = 2
let b = 3
let c = 4
let res1=a + b * c
console.log("a + b * c = "+res1)
      
let res2= (a % b) + c
console.log(" a % b + c = "+res2)
    
let res3= c + a / b
console.log("a +b /c = "+res3)

let res4= a * b + c 
console.log("a * b + c = "+res4)

    if (res1 > res2 && res1 > res3 && res1 > res4)
    {
        console.log("1 is Maximum : "+res1)
    }
    if (res1 < res2 && res1 < res3 && res1 < res4)
    {
        console.log("1 is Minimum : "+res2)
    }
    else if  (res2 > res1 && res2 > res3 && res2 > res4)
    {
        console.log("2 is Maximum : "+res2)
    }
    if (res2 < res1 && res2 < res3 && res2 < res4)
    {
        console.log("2 is Minimum : "+res2)
    }
    else if  (res3 > res1 && res3 > res2 && res3 > res4)
    {
        console.log("3 is Maximum : "+res3)
    }
    if (res3 < res1 && res3 < res2 && res3 < res4)
    {
        console.log("3 is Minimum : "+res3)
    }
    else if  (res4 > res1 && res4 > res2 && res4 > res3)
    {
        console.log("4 is Maximum : "+res4)
    }
    if (res4 < res1 && res4 < res2 && res4 < res3)
    {
        console.log("4 is Minimum : "+res4)
    }


    