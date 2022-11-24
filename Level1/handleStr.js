const solution = (s) => {
  //22-11-24
  if (s.length === 4 || s.length === 6) {
    return s.match(/[a-zA-Z]/g) === null ? true : false
  } else {
    return false;
  }
}

solution('1234'), solution('023433pe1');