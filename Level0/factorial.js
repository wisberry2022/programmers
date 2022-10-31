// function solution(n) {
//   // 22-10-31
//   // 1부터 10까지 저장된 배열 생성
//   let set = Array.from({ length: 10 }, (_, k) => k + 1);
//   // set의 각 원소의 팩토리얼값을 저장하는 배열 생성
//   let factorial = set.map(it => Array.from({ length: it }, (_, j) => j + 1).reduce((acc, cur) => acc *= cur))
//   // factorial 원소 돌면서 해당 원소와 n의 차이를 절대값으로 구한 배열 생성 (팩토리얼 결과값 - n의 결과값이 저장된 배열)
//   let calSet = factorial.map(it => Math.abs(it - n));
//   // calSet 배열에 있는 최소값이 존재하는 인덱스를 set에 대입하면 n과 가장 가까운 i값 리턴
//   return set[calSet.indexOf(Math.min(...calSet))];
// }


function solution(n) {
  let cnt = 1;
  let sum = 1;
  while (1) {
    sum *= cnt;
    if (sum > n) {
      break
    }
    cnt++;
  }

  cnt--;

  return cnt;
}

let a1 = solution(7)
let a2 = solution(3628800)

console.log(a2, a1);

// [1, 2,
//   6, 24,
//   120, 720,
//   5040, 40320,
//   362880, 3628800
// ]