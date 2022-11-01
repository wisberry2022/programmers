function solution(numbers, k) {
  let ansIdx = 1;
  for (let i = 0; i < k - 1; i++) {
    ansIdx += 2;
    if (ansIdx > numbers.length) {
      ansIdx -= numbers.length;
    }
  }

  console.log(ansIdx);
}

solution([1, 2, 3, 4], 2)
solution([1, 2, 3, 4, 5, 6], 5)
solution([1, 2, 3], 3)