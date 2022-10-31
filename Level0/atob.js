function solution(before, after) {
  // 22-10-31
  // before, after에 포함된 string의 개수들을 담을 빈 객체를 생성
  let obj = {};
  let obj2 = {};
  // before, after를 배열로 전환한 뒤 각 원소들을 순회하여. 각 원소들의 등장횟수를 체크한다.
  [...before].map(it => obj[it] = [...after].filter(its => { return its === it }).length);
  [...after].map(it => obj2[it] = [...before].filter(its => { return its === it }).length);
  // obj와 obj2가 같을 경우 1 리턴, 그렇지 않을 경우 0 리턴
  return Object.values(obj).sort((a, b) => { return a - b }).toString() === Object.values(obj2).sort((a, b) => { return a - b }).toString() ? 1 : 0;
}

let result = solution('allpe', 'apple')
console.log(result);