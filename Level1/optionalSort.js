const solution = (strings, n) => {
  //22-12-01
  strings.sort((a, b) => {
    if (a[n] < b[n]) { return -1 }
    else if (a[n] > b[n]) { return 1 }
    else if (a < b) { return -1 }
    else if (a > b) { return 1 }
    return 0;
  })
  return strings
}

solution(["sun", "bed", "car"], 1)
solution(["abce", "abcd", "cdx"], 2)