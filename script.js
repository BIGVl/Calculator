//Settings the DOM
const numbers = Array.from(document.querySelectorAll('#number'));
const display = document.querySelector('.display');
const operators = Array.from(document.querySelectorAll('#operator'));
const result = document.querySelector('.result');



//Adds to the display each time a number is pressed 
let firstNumber;
let secondNumber;
let operand;

numbers.forEach(element =>{
  element.addEventListener('click',()=>{
    display.textContent+= element.textContent;
  })
});
//Stores the display value and resets it, also stores what button was pressed
operators.forEach(element=>{
  element.addEventListener('click',()=>{
    firstNumber = display.textContent;
    firstNumber=parseInt(firstNumber);
    display.textContent='';  
    if(element.className='add') {
      operand = '+';
    }
    else if (element.className='substract') {
      operand = '-';
    }
    else if (element.className='multiply') {
      operand = '*';
    }
    else if (element.className='divide') {
      operand = '/';
    };
  })
})
//Makes the operation happen 
result.addEventListener('click', ()=>{
  secondNumber= display.textContent;
  secondNumber=parseInt(secondNumber);
  operate(operand,firstNumber,secondNumber);
  console.log(operate(operand,firstNumber,secondNumber));
})


//Functions that do simple math
function add (a, b) {
    return a+b;
    
};

function substract (a, b) {
    return a-b;
};

function multiply (a, b) {
    return a*b;
};

function divide (a, b) {
    return a/b;
};
//Make any of the above operation happen by calling them based on the operator
function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
          return add(a, b)
        case '-':
          return substract(a, b)
        case '*':
          return multiply(a, b)
        case '/':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
      }
};




