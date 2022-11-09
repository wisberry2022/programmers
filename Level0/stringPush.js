// 문자열을 오른쪽으로 한 칸씩 미는 함수
const pushString = (my_string) => {
  let strArr = [...my_string];
  let lastIndex = strArr.pop();
  strArr.unshift(lastIndex);
  return strArr.join('');
}

const solution = (A, B) => {
  //22-11-09
  let my_string = A;
  let combination = [A];
  //0. 문자열 A를 밀었을 때 나올 수 있는 모든 문자열이 담긴 배열(A')을 만든다.
  for (let i = 0; i < A.length - 1; i++) {
    my_string = pushString(my_string);
    combination.push(my_string);
  }
  //1. B가 A'에 포함되는지를 확인한다.
  //1-A. 포함될 경우, B가 A'에서 몇 번째 인덱스인지를 확인하여 return한다.(indexOf 사용)
  //1-B. 포함되지 않을 경우, -1을 return (indexOf 사용)
  return combination.indexOf(B);
}

const result = solution('apple', 'pleap');
console.log(result);