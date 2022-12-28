const fibonacciSeries = (n) => {
  if (!n) {
    return "Please input number greater than 0";
  }
  if (n === 1) {
    return n - 1;
  }

  let firstNo = 0;
  let secondNo = 1;

  let list = [0, 1];
  for (let i = 2; i < n; i++) {
    let temp = firstNo + secondNo;
    firstNo = secondNo;
    secondNo = temp;
    list.push(temp);
  }
  return list;
};

console.log(fibonacciSeries(2));
