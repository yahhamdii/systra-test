import { useState, useRef } from "react";

import generateBoardWithRadomColors from './generateBoardWithRadomColors';
import LargestAreaMatrix from "./LargestAreaMatrix";
import "./styles.css";

const Cell = ({ color }) => {
  return <div className="cell" style={{ background: color }} />;
};

const defaultValue = {
  width: 10,
  height: 10,
  recurringColor: 4
};
const App = () => {
  const [board, setBoard] = useState(() => {
    return generateBoardWithRadomColors(
      defaultValue.width,
      defaultValue.height,
      defaultValue.recurringColor
    );
  });
  const widthInput = useRef();
  const heightInput = useRef();
  const colorInput = useRef();

  const generateBoard = () => {
    const width = widthInput?.current?.value;
    const height = heightInput?.current?.value;
    const colorNumber = colorInput?.current?.value;
    if (height && width && colorNumber) {
      setBoard(generateBoardWithRadomColors(width, height, colorNumber));
    }
  };
 
var element =  widthInput?.current?.value?widthInput?.current?.value:defaultValue.width
  var mat = board?board.reduce((rows, key, index) => (index % element === 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []):[];
 

  return (
    <div>
      <header>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            min="1"
            max="100"
            defaultValue={defaultValue.width}
            ref={widthInput}
          />
        </div>
        <div>
          <label htmlFor="heigth">Height:</label>
          <input
            type="number"
            id="heigth"
            name="height"
            min="1"
            max="100"
            defaultValue={defaultValue.height}
            ref={heightInput}
          />
        </div>
        <div>
          <label htmlFor="colornbr">color number:</label>
          <input
            type="number"
            id="colornbr"
            name="color"
            min="1"
            defaultValue={defaultValue.recurringColor}
            ref={colorInput}
          />
        </div>
        <button onClick={generateBoard}> generate</button>
      </header>
      <div
        className="board"
        style={{
          "--row": heightInput?.current?.value || defaultValue.height,
          "--col": widthInput?.current?.value || defaultValue.width
        }}
      >
        {board.map((color, index) => (
          <Cell color={color} key={index} />
        ))}
      </div>
      
      <h1> {LargestAreaMatrix(mat)} </h1>
    </div>
  );
}

export default App