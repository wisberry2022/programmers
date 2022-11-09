// 최대공약수 구하는 함수
const getLcd = (a,b) => {
  let lcdNum = 0;
  let modNum = 1;
  //0. a와 b중 작은 수를 구함
  let criteria = a <= b ? a : b;
  //1. 최대공약수를 구한다.
  while(modNum <= criteria) {
    if (!(a%modNum) && !(b%modNum)) {
      lcdNum = modNum;
    }
    modNum++;
  }
  return lcdNum;
}

//인수들의 집합에서 소인수만으로 이루어진 배열을 리턴하는 함수
const isPrimeFactor = (factorSet) => {
  const primeFactorz = [];
  for (i of factorSet) {
    const primeArr = [];
    let cnt = 1;
    while(cnt <= i) {
      if(i%cnt === 0) {
        primeArr.push(i)
      }
      cnt++;
    }
    // primeArr의 길이가 2라면 소인수이므로, primeFactorz에 추가한다.
    if (primeArr.length === 2) {
      primeFactorz.push(i);
    }
  }
  return primeFactorz;
}

const solution = (a,b) => {
  //22-11-08
  let primeFactorz;
  const checkSet = [2,5];
  //a와 b가 같지 않을 시(유리수일 때)
  if (a !== b) {
    //0. a와 b의 최대공약수를 확인한다
    const lcd = getLcd(a,b);
    if (lcd !== 1) {
      //0-a. 최대공약수 존재 시 -> 최대공약수를 통해 a와 b를 약분하여 기약분수로 만든다.
      //0-a-1. a와 b를 최대공약수로 나누어 기약 분수로 만든다.
      a /= lcd, b/=lcd;
      if (b === 1) {
        return 1; 
      }else {
        //0-a-2. 분모 b의 인수를 구한다.
        let factorSet = Array.from({length:b}, (_,k) => k+1).filter(it => b%it === 0);
        //0-a-3.factorSet에서 소인수를 구한다.
        primeFactorz = isPrimeFactor(factorSet);
        return primeFactorz.filter(it => !checkSet.includes(it)).length !== 0 ? 2 : 1;
      }
    }else {
    //0-b. 최대공약수 없을 시 -> 그 자체가 기약분수임으로 곧바로 유한소수 판별
      if (b===1) {
        return 1;
      }else {
        let factorSet = Array.from({length:b}, (_,k) => k+1).filter(it => b%it === 0);
        primeFactorz = isPrimeFactor(factorSet);
        return primeFactorz.filter(it => !checkSet.includes(it)).length !== 0 ? 2 : 1;  
      }  
    };
  }else {
    //a와 b가 같을 때(정수일 때)
    return 1;
  }  
}

// const solution = (a, b) => {
//   if (a == b) {
//     return 1;
//   } else {
//     let lcd = getLcd(a,b);
//     if (lcd === 1) {
//       let factorSet = Array.from({length:b}, (_,k) => k+1).filter(it => b % it == 0);
//       let primeFactorz = isPrimeFactor(factorSet);
//       return primeFactorz.filter(it => ![2,5].includes(it)).length !== 0 ? 2 : 1;      
//     }else {
//       a /= lcd, b /= lcd;
//       if (b == 1) {
//         return 1;
//       }else {
//         let factorSet = Array.from({length:b}, (_,k) => k+1).filter(it => b % it == 0);
//         let primeFactorz = isPrimeFactor(factorSet);
//         return primeFactorz.filter(it => ![2,5].includes(it)).length !== 0 ? 2 : 1;
//       }
//     }
//   }
// }

const result = solution(50,20);
console.log(result);