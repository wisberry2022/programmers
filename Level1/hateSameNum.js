const solution = (arr) => {
  //22-11-24
  const result = [];
  arr.map((it, idx, ronly) => {
    if (ronly[idx + 1] !== it) {
      result.push(it);
    }
  })
  return result;
}

solution([1, 1, 3, 3, 0, 1, 1])
solution([4, 4, 4, 3, 3])