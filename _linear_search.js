const linearSearch = (array, t) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 5, 7, 8], 5));
console.log(linearSearch([1, 5, 7, 8], 9));

// Big O: O(n)
