const arrayUtils = require("./modules/arrayUtils");
// Problem 1: Chunking an Array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = arrayUtils.chunkArray(array1, 2);
console.log('Chunked Array:', chunkedArray); // [[1, 2], [3, 4], [5, 6], [7, 8]]
// Problem 2: Finding Unique Elements
const array2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayUtils.findUniqueElements(array2);
console.log('Unique Array:', uniqueArray); // [1, 2, 3, 4, 5]