const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



var score,currentScore,activePlayer,randomScore,gamePlaying;
function newGame(){
score=[0,0];
currentScore=0;
activePlayer=0;
randomScore=0;
document.querySelector('#score--0').textContent=0;
document.querySelector('#score--1').textContent=0;
document.querySelector('#current--0').textContent=0;
document.querySelector('#current--1').textContent=0;
document.querySelector('.dice').style.display='none';
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.remove('player--active');
player1El.classList.remove('player--active');
player0El.classList.add('player--active');
    document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
gamePlaying=true;
}
newGame();
function nextPlayer(){
    activePlayer=((activePlayer+1)%2);  
    currentScore=0;
    document.querySelector('.dice').style.display='none';
    player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){var diceNumber=Math.floor((Math.random()*6) +1);
        document.querySelector('.dice').src='dice-'+diceNumber+'.png';
        document.querySelector('.dice').style.display='block';
        if(diceNumber>1){
            currentScore+=diceNumber;
        document.querySelector('#current--'+activePlayer).textContent=currentScore;
        }
        else{
            document.querySelector('#current--'+activePlayer).textContent=0;
            document.querySelector('#score--'+activePlayer).textContent=0;
            nextPlayer();
        } }}
)

 document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
    score[activePlayer]+=currentScore;
document.querySelector('#score--'+activePlayer).textContent=score[activePlayer];
if(score[activePlayer]>=100){
    document.querySelector('#name--'+activePlayer).textContent='YOU WON!'; gamePlaying=false;}
else{ nextPlayer();}}})
document.querySelector('.btn--new').addEventListener('click',function(){
newGame();})
