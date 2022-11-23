const solution = (s) => {
  //22-11-23
  return [...s].map(it => it.charCodeAt(0)).sort((a, b) => b - a).map(v => String.fromCharCode(v)).join('');
}

solution("Zbcdefg")