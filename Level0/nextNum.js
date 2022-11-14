const solution = (common) => {
  //22-11-14
  //0. common의 두 번째 원소에서 첫 번째 원소를 뺀다(checkValue).
  //1. common의 두 번째 원소에서 checkValue를 더한다.
  //2-A. 2번의 값이 실제 common의 세 번째 원소와 같을 경우 등차수열이므로 common의 마지막 원소에서 checkValue를 더한다.
  //2-B. 2번의 값이 실제 common의 세 번째 원소와 다를 경우 등비수열이므로 common의 두 번째 원소에서 첫 번째 원소를 나눈다(checkValue)
  //2-C. checkValue값을 common의 마지막 원소에 곱한다.
  let checkValue = common[1] - common[0];
  if ((common[1] + checkValue) === common[2]) {
    return common.at(-1) + checkValue;
  } else {
    checkValue = common[1] / common[0];
    return common.at(-1) * checkValue;
  }
}

const result1 = solution([1, 2, 3, 4])
const result2 = solution([2, 4, 8])
const result3 = solution([13, 26, 39])
const result4 = solution([4, 8, 12])
const result5 = solution([3, 9, 27])
const result6 = solution([3, 6, 12])

console.log(result1, result2, result3, result4, result5, result6);