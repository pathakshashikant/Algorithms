const binarySearch = (array, t) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === array[middleIndex]) {
      return middleIndex;
    }

    if (t < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    }

    if (t > array[middleIndex]) {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 5, 7, 8], 5));
console.log(binarySearch([1, 5, 7, 8], 9));

// Big O: O(log(n))
//Binary search works only on sorted array
