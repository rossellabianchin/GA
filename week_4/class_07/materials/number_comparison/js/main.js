window.onload = function() {

	var first = document.getElementById("first"),
		second = document.getElementById("second"),
		comparison = document.getElementById("comparison"),
		button = document.getElementById("submit");

		console.log(first.value); // stampa codice nel "Console" su Inspect Element

		button.onclick = function () {

			if (first.value > second.value) {
				comparison.innerHTML = ">";
				} else if (first.value < second.value) {
				comparison.innerHTML = "<";
				} else { 
				comparison.innerHTML = "==";
 				}		
		}
}
