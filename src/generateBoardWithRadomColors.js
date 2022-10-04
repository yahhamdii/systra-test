
import generateRandomNColor from './generateRandomNColor';


const  randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
const  generateBoardWithRadomColors = (width, height, nbrFilledColors)=> {
    const filledColors = generateRandomNColor(nbrFilledColors);
    let board = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const rondomIndex = randomIntFromInterval(0, nbrFilledColors - 1);
        board.push(filledColors[rondomIndex]);
      }
    }
    return board;
  }
  export default generateBoardWithRadomColors