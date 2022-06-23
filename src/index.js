
// You should implement your task here.

module.exports = function towelSort (matrix) {
  for (let i = 0; i < matrix.length; i++) {

    if (i % 2 !== 0) {matrix[i].sort((a, b) => b - a)}

    console.log(matrix);
  }
  
  return matrix.reduce((a, b) => a.concat(b));
}
