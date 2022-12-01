const solution = (n, arr1, arr2) => {
  //22-12-01
  //0. arr1과 arr2를 순회하면서 각 원소를 이진수로 변환한뒤 padStart를 활용하여 다섯자리의 수로 맞춘다.
  //1. arr1과 arr2의 각 원소를 순회하면서 두 수 중 하나라도 1일 경우는 1을, 0일 경우는 0을 반환한 새로운 배열(totalMap)을 만든다.
  //2. decimalArr를 순회하면서 1에 해당하는 문자는 '#'을, 0에 해당하는 문자는 ' '로 변환한 배열을 return한다.
  const [decimalArr1, decimalArr2] = [arr1.map(v => v.toString(2).padStart(n, '0')), arr2.map(v => v.toString(2).padStart(n, '0'))]
  const totalMap = [];
  for (let i = 0; i < n; i++) {
    let result = '';
    for (let j = 0; j < n; j++) {
      result += Number(decimalArr1[i][j]) || Number(decimalArr2[i][j]) ? '#' : ' ';
    }
    totalMap.push(result);
  }
  console.log(totalMap)
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])