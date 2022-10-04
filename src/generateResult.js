const  generateResult = (result) => {
    //console.log("res", result[0]);
    const length = result?.length;
    return result.reduce((acc, item, index) => {
      //console.log("index", item, index);
      let word = "";
      if (index === length - 1 && length > 1) {
        word = ` and ${item?.[0]} colors`;
      }
  
      if (index === 0 && length === 1) {
        word = ` ${item?.[0]} color`;
      }
  
      if (index === 0 && length > 1) {
        word = ` ${item?.[0]}`;
      }
      if (index > 0 && index < length - 1) word = `, ${item?.[0]}`;
  
      return `${acc} ${word}`;
    }, `the biggest area contains ${result?.[0]?.[1]} cells with`);
  }

  export default generateResult;