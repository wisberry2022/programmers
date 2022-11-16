// lcd 구하는 함수
const getLcd = (a, b) => {
  let lcd;
  let modNum = 1;
  const criteria = a <= b ? a : b;
  while (modNum <= criteria) {
    if (!(a % modNum) && !(b % modNum)) {
      lcd = modNum;
    }
    modNum++;
  }
  return lcd;
}

const solution = (denum1, num1, denum2, num2) => {
  //22-11-16
  //C 0-A. num1과 num2가 같을 때.
  //C 0-A-1. denum1과 denum2를 더한다(finalNum)
  //C 0-A-2. 2번 실행
  //C 0-B. num1과 num2가 다를 때.
  //C 0-B-1. num1과 denum1에 num2를 곱한다(numerator1, denominator).(num2와 denum2에는 num1을 곱한다.(numerator2))
  //C 1. numerator1과 numerator2를 더한다(finalNum).
  //2. finalNum과 denominator의 최대공약수(lcd)를 구한다.
  //2-A. lcd가 있을 경우
  //2-A-1. finalNum과 denominator에 lcd를 나눈 값을 배열에 담아 return한다.
  //C 2-B. lcd가 없을 경우(lcd의 값이 1만 있을 경우)
  //C 2-B-1. finalNum과 denominator를 차례대로 배열에 담아 return한다.
  let finalNum;
  let denominator;
  if (num1 === num2) {
    finalNum = denum1 + denum2;
    denominator = num1;
  } else {
    finalNum = (denum1 * num2) + (denum2 * num1);
    denominator = num1 * num2;
  }
  const lcd = getLcd(finalNum, denominator);
  console.log('분자:', finalNum, '분모:', denominator, '최대공약수:', lcd)
  if (lcd !== 1) {
    return [finalNum / lcd, denominator / lcd];
  } else {
    return [finalNum, denominator];
  }
}

// getLcd(12, 16);
// getLcd(3, 4);
// getLcd(4, 8);

let result = solution(1, 2, 3, 4);
let result2 = solution(9, 2, 1, 3);
let result3 = solution(9, 2, 1, 2);

console.log(result, result2, result3);