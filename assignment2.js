// Create a function that takes an array of numbers and returns a new array, sorted in ascending order.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: if the array has 0 or 1 element, it is already sorted
    }
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}
// Merge two sorted arrays into one sorted array
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Merge the remaining elements from left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// Example
const unsortedArray = [2, 6, 5, 3, 7, 4, 1];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array:", sortedArray);
