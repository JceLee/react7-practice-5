function outerFunction() {
    var outerVar = 'I am outside!';
    
    function innerFunction() {
      var innerVar = 'I am inside!';
      console.log(outerVar);  // Q1. 어떤 값이 출력될까요?
    }
    
    innerFunction();
    console.log(innerVar);  // Q2. 어떤 값이 출력될까요?
}

outerFunction();
  