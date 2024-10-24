const globalVar = 'global';

function outerFunction() {
  const outerVar = 'outer';
  
  function innerFunction() {
    const innerVar = 'inner';
    console.log(globalVar);  // Q1. 어떤 출력 값을 가질까요? 
    console.log(outerVar);   // Q2. 어떤 출력 값을 가질까요? 
    console.log(innerVar);   // Q3. 어떤 출력 값을 가질까요? 
  }
  
  innerFunction();
}

outerFunction();
