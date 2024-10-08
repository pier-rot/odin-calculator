// Basic operation functions
function add(n1, n2) {
	return (+n1) + (+n2);
}

function subtract(n1, n2) {
	return (+n1) - (+n2);
}

function multiply(n1, n2) {
	return (+n1) * (+n2);
}

function divide(n1, n2) {
	// 0 division return 'Infinity'
	return (+n1) / (+n2);
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
	let inputOperatorSymbol;
	if (inputOperator == add) {
		inputOperatorSymbol = "+";
	} else if (inputOperator == subtract) {
		inputOperatorSymbol = "-";
	} else if (inputOperator == divide) {
		inputOperatorSymbol = "÷";
	} else if (inputOperator == multiply) {
		inputOperatorSymbol = "·";
	} else {
		inputOperatorSymbol = "";
	}

	operatorNode.innerText = inputOperatorSymbol;
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

function getFuncFromOperation(operation) {
	if (operation == "add") {
		return add;
	} else if (operation == "subtract") {
		return subtract;
	} else if (operation == "divide") {
		return divide;
	} else if (operation == "multiply") {
		return multiply;
	} else {
		return () => {};
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
const buttons = Array.from(selectNodeAll("button"));

// Global variables
let inputNumber1 = null,
inputNumber2 = null,
inputOperator = null,
inputSpecial = null,
outputResult = null;

// Event Handlers
function handleDigitInput(event) {
	const digit = event.currentTarget.innerText;
	console.log(digit);
	if (isNull(inputOperator)) {
		if (isNull(inputNumber1)) {
			inputNumber1 = digit;
			// outputResult = null;
		} else {
			inputNumber1 += digit;
		}
	} else {
		if (isNull(inputNumber2)) {
			inputNumber2 = digit;
		} else {
			inputNumber2 += digit;
		}
	}

	updateDisplay();
}

function handleSpecialInput(event) {
	const eventTartgetId = event.currentTarget.getAttribute("id");
	if (eventTartgetId == "clear") {
		inputNumber1 = null,
		inputNumber2 = null,
		inputOperator = null,
		inputSpecial = null,
		outputResult = null;
	} else if (eventTartgetId == "equal"){
		if (isNull(inputNumber1) && (isNull(inputNumber2) || isNull(inputOperator))) {
			outputResult = null;
		} else if (!isNull(inputNumber1) && isNull(inputNumber2)) {
			outputResult = inputNumber1;
		} else {
			outputResult = operate(inputNumber1,inputNumber2,inputOperator);
			inputNumber1 = null;
			inputNumber2 = null;
			inputOperator = null;
		}
	}

	updateDisplay();
}

function handleOperatorInput(event) {
	const operation = event.currentTarget.getAttribute("id");
	const operationFunc = getFuncFromOperation(operation);
	console.log(operationFunc);
	
	if (!isNull(inputNumber1)) {
		if (isNull(inputOperator)) {
			inputOperator = operationFunc;
		} else if (operationFunc == subtract) {
			if (inputOperator == add) {
				inputOperator = subtract;
			} else if (inputOperator == subtract) {
				inputOperator == add;
			} else {
				inputNumber1 = `${0- (+inputNumber1)}`;
			}
		} else {
			if (isNull(inputNumber2)) {
				inputOperator = operationFunc;
			} else {
				outputResult = operate(inputNumber1,inputNumber2,inputOperator);
				inputNumber1 = outputResult;
				inputNumber2 = null;
				inputOperator = operationFunc;
			}
		}
	} else {
		if (isNull(outputResult)) {
			
		} else {
			inputNumber1 = outputResult;
			outputResult = null;
			inputOperator = operationFunc;
		}
	}


	updateDisplay();
}

// Add listeners to buttons
for (let i = 0; i < buttons.length; i++){
	if (buttons[i].matches(".digit")) {
		buttons[i].addEventListener("click", handleDigitInput);

	} else if (buttons[i].matches(".operator")) {
		buttons[i].addEventListener("click", handleOperatorInput);
		
	} else if (buttons[i].matches(".special")) {
		buttons[i].addEventListener("click", handleSpecialInput);
	}
}