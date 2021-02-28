//selecting components
const buttonsArea = document.querySelector('.calculator__buttons-area');
const calculatorDisplay = document.querySelector('.calculator__display'); 
const operators = ['%','CE','C','←','1/x','x²','2√x','/','-','+','='];


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

const sum = (number1,number2) => {
   let result =  number1 + number2;
};

const minus = (number1,number2) => {
    let result = number1 - number2;
};

const square = (number) => {
    let result = Math.sqrt(number);
}

const doOperation = (operationText) => {
    switch(operationText){
        case operators[0]:
        break;
        
        case operators[1]:
        break;
        
        case operators[2]:
            clearDisplay();
        break;

        case operators[3]:
           removeLastDigit(calculatorDisplay.innerText);
        break;

        case operators[4]:
        break;

        case operators[5]:
        break;

        case operators[6]:
        break;

        case operators[7]:
        break;

        case operators[8]:
        break;

        case operators[9]:
        break;

        case operators[10]:
        break;

        case operators[11]:
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
        else if (button.classList[i].includes('button--operator')) {
            doOperation(button.innerText);
        }
        
    }

});
