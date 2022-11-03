// const solution = (n) => {
//   // 22-11-03
//   // n을 나눈 수를 담아두는 배열 생성
//   const divideSet = [];
//   // 매개변수 n을 별도의 변수로 담음
//   let target = n;
//   // n을 나누는 수(계속 증가해야 함)
//   let dNum = 2;

//   while (true) {
//     if () {
//       console.log('while문 종료!')
//       break
//     }
//     if (target % dNum === 0) {
//       target /= dNum;
//       console.log(`${dNum}은 ${n}의 소인수입니다!`)
//       divideSet.push(dNum);
//     }
//     dNum++
//     console.log(`변경된 n의 값 ${target} 그냥 증가된 dNum ${dNum}`)
//   }

//   console.log(divideSet);
// }
const solution = (n) => {
  // 22-11-03
  // n을 나눈 수를 담아두는 배열 생성
  const divideSet = [];
  // 매개변수 n을 별도의 변수로 담음
  let target = n;

  // n을 나누는 수(계속 증가해야 함)
  let dNum = 2;

  while (target !== 1) {
    if (!(target % dNum)) {
      divideSet.push(dNum);
      target /= dNum;
    } else {
      dNum++;
    }
  }
  return Array.from(new Set(divideSet));

}

// solution(12)
// solution(17)
// solution(420)
// solution(11)
// solution(30)
// solution(56)
const result1 = solution(9999)
const result2 = solution(17)
const result3 = solution(12)
const result4 = solution(11)
const result5 = solution(30)
const result6 = solution(56)

console.log(result1, result2, result3, result4, result5, result6)