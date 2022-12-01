const solution = (sizes) => {
  //22-12-01
  //0. size 배열 내에 존재하는 원소들을 오름차순 정렬(fSort)한다. 
  //1. fSort 배열의 원소의 첫번째 값을 기준으로 오름차순 정렬(sSort)한다.
  //2. sSort의 원소(하위 배열)들을 순회하면서 첫 번째 인덱스의 값들만 모은 배열(fArr)과, 두 번째 인덱스의 값들만 모은 배열(sArr)을 만든다.
  //3. fArr에서 가장 큰 값과, sArr에서의 가장 큰 값을 곱한다.
  const [fArr, sArr] = [[], []];
  const fSort = sizes.map(v => v.sort((a, b) => a - b));
  fSort.sort((a, b) => a[0] - b[0]).map(v => (fArr.push(v[0]), sArr.push(v[1])));
  return Math.max(...fArr) * Math.max(...sArr);
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])