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

// Inputs & outputs
let inputNumber1, inputNumber2, inputOperator, inputSpecial, outputResult;

// Operate function
function operate(n1, n2, operator) {
	return operator(n1,n2);
}

// Display function to update the content of the calculator
function updateDisplay() {

}

function updateDisplayNumber1 (){

}

function updateDisplayNumber2 (){

}

function updateDisplayResult (){

}

function updateDisplayOperator (){

}

// Helper functions

// Check whether element is null with strict equality
function isNull(element, strict=true) {
	if (strict) {
		return (element === null);
	} else {
		return (element == null);
	}
}

// HTML Node selection

function selectNode(nodeHTML) {
	return document.querySelector(nodeHTML);
}

const number1Node = selectNode("#number1"),
	number2Node = selectNode("#number2"),
	operatorNode = selectNode("#operator"),
	equalSignNode = selectNode("#equal-sign"),
	resultNode = selectNode("#result");	