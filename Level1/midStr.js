const solution = (s) => {
  //22-11-23
  return s.length % 2 ? s[Math.floor(s.length / 2)] : s.slice((s.length / 2) - 1, (s.length / 2) + 1);
}

console.log(solution('abcde'));
console.log(solution('qwer'));