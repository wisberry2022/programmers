const solution = (lines) => {
  //22-11-17
  //0. lines를 순회하며 각 원소들의 start에서 end까지 이루어진 배열을 담은 새로운 배열(rgbArr)을 생성한다.
  //1. rgbArr를 순회하며 각 배열(it)의 원소(itm)들의 해당 인덱스와 +1 인덱스로 이루어진 length 2의 배열을 빈 배열(distanceArr)에 추가한다.
  //2. distanceArr를 순회하면서 해당 원소(it)가 자신(arr)에게 포함되어있는지 중복여부를 판단한다
  //2-A. it이 arr에게 포함되어있을 경우
  //2-A-1. 빈 배열(finalArr)에 해당 원소를 추가한다.
  //2-B. it이 arr에게 포함되어있지 않을 경우
  //2-B-1. 아무것도 하지 않고 순회를 계속한다.
  //3. finalArr에 중복검사를 통해 중복되는 원소를 제거한다.
  //4. 중복 원소를 제거한 finalArr의 length를 반환한다.
  const distanceArr = [];
  const finalArr = [];
  const rgbArr = lines.map(it => new Array((it[1] - it[0]) + 1).fill(0).map((_, idx) => it[0] + idx));
  rgbArr.map(it => (
    it.map((itm, idx, arr) => (
      idx !== arr.length - 1 ? distanceArr.push([itm, arr[idx + 1]]) : false
    ))
  ))
  distanceArr.join('|').split('|').map((it, idx, arr) => (
    arr.slice(idx + 1, arr.length).includes(it) ? finalArr.push(it) : false
  ))
  const answer = [...new Set(finalArr)];
  return answer.length;
}

solution([[0, 1], [2, 5], [3, 9]]);
solution([[-1, 1], [1, 3], [3, 9]]);
solution([[0, 5], [3, 9], [1, 10]]);