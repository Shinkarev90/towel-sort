
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length){
    return [];
  }
  const mappedMatrix = matrix.map((el,i)=>{
    if (i % 2 == 1) {
      return el.reverse();
    }
    return el;
  })
  const str = mappedMatrix.join();
  return str.split(',').map(el=>+el);
}
