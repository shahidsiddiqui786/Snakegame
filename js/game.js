import { update as updateSnake, draw as drawSnake ,snake_speed, 
getSnakeHead,snakeIntersection,getSnakeBodyLength,onSnake } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { playAudioWall } from './audio.js'
let lastRenderTime = 0 , t=0, mss = 0;
let gameOver =false;
const gameBoard = document.getElementById('gameBoard');
const score = document.getElementById('score');
const maxscore = document.getElementById('maxscore');
 
function main(currentTime) {
  while(t!=100 && gameOver){
        playAudioWall();
        t++;
    }
    if(gameOver){
    	if( confirm('You lost.Press ok to restart.')) {
    		location.reload();
    	}
    	return;
    }
	const secondSinceLastRender = (currentTime-lastRenderTime)/1000;
	window.requestAnimationFrame(main);
	if(secondSinceLastRender < 1 / snake_speed) 
		return ;
	lastRenderTime = currentTime;
	

	update();
	draw();
}

  window.requestAnimationFrame(main);

  function update(){
         updateSnake();
         updateFood();
         checkDeath();
         updateScore();
         if(checkDeath()){
          playAudioWall();
         }
  }

  function draw(){
  	gameBoard.innerHTML = ' ';
        drawSnake(gameBoard);
        drawFood(gameBoard);
    
  }
  
  function updateScore(){
    //calculating current score
    let length = getSnakeBodyLength();
    score.innerHTML = (length-1)*5;
    // comparing with max score
    let ms = Number(maxscore.innerHTML);
    if(ms < (length-1)*5){
      ms = (length-1)*5;
    }
    //storing in localstorage
    if(typeof(Storage) !== "undefined") {
      //if already stored then use
      if (localStorage.clickcount && localStorage.clickcount > ms) {
        maxscore.innerHTML = Number(localStorage.clickcount);
      }
      //else store current max score 
      else {
        localStorage.clickcount = ms;
        maxscore.innerHTML = ms;
      }
    }
    else{
      maxscore.innerHTML = ms;
    } 
  }


  function checkDeath(){
    return gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() 
  }
