window.onload = function() {

	var name = document.getElementById("name");
	//name.remove();  rimuove l'elemento
	console.log(name.innerHTML);
	name.innerHTML = "Rossella";
	console.log(name.innerHTML);

	var sum = document.getElementById("sum");
	sum.innerHTML = 24 + 56 + 111;

	var shouldIGetAHaircut = true;
	var haircut = document.getElementById("haircut");

	if (shouldIGetAHaircut) {
		haircut.innerHTML = "Yes, you should!";
	}

	

}
