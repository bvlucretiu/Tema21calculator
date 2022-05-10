let inputA = document.querySelector('#number1');
let inputB = document.querySelector('#number2');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let devide = document.querySelector('#devide');
let result = document.querySelector('.result');

add.addEventListener('click', () => {
    let number1 = Number(inputA.value);
    let number2 = Number(inputB.value);
    let sum = number1 + number2;
    result.innerHTML = `${number1} + ${number2} = ${sum}`;
});

subtract.addEventListener('click', () => {
    let number1 = Number(inputA.value);
    let number2 = Number(inputB.value);
    let decrease = number1 - number2;
    result.innerHTML = `${number1} - ${number2} = ${decrease}`;
});

multiply.addEventListener('click', () => {
    let number1 = Number(inputA.value);
    let number2 = Number(inputB.value);
    let multiplication = number1 * number2;
    result.innerHTML = `${number1} * ${number2} =  ${multiplication}`;
});

devide.addEventListener('click', () => {
    let number1 = Number(inputA.value);
    let number2 = Number(inputB.value);
    let division = number1 / number2;
    result.innerHTML = `${number1} / ${number2} = ${division}`;
});

inputA.addEventListener('input', (event) => {
    let value = event.target.value;
    let isNumber = !isNaN(value);
    if(!isNumber) {
        result.innerHTML = `Trebuie introduse doar cifre iar campul A contine litere!`;
    } else {
        result.innerHTML = '';
    }
});

inputB.addEventListener('input', (event) => {
    let value = event.target.value;
    let isNumber = !isNaN(value);
    if(!isNumber) {
        result.innerHTML = `Trebuie introduse doar cifre iar campul B contine litere!`;
        }else{
            result.innerHTML = '';
    }
});
