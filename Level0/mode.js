const solution = (array) => {
  //22-11-14
  //0. array를 reduce를 통하여 순회하여 해당 원소를 key로 하며, 등장 횟수를 value로 하는 객체(modeObj) 생성
  //1. Object.values(modeObj)로 value만 모은 배열 생성(values), Object.keys(modeObj)로 key만 모은 배열(keys) 생성
  //1-1. values에서 최대값을 구한 뒤 indexOf와 lastIndexOf를 구한다.
  //1-2. lastIndexOf가 -1이 아닐 경우 return -1
  //2. values에서 값이 가장 큰 원소의 인덱스를 구해 keys에 대입한 뒤 return
  let modeObj = {}
  array.map(it => isNaN(modeObj[it]) ? modeObj[it] = 1 : modeObj[it] += 1);
  let [values, keys] = [Object.values(modeObj), Object.keys(modeObj)];
  let modeNum = Math.max(...values);
  let maxIdx = values.indexOf(modeNum);
  if ((values.indexOf(modeNum) !== values.lastIndexOf(modeNum))) {
    return -1;
  }
  return Number(keys[maxIdx]);
}

let result1 = solution([1, 2, 3, 3, 3, 4])
let result2 = solution([1, 1, 2, 2])
let result3 = solution([1])
let result4 = solution([1, 1, 1, 4, 2, 12, 12, 12])

console.log(result1, result2, result3, result4)