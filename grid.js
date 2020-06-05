 const grid_Size =21;

 export function randomGridPosition() {
 	return {
 		x: Math.floor(Math.random() * grid_Size) +1;
 		y: Math.floor(Math.random() * grid_Size) +1;
 	}
 }