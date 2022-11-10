const solution = (sides) => {
  //22-11-10
  //0. 배열 sides에서 가장 긴 변(a)에서, a와 가장 짧은 변(b)을 뺸 값을 다시 뺀다.
  //1. sides 배열 원소의 합에서 sides 배열 내에 가장 긴 변을 뺀 뒤 1을 뺀 값을 반환한다.
  //2. 1번과 2번 값을 더한 뒤 반환한다.
  const innerLongest = Math.max(...sides) - (Math.max(...sides) - Math.min(...sides));
  const outerLongest = sides.reduce((acc, cur) => acc + cur) - Math.max(...sides) - 1;
  return innerLongest + outerLongest;
}

solution([1, 2])
solution([3, 6])
solution([11, 7])
solution([10, 30])