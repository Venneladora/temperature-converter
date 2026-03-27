const mycheck=document.getElementById("mycheck");
const visabtn=document.getElementById("visabtn");
const paypalbtn=document.getElementById("paypalbtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");
mysubmit.onclick=function() {
    if(mycheck.checked)
    {
        subresult.textContent=`you are subscribed`;
    }
    else
    {
        subresult.textContent=`you are not subscribed`;
    }
    if(visabtn.checked)
    {
        paymentresult.textContent=`you have chosen visa payment method`;
    }
    else if(paypalbtn.checked)
    {
        paymentresult.textContent=`you have chosen paypal payment method`;
    }
    else if(mastercardbtn.checked)
    {
        paymentresult.textContent=`you have chosen mastercard payment method`;
    }
    else
    {
       paymentresult.textContent=`you must select payment method`; 
    }

}