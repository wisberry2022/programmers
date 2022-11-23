const solution = (a, b) => {
  //22-11-23
  return a.reduce((acc, _, idx, arr) => acc + (arr[idx] * b[idx]), 0)
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]))
console.log(solution([-1, 0, 1], [1, 0, -1]))