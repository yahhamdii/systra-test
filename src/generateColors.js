const  generateColors = ()=> {
  //const x = Math.floor(Math.random() * 256);
  //const y = Math.floor(Math.random() * 256);
  //const z = Math.floor(Math.random() * 256);
  //const bgColor ="rgb(" + x + "," + y + "," + z + ")";
let maxVal = 0xffffff; // 16777215
let randomNumber = Math.random() * maxVal;
randomNumber = Math.floor(randomNumber);
randomNumber = randomNumber.toString(16);
let randColor = randomNumber.padStart(6, 0);
return `#${randColor.toUpperCase()}`;
}

export default generateColors;