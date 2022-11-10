const solution = (score) => {
  //22-11-10
  // 0. score에 존재하는 원소들의 평균들로 이루어진 score1 배열과 score1 배열을 오름차순 정렬한 score2 배열을 생성한다..
  // 1. score1 배열을 순회하여 score2.indexOf(it)을 이용하여 score2에서의 인덱스를 score1 배열에 삽입한다.
  // 2. 리턴
  let averageArr = score.map(it => (it[0] + it[1]) / 2);
  let sortedArr = score.map(it => (it[0] + it[1]) / 2).sort((a, b) => b - a);
  return averageArr.map(it => sortedArr.indexOf(it) + 1);
}

solution([[80, 70], [90, 50], [40, 70], [50, 80]]);
solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]);