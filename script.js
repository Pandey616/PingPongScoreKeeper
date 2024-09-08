const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const resetBtn = document.querySelector('.reset');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const select = document.querySelector('#maxScore');
const resultbox = document.querySelector('#resultbox');
const close = document.querySelector('.close');
const result = document.querySelector('#result');
result.innerText = '"Let the Game Begin!"';

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;


btn1.addEventListener('click', function(e){
    e.preventDefault();
    if(!isGameOver){
        p1Score++;
        player1.innerText = p1Score;
        if(p1Score === maxScore){
            isGameOver = true;
            resultbox.style.display = 'block';
            result.innerText = "Player 1 Wins!";
        }
    }
})

btn2.addEventListener('click', function(e){
    e.preventDefault();
    if(!isGameOver){
        p2Score++;
        player2.innerText = p2Score;
        if(p2Score === maxScore){
            isGameOver = true;
            resultbox.style.display = 'block';
            result.innerText = "Player 2 Wins!";
        }
    }
})

select.addEventListener('change', function(){
    maxScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    player1.innerText = p1Score;
    p2Score = 0;
    player2.innerText = p2Score;
}

close.addEventListener('click', function(){
    resultbox.style.display = 'none';
})