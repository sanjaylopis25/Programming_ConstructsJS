//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
let day = 25;
let month = "April";
if (month=="March" || month=="April" || month=="May" || month=="June")
{

    if(month== "March" && day <20)
    {
        console.log(false)
    }
    else if(month== "June" && day < 20)
    {
        console.log(false)
    }
    else
    {
        console.log(true)
    }
}
else
{
    console.log(false)
}