const fibonacciSeries = (n) => {
  let list = [0, 1];
  for (let i = 2; i < n; i++) {
    list[i] = list[i - 2] + list[i - 1];
  }
  return list;
};

console.log(fibonacciSeries(2));
console.log(fibonacciSeries(3));
console.log(fibonacciSeries(7));

//Time complexity: O(n) /Linear
//Space complexity: O(n) /Linear
