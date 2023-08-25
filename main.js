//import trick lists
import { BOARDPOP, DIRECTION, ROTATION, FLIP} from "./tricks.js";


//only on click
document.querySelector('#button').addEventListener('click', run);

//function that runs to choose random trick parameters
function run(){
    let boardpop = BOARDPOP[Math.floor(Math.random() * BOARDPOP.length)];
    console.log(boardpop);
    let direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];
    console.log(direction);
    let rotation = ROTATION[Math.floor(Math.random() * ROTATION.length)];
    console.log(rotation);
    let flip = FLIP[Math.floor(Math.random() * FLIP.length)];
    console.log(flip);
//show the random trick parameters to the user   
    document.querySelector('#boardpop').innerText = boardpop;
    document.querySelector('#direction').innerText = direction;
    document.querySelector('#rotation').innerText = rotation;
    document.querySelector('#flip').innerText = flip;
}





