const solution = (n) => {
  //22-11-11
  //0. idx와 n을 선언하고 while문을 통해 반복시킨다.
  //1. idx와 n을 동시에 1씩 증가시킨다.
  //1-A. n이 3을 포함하지 않거나, 3의 배수가 아닌 경우
  //1-A-1. n을 1씩 증가시킨다.
  //1-B. idx가 3을 포함하거나 3의 배수일 경우
  //1-B-1. n이 3을 포함하지 않거나 3의 배수가 되지 않을때까지 계속해서 1을 증가시킨다
  let idx = 1;
  let num = 1;
  if (n === 1) {
    return 1;
  }
  while(true) {
    
  }

// const result = solution(1);
const result2 = solution(8);
console.log(result2);
