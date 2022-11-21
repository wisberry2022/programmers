const solution = (n) => {
  //22-11-21
  //0. 나눌 수(modNum)를 1로 설정하고 n에서 1을 mod 연산을 진행한다.
  //1. mod연산의 결과가 1이 되었을 때 while문을 종료하고 modNum을 return한다.
  let modNum = 1;
  while (true) {
    if (n % modNum === 1) {
      return modNum;
    }
    modNum++;
  }
}

console.log(solution(10), solution(1000000));