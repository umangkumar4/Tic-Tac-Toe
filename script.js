//playerSelection
let turn='X';
// const playerX=document.querySelector(".playerx");
// console.log(playerX);
// playerX.addEventListener("click",(turn)=>
// {
//     turn='X';
// })
// const player0=document.querySelector(".playery");
// console.log(player0);
// player0.addEventListener("click",()=>
// {
//     turn='0';
// })









const boxes=document.getElementsByClassName("box");
//let turn='X';
let gameOver=new Audio("gameover.mp3");
let clickSound=new Audio("click.mp3");

function Turn(){
    
    return turn==='X'?'0':'X';
}
function winGame()
{   const box=document.getElementsByClassName("box");
    const wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach((e)=>
    {
        if(box[e[0]].textContent==box[e[1]].textContent && box[e[1]].textContent==box[e[2]].textContent && box[e[0]].textContent!=='')
        {   const turnX=document.querySelector(".turnX");
            turnX.textContent= box[e[0]].textContent+"  Won";
            gameOver.play();
            document.getElementsByClassName("img")[0].style.width="400px";
            box[e[0]].style.backgroundColor="pink";
            box[e[1]].style.backgroundColor="pink";
            box[e[2]].style.backgroundColor="pink";
            const wincontainer=document.getElementsByClassName("containerWin")[0].style.width="30vw";
        }
        
    })
}

// for gamelogic
for(let element of boxes)
{
    element.addEventListener("click",(e)=>
    {
        
        if(e.target.textContent==='')
        {   
            e.target.textContent=turn;
            turn=Turn();
            clickSound.play();
            const turnX=document.getElementsByClassName("turnX");
            
            turnX[0].textContent="Turn for "+turn;
            winGame();
        }
    }
)}