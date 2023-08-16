// Fibonacci sequence with loop
function fib(n) {
	const arr = [0, 1, 1]; // First 3 nums in sequence

	for (let i = 3; i < n; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr;
}

console.log(fib(8))


// Recursively -- Cant get to work -- One number off for some reason
function recursiveFib(n) {
	if (n < 2) {
		return n
	} else {
		return recursiveFib(n-1) + recursiveFib(n-2);
	}
}

console.log(recursiveFib(8))
