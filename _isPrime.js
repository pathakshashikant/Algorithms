const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  // for (let i = 2; i < n; i++) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
//Bio O notation of this algorithm is : O(n/2)
