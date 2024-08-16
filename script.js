// Basic operation functions
function add(n1, n2) {
	return n1 + n2;
}

function subtract(n1, n2) {
	return n1 - n2;
}

function multiply(n1, n2) {
	return n1 * n2;
}

function divide(n1, n2) {
	// 0 division return 'Infinity'
	return n1 / n2;
}

// Inputs
let inputNumber1, inputNumber2, inputOperator;

// Operate function
function operate(n1, n2, operator) {
	operator(n1,n2);
}
