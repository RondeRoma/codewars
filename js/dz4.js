// // Write code under this line
// const addIndex = (element, index) => element + index;// Write code under this line
// const subIndex = (element, index) => element - index;
  
// function mapArray(array, cb) {
//   'use strict';
// // Write code under this line
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]





// //#2


// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//    if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]








// TASK #3
// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;


// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   console.log(accum);
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//     console.log(accum);
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//     console.log(accum);
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value; // Write code in this line
//     },
//     showOrders() {
//       this.return orders; // Write code in this line
//     },
//     addOrder(cost, order) {
//       this.balance -= cost; // Write code in this line
//       this.orders.push(order); // Write code in this line
//     },
//   };
//   const copyAccount =  Object.assign({},account);
//   copyAccount.orders = [...account.orders];
  // копируем для автотестов ссылочные типы
  
  /*
  account.changeDiscount(0.15);
  //console.log(account.discount); // 0.15
  
  //console.log(account.showOrders()); 
  // ['order-1', 'order-2', 'order-3']
  
  account.addOrder(5000, 'order-4');
  //console.log(account.balance); // 19000
  
  //console.log(account.showOrders());
  // ['order-1', 'order-2', 'order-3', 'order-4']
  */