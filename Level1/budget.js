const solution = (d, budget) => {
  //22-11-29
  const dsort = d.sort((a, b) => a - b);
  // return dsort.reduce((acc, cur) => acc + cur) <= budget ? dsort.length : solution(dsort.slice(0, dsort.length - 1), budget);
  let support = 0;
  for (let i of dsort) {
    budget -= i;
    if (budget < 0) {
      return support;
    }
    support++;
  }
}

console.log(solution([1, 5, 4, 3, 2], 5))
console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 1, 7, 35, 34, 36, 12, 3500, 300, 20500], 500))