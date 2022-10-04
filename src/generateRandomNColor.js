import generateColors from './generateColors'

const generateRandomNColor = (n) =>{
    const colors = [];
  
    for (let i = 0; i < n; i++) {
      colors.push(generateColors());
    }
    return colors;
  }
  export default generateRandomNColor