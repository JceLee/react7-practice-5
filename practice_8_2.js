let a = 10;

function firstFunction() {
  let a = 20;
  
  function secondFunction() {
    let a = 30;
    console.log(a);  // Q1. 어떤 값이 출력이 될까요?
  }
  
  secondFunction();
  console.log(a);  // Q2. 어떤 값이 출력이 될까요?
}

firstFunction();
console.log(a);  // Q3. 어떤 값이 출력이 될까요?
