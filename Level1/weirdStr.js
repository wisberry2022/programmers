const solution = (s) => {
  //22-11-25
  return s.split(' ').map(str => {
    return str.split('').map((v, i) => (
      !(i % 2) ? v.toUpperCase() : v.toLowerCase()
    )).join('')
  }).join(' ');

}

console.log(solution("try hello world"));