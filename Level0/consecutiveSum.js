const solution = (num, total) => {
  //22-11-15
  //0. Math.ceil(total/2)(cNum)가 포함된, num개의 원소를 가진 배열(checkArr)을 하나 생성한다 - 이 때, checkArr은 [cNum-2, cNum-1, cNum]이여야 된다.
  //1. checkArr을 합산하여 total과 일치하는지 검사
  //1-A. total과 일치하지 않을 경우
  //1-A-1. cNum에서 1을 빼고, 0번으로 돌아가 과정을 반복한다.
  //1-B. total과 일치할 경우 
  //1-B-1. checkArr을 return
  let cNum = total + num;
  while (true) {
    const checkArr = new Array(num).fill(0).map((_, idx) => cNum - idx).reverse();
    console.log(checkArr)
    if (checkArr.reduce((acc, cur) => acc + cur) === total) {
      return checkArr;
    }
    cNum--;
  }
}

[-1, 0, 1]

const result = solution(2, 0);
console.log(result);