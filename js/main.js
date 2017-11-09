// Algorithms - Numbers only

// Declare initial variables
let input = document.querySelector("#main-input"),
	output = document.querySelector(".output"),
	bubbleSortB = document.querySelector("#bubble-sort"),
	insertionSortB = document.querySelector("#insertion-sort"),
	mergeSortB = document.querySelector("#merge-sort"),
	quickSortB = document.querySelector("#quick-sort"),
	selectionSortB = document.querySelector("#selection-sort"),
	binarySearchB = document.querySelector("#binary-search");
let printL = "";

// Setup buttons
bubbleSortB.addEventListener("click", bubbleSort);
insertionSortB.addEventListener("click", insertionSort);
mergeSortB.addEventListener("click", mergeSort);
quickSortB.addEventListener("click", quickSort);
selectionSortB.addEventListener("click", selectionSort);
binarySearchB.addEventListener("click", binarySearch);

// Algorithms - Bubble Sort
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

// Algorithms - Insertion Sort
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

// Algorithms - Merge Sort
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
	printL += "<br><br>";

	array = array.length < 2 ? array : mergeSort_main(array, printL);
	output.innerHTML = printL;
	console.log(array);
}

// Merge Sort - Main inner
function mergeSort_main(array = []) {
	let len = array.length,
		middle = Math.floor(len / 2),
		left = array.slice(0, middle),
		right = array.slice(middle);

	return len < 2 ? array : mergeSort_megre(mergeSort_main(left), mergeSort_main(right), printL);
}

// Merge Sort - Merge inner
function mergeSort_megre(left, right) {
	let result = [],
		indexLeft = 0,
		indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length) {
		if (left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft]);
			indexLeft++;
		} else {
			result.push(right[indexRight]);
			indexRight++;
		}
	}

	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// Algorithms - Quick Sort
function quickSort() {
	alert("Coming soon!");
}

// Algorithms - Selection Sort
function selectionSort() {
	alert("Coming soon!");
}

// Algorithms - Binary Search
function binarySearch() {
	alert("Coming soon!");
}