const minnum=0;
const maxnum=100;
const answer=Math.floor(Math.random()*(maxnum-minnum+1))+minnum;
let attempts=0;
let guess;
let running=true;
while(running)
{
    guess=window.prompt(`guess the number between ${minnum}-${maxnum}`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert(`please enter a valid number`);
    }
    else if(guess<minnum || guess>maxnum)
    {
        window.alert(`please enter a valid number`);
    }
    else{
        attempts++;
        if(guess<answer)
        {
            window.alert(`TOO LOW! TRY AGAIN`);
        }
        else if(guess>answer)
        {
            window.alert(`TOO HIGH! TRY AGAIN`);
        }
        else
        {
        window.alert(`CORRECT ANSWER! THE ANSWER WAS ${answer} and you took ${attempts} attempts`);
running=false;
        }
    }
}
