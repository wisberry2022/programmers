// const solution = (my_string) => {
//   const natureSet = [];
//   for (i in my_string) {
//     if (typeof Number(my_string[i]) === "number") {
//       console.log(i, my_string[i], typeof my_string[i], Number(my_string[i]), typeof Number(my_string[i]));
//     }
//   }
// }

const solution = (my_string) => {
  // 22-11-03
  // 문자열 내에서 최소 한 개 이상의 자연수로 이루어진 패턴 찾아 string 배열로 반환
  // 이후 각 원소 숫자로 바꾼뒤 reduce 이용하여 합산
  return my_string.match(/\d{1,}/g) !== null ?
    my_string.match(/\d{1,}/g)
      .map(Number)
      .reduce((acc, cur) => acc + cur)
    :
    0
}

let result = solution('aAb1B2cC34oOp');

console.log(result);
