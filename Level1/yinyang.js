const solution = (absolutes, signs) => {
  //22-11-23
  const yinYang = absolutes.map((v, i) => signs[i] ? v : -v).reduce((acc, cur) => acc + cur);
  return yinYang;
}

solution([4, 7, 12], [true, false, true])
solution([1, 2, 3], [false, false, true])