const solution = (polynomial) => {
  //22-11-15
  //0. polynomial을 split(" + ")하여 상수항과 일차항으로 이루어진 배열(expArr)을 생성한다
  //1. expArr에서 일차항만으로 이루어진 배열(linearTerm)과 상수항만으로 이루어진 배열(constantTerm)을 생성한다.
  //2. linearTerm을 순회(map)하며 parseInt를 통해 NaN이 나올 경우 1을, 그렇지 않을 경우 계수가 리턴되도록 하고, reduce를 사용하여 합산한다(coefficient).
  //3. constantTerm 배열을 합산한다.
  //4. coefficient에 x 문자열을 추가시킨뒤 constantTerm의 맨 앞에 삽입시킨다.
  //5-A. constantTerm의 length가 1인 경우
  //5-A-1. constantTerm[0]을 return한다.
  //5-B. constantTerm의 length가 2인 경우
  //5-B-1. constantTerm을 join(' + ')한다.
  const expArr = polynomial.split(' + ');
  let [linearTerm, constantTerm] = [expArr.filter(it => it.includes('x')), expArr.filter(it => !(it.includes('x')))]
  let coefficient = linearTerm.length ? linearTerm.map(it => isNaN(parseInt(it)) ? 1 : parseInt(it)).reduce((acc, cur) => acc + cur) : 0;
  constantTerm = constantTerm.length ? [constantTerm.map(Number).reduce((acc, cur) => acc + cur)] : [];
  coefficient ? constantTerm.unshift(coefficient !== 1 ? String(coefficient) + "x" : "x") : false;
  console.log(constantTerm);
  return constantTerm.length > 1 ? constantTerm.join(" + ") : String(constantTerm[0]);
}

let result1 = solution("3x + 7 + x")
let result2 = solution('x + x + 11x')
let result3 = solution('5x + x + 2x + 3 + 5')
let result4 = solution('x + 7 + 15')
let result5 = solution('9x + 20x')

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);