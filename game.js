import { update as updateSnake, draw as drawSnake ,snake_speed, 
getSnakeHead,snakeIntersection } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime = 0;
let gameOver =false;
const gameBoard = document.getElementById('gameBoard');

function main(currentTime) {
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
  }

  function draw(){
  	gameBoard.innerHTML = ' ';
        drawSnake(gameBoard);
        drawFood(gameBoard);
  }

  function checkDeath(){
     gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() 
  }