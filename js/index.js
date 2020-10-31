//TASK 1 ----------------------------------------------------------------------------
// function removeChar(str){
//     if (str.length >2){
//         return str.slice(1, -1);
//     }
//    return str;
//    };
   
//TASK2 Detect Pangram --------------------------------------------------------------------
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

//MIRRORS MIRRORS --------------------------------------------------------------------------------
// function mirror(data) {
//   let sortedArr = data.slice().sort((a,b) => a - b);
//   let reversedArr = data.slice().sort((a,b) => b - a);
//   return sortedArr.concat(reversedArr.slice(1));
// }

// function greet(name) {
//   return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`;
// }

// console.log(greet(Roma));

// const makeDish = function(sheffName, dish) {
//   console.log(`${sheffName} gotovit ${dish}`);
// };
// const makeSheff = function(name) {
//   return function(dish) {
//     console.log(`${name} gotovit ${dish}`);
//   };
// };

// const mango = makeSheff("Mango");
// const poly = makeSheff("Poly");

// mango('chuletas');
// poly('tea');
// poly('golubtsy');
// mango('borshch');

// const result = []
// for (let i = min; i <= max; i += step) {
//   result.push(i)
// }

// return result;

// function riders(stations) {
//     let riders = 0;
//     let total = 0;
//     for (let i = 0; i < stations.length; i+=1){
//     total += stations[i]
//     if (total > 100){
//     riders += 1
//     total = 0;
//     i-=1}}
//     return riders + 1
//   }

//       console.log(riders([18, 15]));

//       //alternative:

//       const riders = stations =>
//   stations.reduce(([dist, rid], val) => val + dist > 100 ? [val, ++rid] : [dist + val, rid], [0, 1])[1];


// TASK BANJO ---------------------------------------------------------------------
// function areYouPlayingBanjo(name) {
//    return name[0] === 'R' || name[0] === 'r' ? `${name}  plays banjo` : `${name}  does not play banjo`
//         }
// //function areYouPlayingBanjo= name =>  name[0] === 'R' || name[0] === 'r' ? `${name}  plays banjo` : `${name} + does not play banjo`
// // return name;
// // }
//    console.log(areYouPlayingBanjo("Robert"));


//    //7 kyu Find min and max ------------------------------------------------------
// //    function getMinMax(arr) {
// //     return arr.reduce(({min, max}, v) => ({
// //       min: min < v ? min : v,
// //       max: max > v ? max : v,
// //     }), { min: arr[0], max: arr[0] });
// //   }
// //   console.log(getMinMax([1]),[1,1]);

//   function getMinMax(arr) {
//       const result = [];
//       arr.sort(function(a,b){
//           return a-b
//       })
//       result.push(arr[0]);
//       result.push(arr[arr.length-1]);
//       return result;
//   }

// 8 KYU Grasshopper - Function syntax debugging ----------------------------------------------

// function main (verb, noun) {
//   return verb + noun
// }

// 8 kyu // Holiday VI - Shark Pontoon ---------------------------------------------------------

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//  if(dolphin){
//     sharkSpeed /= 2;
//   }
//   return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
// }

// 8 kyu // Smallest unused ID -------------------------------------------------------
// function nextId(ids){
//   for (i = 0; i < ids.length; i++) { 
//     if (ids.indexOf(i) == -1){
//       return i;
//     }
//   }
//   return ids.length;
// }

// 8 kyu // Grasshopper - Summation ---------------------------------------------------

// var summation = function (num) {
//   let result = 0;
//   for (let i=0; i<=num; i++){
//     result +=i;
//   }
//   return result;
// }



// 8 kyu Invert values -----------------------------------------------------------------------------
function invert(array) {
  let newArray = [];
  for (let i=0; i< array.length; i++) {
    newArray.push(-array[i]);
  }
   return newArray;
}