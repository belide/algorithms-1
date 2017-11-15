// Algorithms - Numbers only

// Declare initial variables
let input = document.querySelector("#main-input"),
	output = document.querySelector(".output"),
	selectionSortB = document.querySelector("#selection-sort"),
	bubbleSortB = document.querySelector("#bubble-sort"),
	insertionSortB = document.querySelector("#insertion-sort"),
	mergeSortB = document.querySelector("#merge-sort"),
	quickSortB = document.querySelector("#quick-sort"),
	binarySearchB = document.querySelector("#binary-search");
let printL = "";

// Setup buttons
selectionSortB.addEventListener("click", selectionSort);
bubbleSortB.addEventListener("click", bubbleSort);
insertionSortB.addEventListener("click", insertionSort);
mergeSortB.addEventListener("click", mergeSort);
quickSortB.addEventListener("click", quickSort);
binarySearchB.addEventListener("click", binarySearch);

// ---------- Algorithms - Selection Sort ----------
function selectionSort() {
	let array = input.value.split(" "),
		length = array.length,
		min;
	printL = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	printL += "<br><br>";

	for (let i = 0; i < length; i++) {
		min = i;
		for (let j = i + 1; j < length; j++) {
			printL += "Index " + i + " : &nbsp;&nbsp;&nbsp;";
			let highlight = "highlightGreen";
			if (array[j] < array[min]) {
				min = j;
				highlight = "highlightRed";
			}
			array.forEach(function(e, index) {
				if (index < i) {
					printL += "<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index === i) {
					printL += "<span class='highlightPurple'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index === j) {
					printL += "<span class='" + highlight + "'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
			printL += "<br>";
		}
		if (i != min) {
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
		printL += "<br>";
	}

	alert("List sorted successfully.");
	printL += "Final &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		printL += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
	});
	printL += "</p>";
	output.innerHTML = printL;
	input.value = array.join(" ");
}

// ---------- Algorithms - Bubble Sort ----------
function bubbleSort() {
	let array = input.value.split(" "),
		length = array.length,
		sorted = false,
		pass = 1;
	printL = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	printL += "<br><br>";

	// Main loop
	while (!sorted && pass < 30 && length >= 2) {
		sorted = true;
		// Pass loop
		for (let i = 0; i < length - 1; i++) {
			printL += "Pass " + pass + " : &nbsp;&nbsp;&nbsp;";
			let highlight = "highlightGreen";
			if (array[i] > array[i + 1]) {
				sorted = false;
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				highlight = "highlightRed";
			}
			// printL line loop
			array.forEach(function(e, index) {
				if (index === i || index === i + 1) {
					printL += "<span class='" + highlight + "'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index > length - 1) {
					printL += "<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
			printL += "<br>";
		}
		printL += "<br>";
		length--;
		pass++;
	}

	if (pass >= 30) {
		alert("Maximum number of passes (30) reached!\nThe list was not fully sorted.\r\nYou can use the algorithm again to sort the list further.");
		output.innerHTML = "";
	} else {
		alert(`List sorted successfully.\nNumber of passes: ${pass - 1}.`);
		printL += "Final &nbsp; : &nbsp;&nbsp;&nbsp;";
		array.forEach(function(e) {
			printL += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
		});
		printL += "</p>";
		output.innerHTML = printL;
	}

	input.value = array.join(" ");
}

// ---------- Algorithms - Insertion Sort ----------
function insertionSort() {
	let array = input.value.split(" "),
		length = array.length;
	printL = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	printL += "<br><br>";

	// Main loop
	for (let i = 1; i < length; i++) {
		for (let k = i; k > 0; k--) {
			printL += "Index " + i + " : &nbsp;&nbsp;&nbsp;";
			let highlight = "highlightGreen";
			if (array[k] < array[k - 1]) {
				highlight = "highlightRed";
				let temp = array[k - 1];
				array[k - 1] = array[k];
				array[k] = temp;
			}
			array.forEach(function(e, index) {
				if (index === k || index === k - 1) {
					printL += "<span class='" + highlight + "'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
			printL += "<br>";
			if (highlight === "highlightGreen") {
				break;
			}
		}
		printL += "<br>";
	}

	alert("List sorted successfully.");
	printL += "Final &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		printL += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
	});
	printL += "</p>";
	output.innerHTML = printL;
	input.value = array.join(" ");
}

// ---------- Algorithms - Merge Sort ----------
function mergeSort() {
	let array = input.value.split(" "),
		length = array.length;
	printL = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}

	// Show array split into single values
	printL += "<br><br>Step 0 &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		printL += "&nbsp;<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>&nbsp;";
	});
	printL += "<br>";

	if (length > 1) {
		mergeSort_main(array, length);
	}

	alert("List sorted successfully.");
	printL += "<br>Final &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		printL += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
	});
	printL += "</p>";
	output.innerHTML = printL;
	input.value = array.join(" ");
}

// Merge Sort - Main inner
function mergeSort_main(array = [], len) {
	for (let width = 1, count = 1; width < len; width *= 2, count++) {
		printL += `<br>Step ${count} &nbsp; : &nbsp;&nbsp;&nbsp;`;
		for (let i = 0; i < len; i = i + 2 * width) {
			mergeSort_megre(array, i, Math.min(i + width, len), Math.min(i + 2 * width, len));
			printL += "&nbsp;";
			for (let j = i; j < Math.min(i + 2 * width, len); j++) {
				printL += "<span class='highlightGreen'>&nbsp; " + array[j] + " &nbsp;</span>";
			}
			printL += "&nbsp;";
		}
		printL += "<br>";
	}
}

// Merge Sort - Merge inner
function mergeSort_megre(array = [], left, right, end) {
	let n = left,
		m = right,
		currentSort = [],
		j;

	for (j = left; j < end; j++) {
		if (n < right && (m >= end || array[n] < array[m])) {
			currentSort.push(array[n]);
			n++;
		} else {
			currentSort.push(array[m]);
			m++;
		}
	}

	currentSort.map(function(item, i) {
		array[left + i] = item;
	});
}

// ---------- Merge Sort - Recursive implementation (no visualization) ----------
// Merge Sort - Main inner
// function mergeSort_main(array = []) {
// 	let len = array.length,
// 		middle = Math.floor(len / 2),
// 		left = array.slice(0, middle),
// 		right = array.slice(middle);

// 	return len < 2 ? array : mergeSort_megre(mergeSort_main(left), mergeSort_main(right));
// }

// Merge Sort - Merge inner
// function mergeSort_megre(left, right) {
// 	let result = [],
// 		indexLeft = 0,
// 		indexRight = 0;

// 	while (indexLeft < left.length && indexRight < right.length) {
// 		if (left[indexLeft] < right[indexRight]) {
// 			result.push(left[indexLeft]);
// 			indexLeft++;
// 		} else {
// 			result.push(right[indexRight]);
// 			indexRight++;
// 		}
// 	}

// 	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
// }

// ---------- Algorithms - Quick Sort ----------
function quickSort() {
	let array = input.value.split(" "),
		length = array.length;
	printL = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	printL += "<br>";

	quickSort_main(array, 0, length - 1);

	//alert("List sorted successfully.");
	printL += "<br>Final &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		printL += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
	});
	printL += "</p>";
	output.innerHTML = printL;
	//input.value = array.join(" ");
}

