function solution(num_list, n) {
  // 22-10-31
  var answer = [];
  Array.from({ length: num_list.length / n }, (_, k) => k + 1).map((it, idx) => answer.push(num_list.slice(idx * n, it * n)))
  console.log(answer);
}

solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);