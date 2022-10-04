const  recurring = (arr) => {
    // Object to count occurrences
    let counter = {};
  
    // If name exists, we add 1 occurrence, otherwise we set counter to 1
    arr.forEach((name) =>
      counter[name] ? counter[name]++ : (counter[name] = 1)
    );
  
    let max = Math.max(...Object.values(counter));
  
    let highest = Object.entries(counter).filter(([name, reps]) => reps === max);
  
    return highest;
  }

  export default recurring;