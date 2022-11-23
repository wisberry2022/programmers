const solution = (numbers) => {
  //22-11-23
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(it => !(numbers.includes(it))).reduce((acc, cur) => acc + cur)
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))
console.log(solution([5, 8, 4, 0, 6, 7, 9]))