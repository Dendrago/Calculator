const txtNumber1 = document.querySelector('#txtNumber1');
const txtNumber2 = document.querySelector('#txtNumber2');
const txtOperator = document.querySelector('#txtOperator');

let operatorSet;
let operator;
let number1;
let number2;

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.number').forEach((element) => element.addEventListener('click', numberClick));
	
	document.querySelectorAll('.operator').forEach((element) => element.addEventListener('click', operatorClick));

	document.querySelector('#equal').addEventListener('click', equalsClick);
	document.querySelector('#clear').addEventListener('click', clearClick);

	clearClick();
});

function numberClick() {
	if (number2 !== '' && !operatorSet) return;

	number1 = number1 + this.getAttribute('data-number');

	txtNumber1.innerText = number1;
}

function operatorClick() {
	if (operatorSet && number2 !== '') {
		calculate();
	}

	if (number1 !== '' || number2 !== '') {
		operator = this.getAttribute('data-operator');
		operatorSet = true;

		txtOperator.innerText = operator;

		if (number2 === '') {
			txtNumber1.innerText = ' ';
			txtNumber2.innerText = number1;
			number2 = number1;
			number1 = '';
		}
	}
}

function equalsClick() {
	if (number1 === '' || number2 === '' || operator === '') {
		if(number1 === '' && operator !== '' && number2 !== '') {
			clearClick();
			txtNumber1.innerText = 'Err';
		}
		return;
	}

	calculate();
}

function clearClick() {
	number1 = '';
	number2 = '';
	operator = '';
	operatorSet = false;
	equalPressed = false;

	txtNumber1.innerText = ' ';
	txtNumber2.innerText = ' ';
	txtOperator.innerText = ' ';
}

function calculate() {
	let result;

	switch (operator) {
		case '+':
			result = parseInt(number2) + parseInt(number1);
			break;
		case '-':
			result = parseInt(number2) - parseInt(number1);
			break;
		case '*':
			result = parseInt(number2) * parseInt(number1);
			break;
		case '/':
			result = Math.floor(parseInt(number2) / parseInt(number1));
			break;
	}

	txtNumber2.innerText = result;
	number2 = result;
	number1 = '';
	operator = '';
	operatorSet = false;

	txtNumber1.innerText = ' ';
	txtOperator.innerText = ' ';
}