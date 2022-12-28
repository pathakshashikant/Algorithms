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

const search = (array, t, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (t === array[middleIndex]) {
    return middleIndex;
  }

  if (t < array[middleIndex]) {
    return search(array, t, leftIndex, middleIndex - 1);
  }
  if (t > array[middleIndex]) {
    return search(array, t, middleIndex + 1, rightIndex);
  }
};

const binarySearchRecursive = (array, t) => {
  return search(array, t, 0, array.length - 1);
};

console.log(binarySearchRecursive([1, 5, 7, 8], 5));
console.log(binarySearchRecursive([1, 5, 7, 8], 9));

// Big O: O(log(n))
