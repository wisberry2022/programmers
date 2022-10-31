// function solution(letter) {
//   let answer = '';
//   const morse = {
//     '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
//     '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
//     '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
//     '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
//     '-.--': 'y', '--..': 'z'
//   }
//   let tArr = letter.split(' ');
//   tArr.forEach((it, idx, arr) => { answer += morse[arr[idx]] })
//   return answer;
// }

function solution(letter) {
  // 22-10-31
  // 리턴할 결과값
  let answer = '';
  // morse 부호로 이루어진 객체
  const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
  }
  // 인자로 들어온 letter를 배열로 전환
  let tArr = letter.split('');
  // letter를 순회하며 각 모스부호들의 value를 찾아 answer에 더한다.
  tArr.forEach((it, idx, arr) => { answer += morse[arr[idx]] })
  return answer;
}

let result = solution(".--. -.-- - .... --- -.");

console.log(result);