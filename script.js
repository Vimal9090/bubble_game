let timer = 60;
let score = 480;
let hitnmbr = 0;
let makebubble = ()=>{
    let bubble = ""; 
    for (let i = 0; i < 261; i++) {
        bubble += `<div id="blu">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#lowerperent").innerHTML = bubble;
}

let increaseScore = ()=>{
    score += 10;
    document.querySelector("#scre").textContent = score;
}

let restart = ()=>{
    makebubble();
    if(timer === 0)(
        timer = 60 ,
        score = 0
        )
}

let runtimer = ()=>{
     setInterval(() => {
        if(timer  > 0){
            timer--
            document.querySelector("#timeline").innerHTML = timer;
        } else {
            clearInterval(timer)
            let timeout = `<div id="gameover"><h1>Game Over</h1><h1>Score:${score}</h1><button onclick="restart()">START</button></div>`;
            document.querySelector("#lowerperent").innerHTML = timeout  
        }
    },1000)
}



let numberhint = ()=>{
    hitnmbr = Math.floor(Math.random()*10)
   document.querySelector("#hint").textContent = hitnmbr
}

document.querySelector("#lowerperent").addEventListener("click",(dets)=>{
   let a = Number(dets.target.textContent)
   if( hitnmbr === a ){
            increaseScore();
            numberhint();
            makebubble();
      }
})
makebubble()
runtimer()
numberhint()

















