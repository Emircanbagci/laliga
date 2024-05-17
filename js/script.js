function showContent(id) {
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function(div) {
        div.classList.add('hidden');
    });

    var selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}



const tablesContainer = document.querySelector('.tables-container');


tablesContainer.addEventListener('wheel', (event) => {
 
    if (event.deltaY > 0) {
        tablesContainer.scrollLeft += 100;
    } 
  
    else {
        tablesContainer.scrollLeft -= 100;
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const content = document.getElementById('content');
  
    setTimeout(function() {
      loadingOverlay.style.display = 'none';
      content.style.display = 'block';
    }, 4500); 
  });
  


      
      window.onload = function() {
        var cells = document.querySelectorAll('td');
        cells.forEach(function(cell) {
            cell.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'lightblue';
            });
            cell.addEventListener('mouseout', function() {
                this.style.backgroundColor = '';
            });
        });
    };
    let ball = document.getElementById('ball');
    let scoreDisplay = document.getElementById('score');
    let button = document.getElementById('kickButton');
    let goalSound = new Audio('goal.mp3');
    
    let ballX = 240;
    let ballY = 140;
    let ballSpeedX = 0;
    let ballSpeedY = 0;
    let score1 = 0;
    let score2 = 0;
    let maxScore = 5;
    let gameRunning = false;
    
    function moveBall() {
      if (!gameRunning) return;
      
      ballX += ballSpeedX;
      ballY += ballSpeedY;
      
      if (ballX > 490 || ballX < 0) {
        ballSpeedX = -ballSpeedX;
      }
      
      if (ballY > 280 || ballY < 0) {
        ballSpeedY = -ballSpeedY;
      }
      
      if (ballX < 0) {
        score(2);
      }
      
      if (ballX > 490) {
        score(1);
      }
      
      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
    }
    
    function score(team) {
      if (team === 1) {
        score1++;
      } else {
        score2++;
      }
      
      scoreDisplay.textContent = `The result: ${score1} - ${score2}`;
      
      if (score1 >= maxScore || score2 >= maxScore) {
        endGame();
      } else {
        resetBall();
      }
    }
    
    function resetBall() {
      ballX = 240;
      ballY = 140;
      ballSpeedX = 0;
      ballSpeedY = 0;
      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
    }
    
    function kick() {
      if (!gameRunning) {
        startGame();
      }
      
      ballSpeedX = Math.random() < 0.5 ? -3 : 3;
      ballSpeedY = Math.random() < 0.5 ? -3 : 3;
    }
    
    function startGame() {
      score1 = 0;
      score2 = 0;
      gameRunning = true;
      button.textContent = 'Throw';
      scoreDisplay.textContent = `The result: ${score1} - ${score2}`;
    }
    
    function endGame() {
      gameRunning = false;
      button.textContent = 'never';
      if (score1 > score2) {
        alert('Team 1 won!');
      } else if (score1 < score2) {
        alert('Team 2 won!');
      } else {
        alert('Tie!');
      }
    }
    
    function increaseSpeed() {
      if (gameRunning) {
        ballSpeedX *= 1.2;
        ballSpeedY *= 1.2;
      }
    }
    
    setInterval(moveBall, 20);
    