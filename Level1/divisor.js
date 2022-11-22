const solution = (arr, divisor) => {
  //22-11-22
  const result = arr.filter(it => !(it % divisor));
  return result.length ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5), solution([2, 36, 1, 3], 1), solution([3, 2, 6], 10))