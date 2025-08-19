let gameSeq=[];
let userSeq=[];
let color=["yellow","red","purple","green"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let high=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started:");
        started=true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 100);
}
function levelUp(){
    userSeq=[];
    level++;
    high=Math.max(high,level);
    h3.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let randColor=color[idx];
    let btn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(randColor);
    btnFlash(btn);
}
function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over!<b> Your Score is :${level}<b> <br><b>Highest Score, ${high}<b><br> Press any key to restart:`;
        let body=document.querySelector("body");
        body.classList.add("body");
        setTimeout(function(){
            body.classList.remove("body");
        },100);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    console.log(color);
    checkAns(userSeq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
