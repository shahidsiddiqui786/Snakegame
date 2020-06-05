 import { onSnake, expandSnake  } from './snake.js'

 let food = { x: 12,y: 3 }
 const Expansion_Rate = 1;

 export function update() {
 	if (onSnake(food)) {
 		expandSnake(Expansion_Rate);
 		food = { x: 20, y: 12 }
 		}
 }


export function draw(gameBoard) {
 	
 		const foodElement = document.createElement('div');
 		foodElement.style.gridRowStart = food.y;
 		foodElement.style.gridColumnStart = food.x;
 		foodElement.classList.add('target');
 		gameBoard.appendChild(foodElement);
 	
 }

 function getRandomFoodPosition() {
        let newFoodPosition;
        while( newFoodPosition == null || onSnake(newFoodPosition)){
        	newFoodPosition = randomGridPosition();
        }
         return newFoodPosition;
 }