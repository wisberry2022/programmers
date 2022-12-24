const solution = (s) => {
  // 22-12-15
  const charSet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  charSet.forEach((it, idx) => {
    const reg = new RegExp(`${it}`, 'g');
    s = s.replace(reg, String(idx));
  })
  return Number(s);
}

solution("1zerotwozero3");