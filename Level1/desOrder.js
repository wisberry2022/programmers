const solution = (n) => {
  //22-11-21
  return parseInt([...String(n)].sort((a, b) => { return b - a }).join(''));
}

console.log(solution(118372))