const getLcd = (a, b) => {
  return a % b ? getLcd(b, a % b) : b;
}

const getGcd = (a, b, lcd) => {
  return lcd * (a / lcd) * (b / lcd);
}

const solution = (n, m) => {
  //22-11-24
  const [big, small] = [Math.max(n, m), Math.min(n, m)]
  const lcd = getLcd(small, big);
  return [lcd, getGcd(big, small, lcd)]
}


console.log(solution(8, 18), solution(2, 5), solution(3, 12))