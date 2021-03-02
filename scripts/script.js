//selecting components
const buttonsArea = document.querySelector('.calculator__buttons-area');
const calculatorDisplay = document.querySelector('.calculator__display'); 
const operators = ['%','CE','C','←','1/x','x²','2√x','/','-','+','='];
let number1, number2;
let flagOp ;

const clearDisplay = () => {
    calculatorDisplay.innerText = '';
};

const removeLastDigit = (numberOnDisplay) =>  {
    const newNumber = [];
    for (let i = 0; i < [...numberOnDisplay].length;i++){
        if ( i !== [...numberOnDisplay].length -1){
            newNumber.push([...numberOnDisplay][i]);
        }
    }
    clearDisplay();
    newNumber.forEach((number) => {
        calculatorDisplay.innerText += number;
    });
}

const setDisplayNumber  = (number) => {
    calculatorDisplay.innerText = number;
}

const sum = (number1,number2) => {
   let result =  number1 + number2;
   return result;
};

const minus = (number1,number2) => {
    let result = number1 - number2;
    return result;
};

const divide = (number1 = 1,number2) => {
    let result = number1 / number2;
    return result;
};

const square = (number) => {
    let result = Math.pow(number,2);
    return result;
};

const squareRoot = (number) => {
    let result = Math.sqrt(number);
    return result;
};

const doOperation = (operationText) => {
    
    switch(operationText){
        case operators[0]:
        break;
        
        case operators[1]:
            clearDisplay();
        break;
        
        case operators[2]:
            clearDisplay();
        break;

        case operators[3]:
           removeLastDigit(calculatorDisplay.innerText);
        break;

        case operators[4]:
            number1 = Number.parseFloat(calculatorDisplay.innerHTML);
            clearDisplay();
            flagOp = "fracc";
            setDisplayNumber(divide(undefined,number1));
        break;

        case operators[5]:
            number1 = Number.parseFloat(calculatorDisplay.innerHTML);
            clearDisplay();
            flagOp = "pow";
            setDisplayNumber(square(number1));
        break;

        case operators[6]:
            number1 = Number.parseFloat(calculatorDisplay.innerHTML);
            clearDisplay();
            flagOp = "root";
            setDisplayNumber(squareRoot(number1));
        break;

        case operators[7]:
            number1 = Number.parseFloat(calculatorDisplay.innerHTML);
            clearDisplay();
            flagOp = "div";
        break;

        case operators[8]:
            number1 = Number.parseFloat(calculatorDisplay.innerText);
            clearDisplay();
            flagOp = "min";
        break;

        case operators[9]:
            number1 = Number.parseFloat(calculatorDisplay.innerText);
            clearDisplay();
            flagOp = "sum";
        break;

        case operators[10]:
            number2 = Number.parseFloat(calculatorDisplay.innerText);
            if(flagOp === "sum"){
                setDisplayNumber(sum(number1,number2));
                
            }
            else if (flagOp === "min"){
                setDisplayNumber(minus(number1,number2));
            }

            else if (flagOp === "div"){
                setDisplayNumber(divide(number1,number2));
            }

            else if (flagOp === "root"){
                number2 = undefined; 
            }

            else if (flagOp === "pow"){
                number2 = undefined; 
            }

            else if (flagOp === "min"){}

            else if (flagOp === "min"){}

            else if (flagOp === "min"){}


            flagOp = undefined;

        break;
    }
};

buttonsArea.addEventListener('click', function (e) {
    //console.log(e.target.innerText);
    const button = e.target;
    
    for (let i = 0; i < button.classList.length; i++) {
        if (button.classList[i].includes('button--number')) {
            if (calculatorDisplay.innerText.length < 16) {
                if(button.innerText === '+/-'){
                    if (calculatorDisplay.innerHTML !== '0') {
                        let numberOnDisplay = Number.parseFloat(calculatorDisplay.innerHTML);
                        numberOnDisplay = numberOnDisplay * -1;
                        calculatorDisplay.innerText = numberOnDisplay;
                        break;
                    }
                }
                calculatorDisplay.innerText += button.innerText;
            }
        }
        else if (button.classList[i].includes('button--operator') || button.classList[i].includes('button--equal') ) {
            //console.log(button.innerText);
            doOperation(button.innerText);
        }
        
    }

});
