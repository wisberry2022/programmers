const solution = (chicken) => {
  //22-11-10
  //0. chicken의 값이 1이 될 때까지 10으로 나누고, 나눈 몫과 나머지를 지속적으로 체크한다.
  //1. 10으로 나눌 때마다 나온 몫은 sum(주문할 수 있는 치킨)에 합산
  //2. 10으로 나눌 때마다 나온 나머지는 10으로 나누었을 때 1이 되었을 경우 sum에 합산
  // let restCpn = 0;
  let purchase = chicken;
  let coupon = 0;
  let sum = 0;
  while (chicken >= 10) {
    chicken = Math.floor(chicken / 10);
    coupon = coupon + (chicken % 10) + (chicken < 10 ? chicken : 0);
    if (coupon >= 10) {
      sum += Math.floor(coupon / 10);
      coupon = coupon % 10;
    }
    sum += chicken;
  }

  return sum;
}

solution(100);
solution(1081);
solution(332);
solution(1999);