// Quick Sort - Main ineer
function quickSort_main(arr, left, right) {
	let pivot,
		partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = quickSort_partition(arr, pivot, left, right);

		quickSort_main(arr, left, partitionIndex - 1);
		quickSort_main(arr, partitionIndex + 1, right);
	}
	return arr;
}

// Quick Sort - Partition ineer
function quickSort_partition(arr, pivot, left, right) {
	let pivotValue = arr[pivot],
		partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			let temp = arr[i];
			arr[i] = arr[partitionIndex];
			arr[partitionIndex] = temp;
			partitionIndex++;
		}
	}

	let temp = arr[right];
	arr[right] = arr[partitionIndex];
	arr[partitionIndex] = temp;
	return partitionIndex;
}

// ---------- Algorithms - Binary Search ----------
function binarySearch() {
	let array = input.value.split(" "),
		length = array.length,
		selLen = array.length,
		start = 0,
		end = array.length,
		target = +prompt("What number are you searching for?"),
		targetPos = 0,
		step = 0;
	printL = "<p>Input&nbsp; : &nbsp;&nbsp;&nbsp;";

	if (isNaN(target)) {
		alert("Only numbers are allowed.");
		output.innerHTML = "";
		return 1;
	}

	// Check for NaN and initial printL line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		// Check if array is sorted
		if (array[i] > array[Math.min(i + 1, length - 1)]) {
			alert("Please sort the list (in an ascending order) before using binary search.");
			output.innerHTML = "";
			return 2;
		}
		printL += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	printL += "<br><br>";

	while (selLen > 0 && step < 50) {
		targetPos = start + Math.floor((selLen - 1) / 2);
		if (array[targetPos] === target) {
			alert("Number FOUND in the list.");
			printL += `Step ${step}&nbsp; : &nbsp;&nbsp;&nbsp;`;
			array.forEach(function(e, index) {
				if (index === targetPos) {
					printL += "<span class='highlightGreen'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightRed'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
			printL += "</p>";
			output.innerHTML = printL;
			return 0;
		} else if (array[targetPos] < target) {
			start = targetPos + 1;
			selLen = end - start;
			printL += `Step ${step}&nbsp; : &nbsp;&nbsp;&nbsp;`;
			array.forEach(function(e, index) {
				if (index === targetPos) {
					printL += "<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index < start || index > end) {
					printL += "<span class='highlightRed'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
		} else {
			end = targetPos;
			selLen = end - start;
			printL += `Step ${step}&nbsp; : &nbsp;&nbsp;&nbsp;`;
			array.forEach(function(e, index) {
				if (index === targetPos) {
					printL += "<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index < start || index > end) {
					printL += "<span class='highlightRed'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					printL += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
		}
		step++;
		printL += "<br><br>";
	}

	alert("Number NOT FOUND in the lsit.");
	printL += "</p>";
	output.innerHTML = printL;
}