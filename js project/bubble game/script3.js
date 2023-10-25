var timer = 3;
var score = 0;
var hitrn = 0;

document.querySelector(".pbtm").addEventListener("click",function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getnewHit();
        
    }
});


//function for score increase
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
//function for bubble making
function makeBubble(){
    clutter = "";
for(i = 1; i<=192;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`

}

document.querySelector(".pbtm").innerHTML = clutter;

}
//function for timer
function runTimer(){
    var timerint = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timer").innerHTML = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
    }

    }, 1000);

}
//function for hit
function getnewHit(){
hitrn = Math.floor(Math.random()*10);;
document.querySelector("#hitval").textContent = hitrn;
}

getnewHit();
runTimer();
makeBubble();