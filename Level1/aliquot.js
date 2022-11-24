const solution = (left, right) => {
  //22-11-24
  //0. 13부터 17까지 순회하면서 각 숫자들의 약수를 구한다.
  //1. 13부터 17로 이루어진 숫자 배열을 reduce를 사용한 뒤 약수배열의 인덱스와 맞추어 짝수일 경우 +를, 홀수일 경우 -를 하여 값을 반환한다.
  const checkArr = new Array(right - left + 1).fill(left).map((v, i) => v + i);
  const aliquotNums = [];
  checkArr.forEach((it, idx) => {
    let aliquotSet = Array.from({ length: it }, (_, k) => k + 1).filter(v => it % v === 0)
    aliquotNums.push(aliquotSet.length);
  })
  return checkArr.reduce((acc, cur, idx) => aliquotNums[idx] % 2 ? acc - cur : acc + cur, 0)
}

solution(13, 17)
solution(24, 27)