//Setting the DOM
const numbers = document.querySelectorAll('#number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('#operator');
const result = document.querySelector('.result');
const clear = document.querySelector('.allClear');
const deleteOne = document.querySelector('.clear');
const dot = document.querySelector('.dot');


//Deletes one number from the display's text content
function deleting () {
  display.textContent = display.textContent.substring(0,display.textContent.length-1);
  previousNumber='';
};
deleteOne.addEventListener('click',deleting);

//Clears the calculator
function clearing () {
  display.textContent='';
  previousNumber='';
  currentNumber=''; 
  operator='';
}
clear.addEventListener('click', clearing);

//Adds a dot the number displayed
function addingDot () {
  if (display.textContent==='') return display.textContent='0';
  if (display.textContent.includes('.')) return;

  display.textContent+= '.';
}
dot.addEventListener('click',addingDot);

//Adds to the display each time a number is pressed 
let previousNumber='';
let currentNumber='';
let operator='';

numbers.forEach(element =>{
  element.addEventListener('click',()=>{
    if (display.textContent.length>9) return display.textContent="TOO MUCH!!";
    display.textContent+= element.textContent; 
    if (currentNumber!==''){
      display.textContent='';
      currentNumber='';
      display.textContent+= element.textContent;
    } 
  })
});
//Stores the display value and resets it, also stores what .operator button was pressed
operators.forEach(element=>{
  element.addEventListener('click',()=>{

 if (operator==='') {
   operator = element.textContent;
 }
 if (previousNumber==='') {
   previousNumber= display.textContent;
   display.textContent='';
 }
 else if (currentNumber==='' && operator!=='') {
   currentNumber= display.textContent;
   display.textContent= operate(operator,previousNumber,currentNumber);
   if (display.textContent.length>9) return display.textContent="TOO MUCH!!";
   previousNumber = display.textContent;
   operator=element.textContent;

 };
})
})
//Makes the operation happen 
result.addEventListener('click', ()=>{
  if(currentNumber===''){
    currentNumber= display.textContent;
  }
  display.textContent= operate(operator,previousNumber,currentNumber);
  if (display.textContent.length>9) return display.textContent="TOO MUCH!!";
  previousNumber='';
  currentNumber= '';
  operator='';
 
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
        case 'x':
          return multiply(a, b)
        case '/':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
      }
};




