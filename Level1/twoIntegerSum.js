const solution = (a, b) => {
  //22-11-22
  //0. a에서 b까지로 이루어진 배열(intArr) 생성
  //1. intArr의 reducer를 통해 sum을 구한 뒤 return한다
  const big = a >= b ? a : b;
  const small = a >= b ? b : a;
  const intArr = new Array(a > b ? (a - b) + 1 : (b - a) + 1).fill(small).map((v, i) => v + i);
  return intArr.reduce((acc, cur) => acc + cur);
}

console.log(solution(300000, 5), solution(3, 3), solution(5, 3), solution(13, 5));