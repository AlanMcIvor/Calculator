
// global variables
let operator = "";
let currentValue = "";
let previousValue = "";

// get components from HTMl and bring them into JavaScript
let display = document.querySelector('.calculator_display');
let currentDisplay = document.querySelector('.current');
let previousDisplay = document.querySelector('.previous');
let numbers = document.querySelectorAll('.number');
let operators  = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let equals = document.querySelector('.equal');


// get the value from each button with teh class of number (0 - 9) and pass it to the handleNum function
let getNum = numbers.forEach((num) => {
    num.addEventListener('click', function(e){
     handleNum(e.target.textContent )

        })
})

// update display with the current value
function handleNum(num){
    currentValue += num;
    currentDisplay.textContent += num;
    console.log(currentValue)

}


// get the value from each button with a class of operator (+ - * / /) and display it in the calculator screen
let getOperator = operators.forEach((oper) => {
    oper.addEventListener('click', function(e){
       handleOperator(e.target.textContent);
        previousDisplay.textContent = previousValue + " " + operator;
        currentDisplay.textContent = "";
    //   
     })
})


function handleOperator(oper){
 operator = oper;
 previousValue = currentValue;
 currentValue = "";
    console.log(oper )
}

// calculate function

equals.addEventListener('click', function(){
    calculate();
    previousDisplay.textContent = "";
    currentDisplay.textContent = previousValue;
});

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;
    }else if(operator === "x"){
        previousValue *= currentValue;
    }else{
        previousValue /= currentValue;
    }

   previousValue = previousValue.toString();
   currentValue = previousValue.toString();
}




// clear button
clear.addEventListener('click', function(){
    currentDisplay.innerHTML = "";
    previousDisplay.innerHTML = "";
    operator = "";
    currentValue = "";
    previousValue = "";
})

