// Algorithms - Numbers only

// Declare initial variables
let input = document.querySelector("#main-input"),
	outputContainer = document.querySelector(".output-container"),
	output = document.querySelector(".output"),
	bubbleSortB = document.querySelector("#bubble-sort"),
	insertionSortB = document.querySelector("#insertion-sort"),
	mergeSortB = document.querySelector("#merge-sort"),
	quickSortB = document.querySelector("#quick-sort"),
	radixSortB = document.querySelector("#radix-sort"),
	binarySearchB = document.querySelector("#binary-search");

// Setup buttons
bubbleSortB.addEventListener("click", bubbleSort);
insertionSortB.addEventListener("click", insertionSort);
mergeSortB.addEventListener("click", mergeSort);
quickSortB.addEventListener("click", quickSort);
radixSortB.addEventListener("click", radixSort);
binarySearchB.addEventListener("click", binarySearch);

// Algorithms - Bubble Sort
function bubbleSort() {
	let array = input.value.split(" "),
		length = array.length,
		sorted = false,
		pass = 1,
		highlight = "highlightGreen",
		print = "<p>Initial&nbsp; : &nbsp;&nbsp;&nbsp;";

	// Check for NaN and initial print line
	for (let i = 0; i < length; i++) {
		if (isNaN(array[i])) {
			alert("Only numbers are allowed.");
			output.innerHTML = "";
			return 1;
		}
		array[i] = +array[i];
		print += "<span class='highlightBlue'>&nbsp; " + array[i] + "&nbsp; </span>";
	}
	print += "<br><br>";

	// Main loop
	while (!sorted && pass < 50 && length >= 2) {
		sorted = true;
		// Pass loop
		for (let i = 0; i < length - 1; i++) {
			print += "Pass " + pass + " : &nbsp;&nbsp;&nbsp;";
			highlight = "highlightGreen";
			if (array[i] > array[i + 1]) {
				sorted = false;
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				highlight = "highlightRed";
			}
			// Print line loop
			array.forEach(function(e, index) {
				if (index === i || index === i + 1) {
					print += "<span class='" + highlight + "'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index > length - 1) {
					print += "<span class='highlightOrange'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					print += "<span class='highlightGrey'>&nbsp; " + e + " &nbsp;</span>";
				}
			});
			print += "<br>";
		}
		print += "<br>";
		length--;
		pass++;
	}

	if (pass >= 50) {
		alert("Maximum number of passes reached!");
	} else {
		print += "Final &nbsp; : &nbsp;&nbsp;&nbsp;";
		array.forEach(function(e) {
			print += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
		});
	}

	print += "</p>";
	output.innerHTML = print;
	input.value = array.join(" ");
}

// Algorithms - Insertion Sort
function insertionSort() {
	alert("Coming soon!");
}

// Algorithms - Merge Sort
function mergeSort() {
	alert("Coming soon!");
}

// Algorithms - Quick Sort
function quickSort() {
	alert("Coming soon!");
}

// Algorithms - Radix Sort
function radixSort() {
	alert("Coming soon!");
}

// Algorithms - Binary Search
function binarySearch() {
	alert("Coming soon!");
}