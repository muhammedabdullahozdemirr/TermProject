document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
    const restartButton = document.getElementById('restart');                  //gerekli değişken atamaları ve html,css kısmı için.
    const scoreElement = document.getElementById('score');
    const gameContainer = document.querySelector('.game-container');
    let score = 0;
    let cards = [];
    let userSequence = [];
    let gameInProgress = false;
  
    const filePaths = [    //soyismimin harflerini array olarak atadım.
        "harfÖ.svg", 
        "harfZ.svg",
        "harfD.svg",
        "harfE.svg",
        "harfM.svg",
        "harfİ.svg",
        "harfR.svg",
    ];
  
    function showCard(card) {
      card.classList.remove('hide');
  }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function createCard(index) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = index + 1;
  
      const img = document.createElement('img');
      img.src = filePaths[index];
      img.alt = 'Card';
  
      card.appendChild(img);
      return card;
    }
  
    function createCards() {
      for (let i = 0; i < filePaths.length; i++) {
        const card = createCard(i);
        cards.push(card);
      }
      shuffleCards();
      
    }
  
    function shuffleCards() {
      shuffleArray(cards);
    }
  
    function updateDisplayOrder() {
      gameContainer.innerHTML = ''; 
      
      cards.forEach(card => {
        gameContainer.appendChild(card);
      });
    }
  
    function hideCards() {
      cards.forEach(card => {
        card.classList.add('hide');
      });
    }
  
    function startGame() {
      if (!gameInProgress) {
        gameInProgress = true;
        score = 0; 
        userSequence = [];
        scoreElement.textContent = score;
        cards = []; // kartları yeni oyun için resetledim
        createCards();
        setTimeout(hideCards, 2000);
        updateDisplayOrder();
      } else {
        alert('Game already in progress!');
      }
    }
  
    function restartGame() {
      gameInProgress = false;
      score = 0;
      userSequence = [];
      scoreElement.textContent = score;
      cards = [];
      
      
      startGame();
    }
  
    function handleCardClick(event) {
      if (gameInProgress) {
        const selectedCard = event.target.closest('.card');
        if (selectedCard) {
          const cardValue = parseInt(selectedCard.dataset.value);
          if (cardValue === userSequence.length + 1) {
            userSequence.push(cardValue);
            score += 14;
            scoreElement.textContent = score+2;
        
            let nscore= Number(score)   
          
            showCard(selectedCard);
            
           
            if (userSequence.length === filePaths.length) {
              alert('You Win Congratulations! Your Score: ' + (nscore+2));
              
            }
          } else {
            alert('Game Over! Try Again... Your Score: ' + (score +2 ));
           
          }
        }
      }
    }
  
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
    gameContainer.addEventListener('click', handleCardClick);
  });


