const solution = (d, budget) => {
  return d.sort((a, b) => a - b).reduce((count, price) => {
    return count + ((budget -= price) >= 0);
  }, 0)
}

console.log(solution([1, 5, 4, 3, 2], 9))
console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 1, 7, 35, 34, 36, 12, 3500, 300, 20500], 500))