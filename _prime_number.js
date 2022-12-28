const primeNumber = (lowestvalue, highestvalue) => {
  let primeNumberList = [];
  for (let i = lowestvalue; i < highestvalue; i++) {
    let temp = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      // for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        temp = false;
        break;
      }
    }

    if (i > 1 && temp) {
      primeNumberList.push(i);
    }
  }

  return primeNumberList;
};

console.log(primeNumber(4, 9));
console.log(primeNumber(6, 8));

//Bio O notation of this algorithm is : O(n*n/2)
