import { update as updateSnake, draw as drawSnake ,snake_speed } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('gameBoard');

function main(currentTime) {
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
  }

  function draw(){
  	gameBoard.innerHTML = ' ';
        drawSnake(gameBoard);
        drawFood(gameBoard);
  }