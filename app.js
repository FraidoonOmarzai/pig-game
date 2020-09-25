let scores, activePlayer, roundScore, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
   if (gamePlaying) {
      // random number
      let dice = Math.floor(Math.random() * 6) + 1;

      // display the result
      document.querySelector(".dice").style.display = 'block';
      // document.querySelector(".dice").setAttribute("src", 'images/dice-'+dice+'.png'); or
      document.querySelector(".dice").src = 'images/dice-' + dice + '.png';

      // update the current score
      if (dice !== 1) {
         roundScore += dice;
         document.querySelector("#current-" + activePlayer).textContent = roundScore;
      } else {
         // next player turn
         nextPlayer();
      }
   }
});

document.querySelector('.btn-hold').addEventListener("click", function() {
   if (gamePlaying) {
      // add current score to global score
      scores[activePlayer] += roundScore;

      // update UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      // check if player won
      if (scores[activePlayer] >= 50) {
         document.querySelector('#name-' + activePlayer).textContent = "Winner!";
         document.querySelector(".dice").style.display = 'none';
         document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
         document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
         gamePlaying = false;

      } else {
         // next player turn
         nextPlayer();
      }
   }
});

document.querySelector('.btn-new').addEventListener("click", init);


function nextPlayer() {
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;

   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");

   document.querySelector(".dice").style.display = 'none';
}


function init() {
   scores = [0, 0];
   activePlayer = 0;
   roundScore = 0;
   gamePlaying = true;

   document.querySelector(".dice").style.display = 'none';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.getElementById('name-0').textContent = "Player1";
   document.getElementById('name-1').textContent = "Player2";

   document.querySelector(".player-0-panel").classList.remove("winner");
   document.querySelector(".player-1-panel").classList.remove("winner");
   document.querySelector(".player-0-panel").classList.remove("active");
   document.querySelector(".player-1-panel").classList.remove("active");
   document.querySelector(".player-0-panel").classList.add("active");
}
