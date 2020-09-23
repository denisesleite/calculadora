window.addEventListener('input', () => {
  let inputA = parseInt(document.querySelector("#first_number").value, 10);
  let inputB = parseInt(document.querySelector("#second_number").value, 10);

  let sum = document.querySelector("#sum");
  sum.value = sumA_B(inputA, inputB);

  let subtraction1 = document.querySelector("#subtraction1");
  subtraction1.value = subtractionA_B(inputA, inputB);

  let subtraction2 = document.querySelector("#subtraction2");
  subtraction2.value = subtractionB_A(inputB, inputA);
  
  let multiplication = document.querySelector("#multiplication");
  multiplication.value = multiplicationA_B(inputA, inputB);

  let division1 = document.querySelector("#division1");
  division1.value = divisionA_B(inputA, inputB);

  let division2 = document.querySelector("#division2");
  division2.value = divisionB_A(inputB, inputA);

  let square1 = document.querySelector("#squareA");
  square1.value = squareA(inputA);

  let square2 = document.querySelector("#squareB");
  square2.value = squareB(inputB);

  let dividersA = document.querySelector("#dividersA");
  dividersA.value = dividers(inputA);

  let dividersB = document.querySelector("#dividersB");
  dividersB.value = dividers(inputB);

  let factorialA = document.querySelector("#factorialA");
  factorialA.value = factorial(inputA);

  let factorialB = document.querySelector("#factorialB");
  factorialB.value = factorial(inputB);
  
});

const sumA_B = (a, b) => {
  return a + b;
}

const subtractionA_B = (a, b) => {
  return a - b;
}

const subtractionB_A = (b, a) => {
  return b - a;
}

const multiplicationA_B = (a, b) => {
  return a * b;
}

const divisionA_B = (a, b) => {
  return a / b;
}

const divisionB_A = (b, a) => {
  return b / a;
}

const squareA = (a) => {
  return a ** 2;
}

const squareB = (b) => {
  return b ** 2;
}

const dividers = (number) => {
  const dividersArray = [];
  let quantity = 0;
  for(let i = 1; i <= number; i++){
    if(number % i === 0){
      dividersArray.push(' ' + i);

      quantity = parseInt(dividersArray.length);
    }
  }
  return dividersArray + ' ' + '(' + quantity + ')';
}

const factorial = (number) => {
  let factorial = 1;

  for (let i = number; i > 1 ; i--) {
    factorial *= i;
  }
  
  return factorial;
}


