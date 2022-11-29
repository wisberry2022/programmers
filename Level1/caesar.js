const solution = (s, n) => {
  //22-11-29
  const sTable = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  const bTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const decode = [...s].map(it => {
    if (sTable.includes(it)) {
      return it === 'z' ? sTable[-1 + n] : sTable[sTable.indexOf(it) + n]
    } else if (bTable.includes(it)) {
      return it === 'Z' ? bTable[-1 + n] : bTable[bTable.indexOf(it) + n]
    } else {
      return ' '
    }
  }
  )
  return decode.join('');
}