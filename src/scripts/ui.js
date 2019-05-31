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

export { Title, Display, Buttons };
