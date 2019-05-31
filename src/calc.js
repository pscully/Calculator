import { Title, Display, Buttons } from './scripts/ui';
import { config } from './ config/config';
import { get } from './scripts/helpers';

// Add a title to the page

if (config.h1 === '') {
  Title('The Calculator');
} else {
  Title(config.h1);
}

// Add a screen to show numbers

Display();

// Add some buttons to use

Buttons();

// Create a calculator class

class Calculator {
  constructor() {
    this.currentValue = currentValue;
    this.prevValue = prevValue;
    this.answer = answer;
  }

  clear() {
    this.resetDisplay();
    currentValue = [];
    prevValue = '';
    operation = '';
  }

  updateDisplay(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      let digitSpace = get(`digit-${i}`);
      digitSpace.innerText = arrayOfNumbers[i];
    }
  }

  resetDisplay() {
    for (let i = 0; i < config.allowedDigits; i++) {
      let digit = document.querySelector(`#digit-${i}`);
      digit.innerText = '';
    }
    return;
  }

  compute(num1, num2, operation) {
    if (operation === 'add') {
      return this.add(num1, num2);
    } else if (operation === 'subtract') {
      return this.subtract(num1, num2);
    } else if (operation === 'multiply') {
      return this.multiply(num1, num2);
    } else if (operation === 'divide') {
      return this.divide(num1, num2);
    }
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

let currentValue = [];
let prevValue = 0;
let answer = '';
let answerArray = [];
let operation = '';

// Create a new calculator

const c = new Calculator();

// Create helper to turn array into number

function numberFromArray(array) {
  if (array.length === 0) {
    return;
  }
  let theString = array.join('');
  let theNumber = parseInt(theString, 10);
  return theNumber;
}

// Add event listeners to buttons

(function buttonActions(window, document, undefined) {
  // Feature test
  if (!('localStorage' in window) || !('querySelector' in document)) return;

  let buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        let clicked = e.target.textContent;
        switch (clicked) {
          case 'Dark Mode':
            document.documentElement.classList.toggle('night-mode');
            break;
          case '+':
            operation = this.id;
            if (currentValue.length > 0) {
              prevValue = numberFromArray(currentValue);
              currentValue = [];
              c.resetDisplay();
            } else {
              alert('You need to enter some numbers first.');
            }
            break;
          case '-':
            operation = this.id;
            if (currentValue.length > 0) {
              prevValue = numberFromArray(currentValue);
              currentValue = [];
              c.resetDisplay();
            } else {
              alert('You need to enter some numbers first.');
            }
            break;
          case 'x':
            operation = this.id;
            if (currentValue.length > 0) {
              prevValue = numberFromArray(currentValue);
              currentValue = [];
              c.resetDisplay();
            } else {
              alert('You need to enter some numbers first.');
            }
            break;
          case '/':
            operation = this.id;
            if (currentValue.length > 0) {
              prevValue = numberFromArray(currentValue);
              currentValue = [];
              c.resetDisplay();
            } else {
              alert('You need to enter some numbers first.');
            }
            break;
          case '=':
            if (operation === '') {
              return;
            } else {
              let secondOperand = numberFromArray(currentValue);
              answer = c
                .compute(prevValue, secondOperand, operation)
                .toString();
              answerArray = answer.split('');
              c.resetDisplay();
              c.updateDisplay(answerArray);
            }
            break;
          case 'Clear':
            c.clear();
            break;
          default:
            currentValue.push(clicked);
            c.updateDisplay(currentValue);
            break;
        }
      },
      false
    );
  });
})(window, document);

let currentValueSpace = get('current-value');
let previousValueSpace = get('previous-value');
let answerSpace = get('answer-value');
