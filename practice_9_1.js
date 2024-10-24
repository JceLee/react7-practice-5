const y = 10;

function outer() {
  const y = 20;
  function inner() {
    console.log(y);  // Q1. 어떤 값을 출력할까요?
  }
  inner();
}

function anotherInner() {
  console.log(y);  // Q2. 어떤 값을 출력할까요?
}

outer();
anotherInner();