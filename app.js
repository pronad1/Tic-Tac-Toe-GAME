let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turn0=true;
let count=0;

const winpatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

const enabledboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText="0";
            turn0=false;
        } else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const showwinner = (winner) =>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!="") {
            if (pos1val==pos2val && pos2val==pos3val) {
                showwinner(pos1val);
            }
        }
    }
}

newgbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);