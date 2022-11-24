const solution = (price, money, count) => {
  //22-11-24
  let counts = new Array(count).fill(1).map((v, i) => v + i);
  return counts.map(it => price * it).reduce((acc, cur) => acc + cur) - money;
}

console.log(solution(1, 10, 1), solution(100, 20, 3));
