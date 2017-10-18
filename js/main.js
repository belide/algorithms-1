// Maths Examples

let input = document.querySelector("#main-input"),
	output = document.querySelector(".output > p"),
	bubbleSortB = document.querySelector("#bubble-sort");

bubbleSortB.addEventListener("click", bubbleSort);

// Maths Examples - Bubble Sort (Numbers only)
function bubbleSort() {
	let array = input.value.split(" "),
		length = array.length,
		sorted = false,
		pass = 1,
		highlight = "highlightUnchanged",
		print = "Initial&nbsp; : &nbsp;&nbsp;&nbsp;";
	array.forEach(function(e, index) {
		array[index] = +e;
		print += "<span class='highlightEnd'>&nbsp; " + array[index] + "&nbsp; </span>";
	});
	print += "<br><br>";

	while (!sorted) {
		sorted = true;
		for (let i = 0; i < length - 1; i++) {
			print += "Pass " + pass + " : &nbsp;&nbsp;&nbsp;";
			highlight = "highlightUnchanged";
			if (array[i] > array[i + 1]) {
				sorted = false;
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				highlight = "highlightChanged";
			}
			array.forEach(function(e, index) {
				if (index === i || index === i + 1) {
					print += "<span class='" + highlight + "'>&nbsp; " + e + " &nbsp;</span>";
				} else if (index > length - 1) {
					print += "<span class='highlightFixed'>&nbsp; " + e + " &nbsp;</span>";
				} else {
					print += "<span class='highlightNone'>&nbsp; " + e + " &nbsp;</span>";
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
		print += "<span class='highlightEnd'>&nbsp; " + e + " &nbsp;</span>";
	});
	output.innerHTML = print;
	input.value = array.join(" ");
}