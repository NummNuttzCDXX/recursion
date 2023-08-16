// Recursion -- Merge Sort

/* 
   1. Sort left half
   2. Sort right half
   3. Merge 
*/

/**
 * 
 * @param {Array} array - Array of Numbers
 * @return {Array} Sorted Array
 */
function mergeSort(array) {
	if (array.length <= 1) return array;
	
	// Sort left
	const left = array.splice(0, array.length / 2);
	const sort1 = mergeSort(left);

	// Sort right
	const right = array;
	const sort2 = mergeSort(right);

	// Merge
	let sorted = false; // To stop while loop
	let leftIndex = 0; // To loop through both arrays one at a time
	let rightIndex = 0;
	let sort = []; // New sorted array
	while (!sorted) {
		const leftItem = sort1[leftIndex]; // Get left half item
		const rightItem = sort2[rightIndex]; // Get right half item

		// Clause to break loop
		if (rightItem === undefined && leftItem !== undefined) {
			sort.push(leftItem);
			leftIndex += 1
		} else if (leftItem === undefined && rightItem !== undefined) {
			sort.push(rightItem);
			rightIndex += 1
		} else if (rightItem == undefined && leftItem == undefined) {
			sorted = true;
			break;
		}

		// Sort and merge
		if (leftItem <= rightItem) {
			sort.push(leftItem);
			leftIndex += 1;
		} else if (rightItem <= leftItem) {
			sort.push(rightItem);
			rightIndex += 1;
		}
	}

	return sort;
}

const array = [5, 2, 4, 6, 8, 1, 7, 3];
console.log(mergeSort(array));
