const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
const btn = document.getElementById("click-btn");
const resetbtn = document.getElementById("reset");
const color = document.querySelector(".color");
const clickcount = document.querySelector(".click_Count");
let count = 0;
// #
btn.addEventListener('click',function(){
    let hexColor = '#';
    for(let i = 0; i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.querySelector(".Project-Main").style.backgroundColor = hexColor;
    count++;
    clickcount.textContent=count;
});
resetbtn.addEventListener('click',function(){
    document.querySelector(".Project-Main").style.backgroundColor = "#FFFFFF";
    color.textContent = "#FFFFFF";
    count=0;
    clickcount.textContent=0;
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
