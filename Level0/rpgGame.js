const solution = (keyinput, board) => {
  // 22-11-08
  const inputObj = {'left': -1, 'right':1, 'up':1, 'down':-1 }
  const zeroSet = ['left', 'right'];
  let baseCoord = [0,0];
  // 0. board의 가로 세로 최대치를 저장
  let [maxWidth, maxHeight] = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
  // 1. keyinput 순회하여 각 해당 키에 해당하는 값만큼 좌표 변경('left' - board[0]: -1, 'right' - board[1]: +1, 'up' - board[0]: +1, 'down' - board[1]: -1)
  // 2. board의 최대치를 넘어갈 때 더이상 계산하지 않도록 해야 함.(음수 방향까지 갈 수 있다. 예를 들어 width가 5일 경우, 표현될 수 있는 baseCoordinate는 [-2, height] ~ [2, height]이다.)
  console.log(maxWidth, maxHeight)
  for (key of keyinput) {
    if (zeroSet.includes(key)) {
      if (board[0] === 1) {
        baseCoord[0] = 0
      }else {
        baseCoord[0] += inputObj[key];
        if (Math.abs(baseCoord[0]) > maxWidth) {
          if (key === 'left') baseCoord[0] = -maxWidth;
          if (key === 'right') baseCoord[1] = maxWidth;
        };
      }
    }else {
      if (board[1] === 1) {
        baseCoord[1] = 0
      }else {
      baseCoord[1] += inputObj[key];
      if (Math.abs(baseCoord[1]) > maxHeight) {
                
        if (key === 'up') baseCoord[1] = maxHeight;
        if (key === 'down') baseCoord[1] = -maxHeight;
      }};
    }
  }
  return baseCoord;
}

let result = solution(["down", "down", "down", "down", "down"], [7,9]);
console.log(result);