import { update as updateSnake, draw as drawSnake ,snake_speed } from './snake.js'

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
  }

  function draw(){
        drawSnake(gameBoard);
  }