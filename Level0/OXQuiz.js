const solution = (quiz) => {
  //22-11-14
  //0. quiz 배열을 순회하면서 각 원소들을 '='로 split하여 분리한다.(tempSplit) 
  //1. tempSplit[0]에 eval 함수를 사용하여 그 결과를 반환(result)
  //2. tempSplit[1]과 result를 비교하여 같을 경우, answerArr에 'O'를, 그렇지 않을 경우 'X'를 추가한다.
  const answerArr = [];
  quiz.map(it => {
    const tempSplit = it.split(' = ');
    String(eval(tempSplit[0])) === tempSplit[1] ? answerArr.push('O') : answerArr.push('X');
  }
  )

  return answerArr;
}

const result1 = solution(["3 - 4 = -3", "5 + 6 = 11"]);
const result2 = solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]);

console.log(result1, result2)