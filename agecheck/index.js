const mytext=document.getElementById("mytext");
const mybutton=document.getElementById("mybutton");
const result=document.getElementById("result");
let age;
mybutton.onclick=function() {
    age=mytext.value;
    age=Number(age);
    if(age >= 100)
    {
        result.textContent=`your are too old to enter this site`;
    }
    else if(age === 0)
    {
        result.textContent=`your are just born you cannot enter this site`;
    }
   else if(age < 0)
    {
        result.textContent=`age cant be below zero`;
    }
    else if(age >= 18)
    {
        result.textContent=`your are allowed to enter this site`;
    }
    else
    {
        result.textContent=`below 18+ is not allowed to enter this site`;
    }
}
