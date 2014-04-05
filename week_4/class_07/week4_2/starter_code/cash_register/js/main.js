
var d = document; //questo mi aiuta per accelerare la scrittura
var entryField = d.getElementById("newEntry"); //this defines entryField come elemento newEntry(preso dal codice HTML)
var total = 0; //questo dice che il totale deve partire da 0


d.getElementById("entry").onsubmit = addNewEntry // questo dice che quando aggiungo un entry il form deve "addNewEntry" 

function addNewEntry () { //qui viene definita la funzione addNewEntry

	var entry = parseFloat(entryField.value); // trasforma il valore inserito in numero
	total += entry; // per sommare vari numeri

	d.getElementById("total").innerHTML = convertCurrency(total); //questo applica la funzione convertCurrency spiegata sotto


	var entryValue = convertCurrency(entryField.value);
	var entryRow = "<tr><td></td><td>" + entryValue +"</td></tr>";

	d.getElementById("entries").innerHTML += entryRow;

	clearInput(); //questo svuota la casella del total dopo ogni aggiunta, la funzione è sotto

	return false; // porta il risultato sulla pagina, perche il form di default invia il risultato da un'altra parte

}

	var clearInput = function () { //questo svuota la casella del total dopo ogni aggiunta
		entryField.value ="";
	}

	function convertCurrency(entryValue) { //questo definisce la funzione convertCurrency
		var currency = parseFloat(entryValue);
		currency = currency.toFixed(2); // mette due decimale dopo il punto es:£10.25
		currency = "£" + currency;

		return currency;
	}





