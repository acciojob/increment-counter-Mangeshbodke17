//your JS code here. If required.
let btn=document.querySelector("button");

let a=0;

btn.addEventListener("click",()=>{


    alert(a);
let p=document.querySelector("p");


let b=p.innerText=a+1;

a=b;

p.innerText=a;


console.log(p.innerText);


})