let count = 0;
const d = document.querySelectorAll(".decrease")[0];
const r = document.querySelectorAll(".reset")[0];
const i = document.querySelectorAll(".increase")[0];
const v = document.getElementById("value");

d.addEventListener('click',function(){
    count--;
    v.textContent=count;
});
r.addEventListener('click',function(){
    count=0;
    v.textContent=count;
});
i.addEventListener('click',function(){
    count++;
    v.textContent=count;
});