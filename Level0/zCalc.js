const solution = (s) => {
  //22-11-09
  //0. 문자열 s를 배열(s')로 만든다.
  const strArr = s.split(' ');
  //1. s'의 원소 중 숫자만을 꺼내어 모두 합산(sum)한다.
  const numSet = strArr.filter(it => it !== 'Z').map(Number);
  let sum = numSet.reduce((acc, cur) => acc + cur);
  // console.log(numSet, sum);
  //2. s'의 원소 중 Z의 인덱스를 모두 검사한다.
  let idx = 0;
  const idxSet = [];
  while (idx <= strArr.length - 1) {
    if (strArr[idx] === 'Z') {
      idxSet.push(idx);
    }
    idx++;
  }
  if (idxSet.length === 0) {
    return sum;
  } else {
    //3. sum 변수에서 s'의 원소 중 Z의 인덱스 이전에 있는 숫자들을 모두 뺀다.
    console.log(idxSet);
    for (i of idxSet) {
      if (i === 0) {
        sum -= 0;
      } else {
        if (strArr[i - 1] === 'Z') {
          sum -= Number(strArr[i - 3]);
        } else {
          sum -= Number(strArr[i - 1]);
        }
      }
    }
    return sum;
  }
}

let result1 = solution('1 Z 2 Z 3');
let result2 = solution('10 Z -20 Z 1');
let result3 = solution('10 -20 30');
let result4 = solution('Z 2 Z 3 5');
let result5 = solution('1 2 3 Z Z');

console.log(result1, result2, result3, result4, result5);