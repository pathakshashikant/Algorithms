const factorial = (n) => {
  if (n < 0) {
    return "N should be a non-negative number";
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));

//Bi O notation : O(n2)
