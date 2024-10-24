function Animal(type) {
    this.type = type;
    this.describe = function() {
      console.log(`이 동물은 ${this.type}입니다.`);
    };
}

const tiger = new Animal();
tiger.describe();
// Q1. tiger.describe() 를 했을 때, 어떤 콘솔이 찍히게 될까요?


// Q2. tiger.describe()를 실행시켰을 때, '이 동물은 호랑이입니다.' 라고 출력이 되게끔 해주세요. 

  