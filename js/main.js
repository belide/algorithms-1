// Algorithms - Numbers only

// Declare initial variables
let input = document.querySelector("#main-input"),
	output = document.querySelector(".output > p"),
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
		print = "Initial&nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e, index) {
		array[index] = +e;
		print += "<span class='highlightBlue'>&nbsp; " + array[index] + "&nbsp; </span>";
	});
	print += "<br><br>";

	while (!sorted) {
		sorted = true;
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
		if (length === 2) {
			break;
		}
		length--;
		pass++;
	}

	print += "Final &nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e) {
		print += "<span class='highlightBlue'>&nbsp; " + e + " &nbsp;</span>";
	});
	output.innerHTML = print;
	input.value = array.join(" ");
}

// Algorithms - Insertion Sort
function insertionSort() {}

// Algorithms - Merge Sort
function mergeSort() {}

// Algorithms - Quick Sort
function quickSort() {}

// Algorithms - Radix Sort
function radixSort() {}

// Algorithms - Binary Search
function binarySearch() {}