let boxes = document.querySelectorAll('.box');
let ResetBtn = document.querySelector('.reset-btn');
let NewGameBtn = document.querySelector('.New-match');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#Msg');

let turn0 = true;

const Winpattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add('Hide');
  
}

boxes.forEach((box)=>
{
  box.addEventListener('click', ()=>{
    console.log('box Was clicked');
    box.innerText = "Abced";

    if (turn0 == true){
      box.innerHTML = 'O';
      turn0 = false;
    }

    else{
      box.innerHTML = 'X';
      turn0 = true;
    }
    box.disabled = true;

    CheckWinner();
  });
});

const disableBoxes = () =>{
  for(let box of boxes ){
    box.disabled = true;
  };
};

const enableBoxes = () =>{
  for(let box of boxes ){
    box.disabled = false;
    box.innerHTML= '';
  };
};

const ShowWinner = (Winner) => {
  Msg.innerHTML = `Congratulation, winner is ${Winner}`;
  msgContainer.classList.remove('Hide');
  disableBoxes();

};

const CheckWinner = () => {
  for (let pattern of Winpattern){
   let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
      if(pos1Val === pos2Val &&  pos2Val === pos3Val){
        console.log('Winner', pos1Val);
        ShowWinner(pos1Val);
      };
    };

  };  
};

NewGameBtn.addEventListener('click',resetGame);
ResetBtn.addEventListener('click',resetGame);