const isPowerofTwo = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerofTwo(1));
console.log(isPowerofTwo(2));
console.log(isPowerofTwo(5));
console.log(isPowerofTwo(4));

//Big O --> O(log(n))

const isPowerofTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }

  return n & (n - 1 === 0);
};

//Big O --> O(1)-->constant
