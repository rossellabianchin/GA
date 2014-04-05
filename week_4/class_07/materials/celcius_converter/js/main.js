window.onload = function() {

	var celsius = document.getElementById("celsius"),
		result = document.getElementById("result"),
		submit = document.getElementById("submit");

		submit.onclick = function () { // this is the EVENT
			var sum = celsius.value * 1.8 + 32;
			sum = sum.toFixed (2);
			result.innerHTML = sum;
		}
  
}
