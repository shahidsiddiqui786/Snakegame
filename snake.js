 import { getInputDirection } from './input.js'

 export const snake_speed = 5;
const snakeBody =[{x: 11, y: 11}];
let newSegment = 0;

 export function update() {
 	addSegments();

 	const inputDirection = getInputDirection();
 	 for(let i = snakeBody.length-2; i >= 0; i--){
 	 	snakeBody[i+1] = {...snakeBody[i]}
 	 }
 	 snakeBody[0].x += inputDirection.x;
 	 snakeBody[0].y += inputDirection.y;
 }

 // export function draw(gameBoard) {
 // 	snakeBody.forEach(segment =>{
 // 		const snakeElement = document.createElement('div');
 // 		snakeElement.style.gridRowStart = segment.x;
 // 		snakeElement.style.gridColumnStart = segment.y;
 // 		snakeElement.classList.add('snake');
 // 		gameBoard.appendChild(snakeElement);
 // 	})
 // }
 export function draw(gameBoard) {
 	snakeBody.forEach( function(segment){
 		const snakeElement = document.createElement('div');
 		snakeElement.style.gridRowStart = segment.y;
 		snakeElement.style.gridColumnStart = segment.x;
 		snakeElement.classList.add('snake');
 		gameBoard.appendChild(snakeElement);
 	})
 }

  export function expandSnake(amount){
  	 newSegment += amount;
  }

  export function onSnake(position){
  	 return snakeBody.some( segment => {
  	 	return equalPosition(segment, position);
  	 })
  }

  function equalPosition(pos1,pos2){
  	 return pos1.x === pos2.x && pos1.y === pos2.y ;
  }

  function addSegments() {
  	for (let i=0 ;i< newSegment;i++){
  		snakeBody.push({ ...snakeBody[snakeBody.length-1] });
  	}
  	newSegment =0;
  }