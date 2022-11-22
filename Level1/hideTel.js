const solution = (phone_number) => {
  //22-11-22
  const regExp = new RegExp('[0-9]', 'g');
  return phone_number.slice(0, phone_number.length - 4).replace(regExp, '*') + phone_number.slice(phone_number.length - 4, phone_number.length);
}

console.log(solution("027778888"), solution("01033334444"))
