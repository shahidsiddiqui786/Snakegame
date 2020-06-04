let lastRenderTime = 0;
const snake_speed = 1000;

function main(currentTime) {
	const secondSinceLastRender = (currentTime-lastRenderTime)/1000;
	window.requestAnimationFrame(main);
	if(secondSinceLastRender < 1 / snake_speed) 
		return ;
	lastRenderTime = currentTime;
	console.log('hi');
}

  window.requestAnimationFrame(main);