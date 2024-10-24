const y = 'global';

function outer() {
  const y = 'outer';
  return function inner() {
    console.log(y);  
  };
}

const myInner = outer();
myInner();  // Q. 어떤 값이 콘솔로 찍힐까요? outer vs global
