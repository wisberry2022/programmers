// const solution = (dots) => {
//   //22-11-17
//   //0. dots를 순회하여 각 원소(it)를 두 쌍으로 만든 뒤 각 쌍의 동일한 배열 인덱스끼리의 차의 절대값(smResult1, smResult2)을 구한다.
//   //1. smResult1과 smResult2를 비교한다.
//   //1-A. 같을 경우 1을 resultArr에 추가한다.
//   //1-B. 같지 않을 경우 순회를 계속한다.
//   //2. dots의 순회가 끝날 경우 resultArr의 length가 0이 아닐 경우 l을 return, 그렇지 않을 경우 0을 return한다.
//   const resultArr = [];
//   const calcPair = [[0, 1, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [1, 3, 0, 2]]
//   calcPair.map(it => {
//     const smResult1 = dots[it[0]].map((itm, idx) => Math.abs(itm - dots[it[1]][idx]));
//     const smResult2 = dots[it[2]].map((itm, idx) => Math.abs(itm - dots[it[3]][idx]));
//     smResult1.join('') === smResult2.join('') ? resultArr.push(1) : false;
//   })
//   console.log(`resultArr`, resultArr);
//   return resultArr.length ? 1 : 0;
// }

const solution = (dots) => {
  //22-11-17
  //0. 두 점을 이어 만든 선분의 기울기를 구해 기울기를 비교한다.
  //1-A. 기울기가 같을 경우
  //1-A-1. 평행이므로 1을 return
  //1-B. 기울기가 다를 경우
  //1-B-1. 평행이 아니므로 0을 return
  const resultArr = [];
  const getInclination = (line1, line2) => { return Math.floor(Math.abs(line1[1] - line2[1]) / Math.abs(line1[0] - line2[0])) }
  const calcPair = [[0, 1, 2, 3], [0, 2, 1, 3], [1, 2, 0, 3], [1, 3, 0, 2]]
  calcPair.map(it => {
    const smResult1 = getInclination(dots[it[0]], dots[it[1]]);
    const smResult2 = getInclination(dots[it[2]], dots[it[3]]);
    smResult1 === smResult2 ? resultArr.push(1) : false;
  })
  return resultArr.length ? 1 : 0;
}

solution([[1, 4], [9, 2], [3, 8], [11, 6]]);
solution([[3, 5], [4, 1], [2, 4], [5, 10]]);
solution([[1, 1], [2, 4], [3, 1], [4, 5]]);

