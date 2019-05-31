// Some config settings

const config = {
  allowedDigits: 9,
  h1: 'The BEST Calculator' // Call it whatever you want
};

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

  updateDisplay(entered) {
    for (let i = 0; i < entered.length; i++) {
      let digitSpace = get(`digit-${i}`);
      digitSpace.innerText = entered[i];
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

// Let's store some data

let currentValue = [];
let prevValue = 0;
let answer = '';
let answerArray = [];
let operation = '';

// Create helper to turn array of strings into a number

function numberFromArray(array) {
  if (array.length === 0) {
    return;
  }
  let string = array.join('');
  let number = parseInt(string, 10);
  return number;
}

// Create some UI

const Title = title => {
  let h1 = document.getElementById('title__text');
  h1.innerHTML = title;
};

const Display = () => {
  let display = document.getElementById('display');
  for (let i = 0; i < 9; i++) {
    let displayDigit = document.createElement('div');
    displayDigit.classList.add('digit');
    displayDigit.setAttribute('id', `digit-${i}`);
    display.appendChild(displayDigit);
  }
};

const Buttons = () => {
  let buttonsArea = document.getElementById('buttons__digits');
  for (let i = 0; i < 12; i++) {
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');
    buttonDiv.setAttribute('id', `button-${i}`);
    buttonDiv.setAttribute('role', 'button');
    if (i === 10) {
      buttonDiv.innerText = 'Dark Mode';
    } else if (i === 11) {
      buttonDiv.innerText = 'Clear';
    } else {
      buttonDiv.innerText = i;
    }
    buttonsArea.appendChild(buttonDiv);
  }
};

// Because I hate typing out document.getElementById

function get(variable) {
  return document.getElementById(`${variable}`);
}

let currentValueSpace = get('current-value');
let previousValueSpace = get('previous-value');
let answerSpace = get('answer-value');

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

// Add event listeners to buttons immediately after we create them

(function buttonActions(window, document, undefined) {
  // Browser feature test
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

// Create a new calculator

const c = new Calculator();
