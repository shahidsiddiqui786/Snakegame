import { update as updateSnake, draw as drawSnake ,snake_speed, 
getSnakeHead,snakeIntersection,getSnakeBodyLength,onSnake } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { playAudioWall } from './audio.js'
let lastRenderTime = 0 , t=0;
let gameOver =false;
const gameBoard = document.getElementById('gameBoard');
const score = document.getElementById('score');
 
function main(currentTime) {
  while(t!=100 && gameOver){
        playAudioWall();
        t++;
    }
    if(gameOver){
    	if( confirm('You lost.Press ok to restart.')) {
    		window.location = '/'
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
    let length = getSnakeBodyLength();
    score.innerHTML = (length-1)*5;
  }
  function checkDeath(){
     gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() 
  }