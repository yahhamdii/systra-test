const  LargestAreaMatrix=(matrix) =>{
    var arrSize = matrix.length;
    var itemSize = matrix[0].length;
    var counter = {};
  
    for (var i = 0; i < arrSize; i++ ){
        for (var j = 0; j < itemSize; j++) {   
                    if (matrix[i][j] === matrix[i][j+1]) {
                        counter[matrix[i][j]] = 1 + (counter[matrix[i][j]] || 0);
                    } 
                    if (typeof(matrix[i+1]) != "undefined" ) {
                        if (matrix[i][j] === matrix[i+1][j]) {
                            counter[matrix[i][j]] = 1 + (counter[matrix[i][j]] || 0);
                        }
                    }  
        }
    }
    const max = Math.max(...Object.values(counter));
    const index = Object.values(counter).indexOf(max);
    return `Result : the biggest area contains ${max} cells with ${Object.keys(counter)[index]} colors`

    
  
  }
  export default LargestAreaMatrix;