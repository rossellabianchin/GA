function helloWorld () {
	console.log("Hello Rossella!");
}

helloWorld();

//function with arguments

function addAndPrint(num1,num2) {
	var sum = num1 + num2;
	console.log(sum);
}


addAndPrint(1, 5);

//javascript concatenation 

function multipleAndPrint (num3, num4) {
	var multiplication = num3 * num4;
	console.log("The multiplication is:" + multiplication)
}

multipleAndPrint(2, 3);

// anonimous function
//returning a value with the word 'return'
var division = function(num5, num6) {
	return num5 / num6
}

console.log(division(10, 5));


function nameAndAge (name, age) {
	return name + "is" + "" + age;

}

console.log(nameAndAge("Rossella", 25));
