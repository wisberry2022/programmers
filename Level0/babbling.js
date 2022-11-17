const solution = (babbling) => {
  //22-11-17
  // 0. aya, ye, woo, ma로 이루어진 정규식 객체를 다섯개 선언한다.(단, aya, ye, woo, ma를 포함하지 않는다는 정규식 - new RegExp(`[^${example}]`))객체를 선언해야한다)
  // 1. babbling을 순회하면서 각 원소(문자열)별로 match를 진행하여 정규식 객체에 해당되지 않는 문자열[rest]들을 return한다.
  // 2. rest들을 다시 join('')한 문자열들을 다시 정규식 객체에 대입하여 1번 과정을 진행한다.
  const babblingList = ['aya', 'ye', 'woo', 'ma'];
  const aya = new RegExp(`[^${babblingList[0]}]`, 'g');
  const ye = new RegExp(`[^${babblingList[1]}]`, 'g');
  const woo = new RegExp(`[^${babblingList[2]}]`, 'g');
  const ma = new RegExp(`[^${babblingList[3]}]`, 'g');

  babbling.map(it => {
    for (reg of [aya, ye, woo, ma]) {
      console.log(it, reg, it.match(reg));
    }
  })

}

solution(["aya", "yee", "u", "maa", "wyeoo"]);