//TASK 1 
// function removeChar(str){
//     if (str.length >2){
//         return str.slice(1, -1);
//     }
//    return str;
//    };
   
//TASK2 Detect Pangram
// function isPangram(string){
//     let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
//           'v', 'w', 'x', 'y', 'z'];
//       string = string.toLowerCase();
//       for(let i = 0; i < abc.length; i++) { if ((string.indexOf(abc[i])  === -1)) return false; }
//       return true;
//   }

// function findUniq(arr) {
//     var result = null, n = arr.length;
  
//     for (let i = 0; i < n; i++) {
//       for (let v = i; v < n; v++) {
//         if (arr[i] != arr[v]) {
//           result = arr[i];
//         }
//       }
//     }
  
//     return result;
//   }
//   console.log(findUniq([ 0, 1, 0 ]), 1);

//MIRRORS MIRRORS
// function mirror(data) {
//   let sortedArr = data.slice().sort((a,b) => a - b);
//   let reversedArr = data.slice().sort((a,b) => b - a);
//   return sortedArr.concat(reversedArr.slice(1));
// }

// function greet(name) {
//   return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`;
// }

// console.log(greet(Roma));

const makeDish = function(sheffName, dish) {
  console.log(`${sheffName} gotovit ${dish}`);
};
const makeSheff = function(name) {
  return function(dish) {
    console.log(`${name} gotovit ${dish}`);
  };
};

const mango = makeSheff("Mango");
const poly = makeSheff("Poly");

mango('chuletas');
poly('tea');
poly('golubtsy');
mango('borshch');