const solution = (id_pw, db) => {
  //22-11-10
  //0. db 배열을 순회하여 아이디(key) - 패스워드(value) 형태의 객체를 생성한다.
  //1. obj에 a와 b를 대입한다.
  //1-A. undefined가 발생할 경우 => 아이디가 없다는 의미이므로 fail
  //1-B. obj에서 a의 value가 id_pw의 비밀번호와 일치하는지 확인한다.
  //1-B-a. 일치할 시 login 리턴
  //1-B-b. 일치하지 않을 시 wrongpw
  const [id, pw] = id_pw;
  let dbObj = db.reduce((acc, cur) => ({
    ...acc,
    [cur[0]]: cur[1],
  }), {})

  if (dbObj[id] !== undefined) {
    if (dbObj[id] === pw) {
      return 'login';
    } else {
      return 'wrong pw';
    }
  } else {
    return 'fail';
  }
}

let result1 = solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]);
let result2 = solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]);
let result3 = solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]);

console.log(result1, result2, result3);