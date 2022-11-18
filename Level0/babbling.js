const solution = (babbling) => {
  //22-11-18
  const pronounceList = ['aya', 'ye', 'woo', 'ma'];

  let cnt = 0;
  babbling.map(it => {
    const set = pronounceList.filter(itm => it.includes(itm))
    set.join('').length === it.length ? cnt++ : false
  })
  return cnt
}

solution(["aya", "yee", "u", "maa", "wyeoo"]);
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
