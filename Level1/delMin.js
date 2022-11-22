const solution = (arr) => {
  //22-11-22
  const result = arr.filter(it => it !== Math.min(...arr));
  return result.length ? result : [-1];
}

// const solution = (arr) => {
//   //22-11-22
//   const result = arr.sort((a, b) => b - a).slice(0, arr.length - 1)
//   return result.length ? arr.sort((a, b) => b - a).slice(0, arr.length - 1) : [-1];
// }

console.log(solution([4, 15, 23, 12]), solution([10]))