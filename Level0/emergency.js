//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  console.log(sorted);
  return emergency.map(e => sorted.findIndex(s => s === e) + 1);
}

let result = solution([3, 76, 24]);

console.log(result);