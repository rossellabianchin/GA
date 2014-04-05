window.onload = function() {



// alert ("Hello!"); esempio di commento con js

	document.getElementById("grey").onclick = function () {
		
		document.getElementById("background").style.backgroundColor = "grey";
	}

	document.getElementById("blue").onclick = function () {
		
		document.getElementById("background").style.backgroundColor = "blue";
	}

	document.getElementById("yellow").onclick = function () {
		
		document.getElementById("background").style.backgroundColor = "yellow";
	}
}
