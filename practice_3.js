function introduce() {
    console.log(`Meow! I am ${this.name}`);
}

const cat = { name: 'Whiskers' };

introduce();
// Q1. 여기에서는 콘솔에 뭐라고 찍힐까요? 
introduce.call(cat);
// Q2. 여기에서는 콘솔에 뭐라고 찍힐까요?
introduce.apply(cat);
// Q3. 여기에서는 콘솔에 뭐라고 찍힐까요?

const boundIntroduce = introduce.bind(cat);
boundIntroduce();
// Q4. 여기에서는 콘솔에 뭐라고 찍힐까요?