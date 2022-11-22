const solution = (num) => {
  //22-11-22
  //0. 반복 횟수 0을 담은 변수 cnt를 선언한다.
  //1. num에서 2를 mod 연산하여 0으로 나누어 떨어지는지 그렇지 않은지를 검사한다.
  //1-A. num % 2 === 0일 경우
  //1-A-1. num /=2 를 진행한다.
  //1-B. num % 2 !== 0일 경우
  //1-B-1. (num*3)+1을 진행한다.
  //2. num을 1 증가시킨다.
  //3. num이 1이 될때까지 1번부터 2번 과정을 반복한다.
  let cnt = 0;
  while (num !== 1) {
    if (cnt > 500) {
      return -1;
    }
    !(num % 2) ? num /= 2 : num = (num * 3) + 1;
    cnt++;
  }
  return cnt;
}

console.log(solution(6), solution(16), solution(626331));
