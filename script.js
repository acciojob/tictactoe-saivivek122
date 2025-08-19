//your JS code here. If required.
let boxes=document.querySelectorAll(".box");
let players=document.querySelector(".players");
let playerOne=document.getElementById("player1");
let playerTwo=document.getElementById("player2");
let container=document.querySelector(".containers");
let submitBtn=document.getElementById("submit");
let restartBtn=document.querySelector(".restart");
let currentPlayerName=document.querySelector(".message");


let winText=document.createElement("p");

submitBtn.addEventListener("click",()=>{
  let valueOne=playerOne.value;
  let valueTwo=playerTwo.value;
  
  if(valueOne.trim()!="" && valueTwo.trim()!=""){
    players.style.display="none";
    container.style.visibility="visible";
    restartBtn.style.display="block";
    currentPlayerName.textContent=playerOne.value+","+" you're up";
  }
  else{
    alert("both values required");
  }
  
})


let currentplayer="0";
let didWin=false;
  console.log("hii");
let winning=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[3,5,8],
      [0,4,8],[2,4,6]
  ]


boxes.forEach((item)=>{
  item.addEventListener("click",()=>{
     if(currentplayer=="X"){
      currentPlayerName.textContent=playerOne.value+","+" you're up";
    }
    else{
     currentPlayerName.textContent=playerTwo.value+","+" you're up";
    }
    
    if(currentplayer=="0"){
      item.textContent="X";
      currentplayer="X";
     
    }
    else{
      item.textContent="0";
      currentplayer="0";
    }
      winner();
  })
})


function winner(){
  for(let combo of winning){
    let [a,b,c]=combo;
    if(boxes[a].textContent && boxes[a].textContent==boxes[b].textContent &&
    boxes[a].textContent==boxes[c].textContent){
    didWin=true;
    currentPlayerName.textContent="";
	
    // alert(currentplayer+"wins")
    if(currentplayer=="X"){
      winText.textContent=playerOne.value+" congratulations you won!";
    }
    else{
      winText.textContent=playerTwo.value+" congratulations you won!";
    }
    document.body.appendChild(winText);
    clearBox();
    return;
  }
}
let allFill=[...boxes].every(box=>box.textContent!="")
if(allFill && !didWin){
  clearBox();
}
}


function clearBox() {
  boxes.forEach((item)=>{
    item.textContent="";
  })
}

restartBtn.addEventListener("click",()=>{
  winText.textContent="";
  clearBox();
  players.style.display="block";
  container.style.visibility="hidden";
  playerOne.value="";
  playerTwo.value="";
  currentPlayerName.textContent="";
  
})



// function showMessage(msg) {
//   let msgElem = document.querySelector("#game-message");
//   if (!msgElem) {
//     msgElem = document.createElement("p");
//     msgElem.id = "game-message";
//     document.body.appendChild(msgElem);
//   }
//   msgElem.textContent = msg;
// }

// function clearBox(){
//   boxes.forEach((item)=>{
//     item.textContent="";
 
//   })
// }
// console.log(isdraw);
// console.log("hii")