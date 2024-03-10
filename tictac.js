let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelectorAll(".msg-container");
let count=0;

let turno=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
       else{
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;
      count++;
      let iswinner=checkwinner();

      if(count===9&&!iswinner){
        gamedraw();
      }
    });
});   
const gamedraw=()=>{
    msg.innerText="Game was Draw";
    msgcontainer.forEach(container => container.classList.remove("hide"));
    disableboxes();
}
const resetgame=()=>{
    turno=true;
    count=0;
    enableboxes();
    msgcontainer.forEach(container => container.classList.add("hide"));
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.forEach(container => container.classList.remove("hide")); // Loop through each msgcontainer to remove the class
    disableboxes();
};


const checkwinner=()=>{
    for(let patterns of winpatterns)
    {
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        if(pos1val !=""&& pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val);
                return true;
            }
            
        }
    }

};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
