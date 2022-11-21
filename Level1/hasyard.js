const solution = (x) => {
  //22-11-21
  //0. x를 string으로 변환한 뒤 split한 배열(strArr)을 생성한다..
  //1. strArr에 map을 통해 Number 자료형으로 변환한다.
  //2. strArr에 reduce를 사용하여 각 자리수의 합(sum)을 구한다.
  //3. sum / x가 0일 경우 true를, 그렇지 않을 경우 false를 return
  let sum = [...String(x)].map(Number).reduce((acc, cur) => acc + cur)
  return x % sum ? false : true;
}

const result = solution(10);
const result1 = solution(12);
const result2 = solution(11);
const result3 = solution(13);

console.log(result, result1, result2, result3);