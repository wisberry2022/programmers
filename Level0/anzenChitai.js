const solution = (board) => {
  //22-11-16
  //C 0. board를 순회하며 폭탄(1)이 위치한 좌표를 배열(bombList)로 생성한다
  //1. bombList를 순회하여 위험 지역에 해당하는 좌표를 배열(dangerZone)로 생성한다.
  //2. dangerZone의 원소 중 board의 length를 초과하거나, -1을 포함하는 배열을 모두 제거한 후 중복값을 제거한다.
  //3. board.length를 제곱한 값에서 중복을 제거한 dangerZone의 length값을 뺀 값을 return한다.
  let dangerZone = [];
  const bombList = [];
  const checkArr = [-1, 0, 1];
  const filterArr = board.filter(it => it.includes(1));
  const oneArray = filterArr.map(it => board.indexOf(it));
  filterArr.map((it, id) => it.map((itm, idx) => (itm && bombList.push([oneArray[id], idx]))))
  for (coordinate of bombList) {
    let [x, y] = coordinate;
    const xCheckSet = [x - 1, x, x + 1];
    xCheckSet.map(it => checkArr.map(itm => dangerZone.push([it, y + itm])))
    dangerZone = dangerZone.filter(it => !(it.includes(board.length) || it.includes(-1)))
  }
  const answer = [...new Set(dangerZone.join("|").split("|"))].map((v) => v.split(",")).map((v) => v.map((a) => +a));
  if (answer[0].length === 1 && answer[0].includes(0)) {
    return Math.pow(board.length, 2);
  }
  return Math.pow(board.length, 2) - (answer.length)
}

let result1 = solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])
let result2 = solution([[0, 0, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]])
let result3 = solution([[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 1]])

console.log(result1, result2, result3);
