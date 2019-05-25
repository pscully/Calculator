const h1 = 'The Calculator';

const title = title => {
  let h1 = document.getElementById('title');
  h1.innerHTML = title;
};

const display = () => {
  const digits = 9;
  let display = document.getElementById('display');
  for (let i = 1; i <= digits; i++) {
    let displayDigit = document.createElement('div');
    displayDigit.classList.add('digit');
    displayDigit.setAttribute('id', `digit-${i}`);
    display.appendChild(displayDigit);
  }
};

const buttons = () => {
  const buttonAmount = 12;
  let buttons = document.getElementById('buttons');
  for (let i = 1; i <= buttonAmount; i++) {}
};

title(h1);
display();

class calculator {
  $(operation, num1, num2) {
    return operation(num1, num2);
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

const c = new calculator();

let answer = c.$(c.multiply, 2, 4);

console.log(answer);
