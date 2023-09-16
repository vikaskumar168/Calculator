let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let prevValue = 0;
function appendToDisplay(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    // Handle operators
    setOperator(value);
    // Display the equation (number + operator)
    display.innerText = prevValue + currentOperator;
  } else {
    // Append numbers and decimal point
    if (currentInput === '0') {
      currentInput = value;  // Replace '0' with the new value
    } else {
      currentInput += value;
    }
    display.innerText = prevValue + currentOperator + currentInput;
  }
}






function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  prevValue = 0;
  display.innerText = '0';
}

function setOperator(operator) {
  currentOperator = operator;
  if (currentInput !== '') {
    prevValue = parseFloat(currentInput);
    currentInput = '';
  }
}

function calculateResult() {
  if (currentInput === '') return;

  const currentValue = parseFloat(currentInput);

  switch (currentOperator) {
    case '+':
      prevValue += currentValue;
      break;
    case '-':
      prevValue -= currentValue;
      break;
    case '*':
      prevValue *= currentValue;
      break;
    case '/':
      if (currentValue !== 0) {
        prevValue /= currentValue;
      } else {
        alert('Error: Division by zero');
        clearDisplay();
        return;
      }
      break;
    default:
      prevValue = currentValue;
      break;
  }

  display.innerText = prevValue;
  currentInput = '';
  currentOperator = '';
}
