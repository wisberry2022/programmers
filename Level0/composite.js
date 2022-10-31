function solution(n) {
  // 22-10-30
  // 1,2,3은 합성수가 아니므로 항상 1이 return되도록 한다.
  console.log('인자', n)
  let composite = 0;
  if (n <= 3) {
    return 0;
  } else {
    for (let i = 4; i <= n; i++) {
      // cnt는 약수의 개수, divide는 나누는 수(i까지 자동 증가)
      console.log('i 확인', i)
      let cnt = 0;
      let divide = 1;
      // cnt(약수) 개수 구하는 로직(divide가 i의 약수일 경우 cnt 증가)
      while (divide <= i) {
        if (i % divide === 0) {
          console.log('divide는 i의 약수! cnt:', cnt, 'divide:', divide)
          cnt += 1;
        }
        divide += 1;
      }
      // cnt가 3개 이상일 경우 composite 증가
      console.log('while 종료 후 cnt', cnt)
      if (cnt > 2) { composite += 1; }
    }
  }
  console.log('합성수 개수', composite)
  return composite;
}

console.log('함수 실행 전!')
let result = solution(3)
console.log('함수 실행 후!', result)