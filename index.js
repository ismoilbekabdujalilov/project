function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;

    while (left <= right) {
      let midIndex = Math.floor((left + right) / 2);

      if (matrix[i][midIndex] === target) {
        return true;
      } else if (matrix[i][midIndex] < target) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
