const solution = (n) => {
  //22-11-21
  const sqNum = Math.sqrt(n);
  // return String(sqNum).split('.').length === 1 ? Math.pow(sqNum + 1, 2) : -1
  return Number.isInteger(sqNum) ? Math.pow(sqNum + 1, 2) : -1
}

console.log(solution(50000000000000))