const solution = (n) => {
  //22-11-25
  let ternary = n.toString(3);
  return parseInt([...ternary].reverse().join(''), 3);
}

solution(45);