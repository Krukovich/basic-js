module.exports = function countCats(matrix) {
  // RIGHT
   
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(item => {
      if (item === "^^") {
        count++
      }
    });
  });
  return count;
};
