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

// Operate function
function operate(n1, n2, operator) {
	return operator(n1,n2);
}

// Display function to update the content of the calculator
function updateDisplay() {
	updateDisplayNumber1();
	updateDisplayNumber2();
	updateDisplayOperator();
	updateDisplayResult();
}

function updateDisplayNumber1 (){
	number1Node.innerText = inputNumber1;
}

function updateDisplayNumber2 (){
	number2Node.innerText = inputNumber2;
}

function updateDisplayResult (){
	resultNode.innerText = outputResult;
}

function updateDisplayOperator (){
	operatorNode.innerText = inputOperator;
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

// Select one node
function selectNode(nodeHTML) {
	return document.querySelector(nodeHTML);
}

const number1Node = selectNode("#number1"),
	number2Node = selectNode("#number2"),
	operatorNode = selectNode("#operator"),
	equalSignNode = selectNode("#equal-sign"),
	resultNode = selectNode("#result");

// Select all nodes of type 'nodeHTML'
function selectNodeAll(nodeHTML) {
	return document.querySelectorAll(nodeHTML);
}

// NodeList of all the buttons
const buttons = selectNodeAll("button");

// Global variables
let inputNumber1 = null,
inputNumber2 = null,
inputOperator = null,
inputSpecial = null,
outputResult = null;