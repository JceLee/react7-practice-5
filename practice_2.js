const restaurant = {
    name: 'Pizza Place',
    order() {
      console.log(`${this.name}에서 피자를 주문했습니다.`);
    }
  };
restaurant.order();

// Q1. 여기에서는 콘솔에 뭐라고 찍힐까요? 

const placeOrder = restaurant.order;
placeOrder();

// Q2. 여기에서는 콘솔에 뭐라고 찍힐까요?

