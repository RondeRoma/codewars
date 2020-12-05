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

// // 8 kyu Invert values -----------------------------------------------------------------------------
// function invert(array) {
//   let newArray = [];
//   for (let i=0; i< array.length; i++) {
//     newArray.push(-array[i]);
//   }
//    return newArray;
// }

///// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision() ----------------------------------------

// const howManySmaller = (arr, n) =>
//   arr.map(num => Number(num.toFixed(2))).filter(num => num < n).length;

//   console.log([1.1888,1.1868,1.1838],1.19);

//  // Training JS #18: Methods of String object--concat() split() and its good friend join() ---------------------------------------

// function splitAndMerge(string, separator) {
//   return string.split(' ').map(splited => splited.split('').join(separator)).join(' ')
// }

// // Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() ----------------------------------

// const firstToLast = (str,c) => str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;

// //Training JS #16: Methods of String object--slice(), substring() and substr() ----------------------------------------

// const cutIt = arr => arr.map(str => str.slice(0, Math.min(...arr.map(str=> str.length))))

// const shuffleIt=(arr,...restProps)=>{
//     for (let key in restProps)
//     {
//       let [x,y] = [restProps[key][0], restProps[key][1]];
//       [arr[x],arr[y]] = [arr[y],arr[x]];
//     }
//     return arr;
//   }
//   console.log(shuffleIt([1,2,3,4,5],[1,2]));

/////// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()-------------------------
// const topSecret = str => {
//     let chars = str.split('');

//     for (let i = 0; i < chars.length; i += 1) {
//       if ((chars[i].match(/[abc]/gi))) {
//         chars[i] = String.fromCharCode(chars[i].charCodeAt() + -3 + 26);
//        } else if (chars[i].match(/[!"#$%&'()+,-./0 12345\n6789:;<=>?@]/g)) {
//         chars[i] = String.fromCharCode(chars[i].charCodeAt());
//       } else {
//         chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
//       }
//     }
//     return chars.join('');
//   };

//   console.log(topSecret('Ab. +dph lv Mkq'));
//   console.log(topSecret('wklv lv dq ha6psoh'));
//   console.log(topSecret('Khoor Zruog!'));

//   answer1 = '3743';
// answer2 = 'UePJ';
// answer3 = 'Nail scissors';

// const infiniteLoop = (arr,d,n) => {

//     // for (let i = 0; i <= arr.length; i+=1){
//         for (let j = 1; j <= n; j+=1){
//     if (d === "left"){
//       arr[2].push(arr[0].shift());
//       arr[1].push(arr[2].shift());
//       arr[0].push(arr[1].shift());
//     }
//     if (d === "right"){
//         arr[1].unshift(arr[0].pop());
//         arr[2].unshift(arr[1].pop());
//         arr[0].unshift(arr[2].pop());

//     }
// }

//     return arr;
// }
//   console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",2));
//   console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1));

//Training 24

// function threeInOne(arr){
//     let array = [];
//     for (let i=0; i<= arr.length; i+=3){
//  array.push(arr.slice (i, i+3))
//     }

// return array.map(el=>el.reduce((acc, el) => acc + el, 0 )).slice(0, -1);

//   }
//   const threeInOne = arr =>
//   [...Array(arr.length / 3)].map((_, idx) => arr.slice(idx *= 3, idx + 3).reduce((pre, val) => pre + val));

//   console.log(threeInOne( [1,2,3]));
//   console.log(threeInOne( [1,2,3,4,5,6] ));
//   console.log(threeInOne( [1,2,3,4,5,6,7,8,9]));

// const monkeyCount = n =>  Array.from({ length: n }, (_, k)=> k +1);

// console.log(monkeyCount(9));
//Array.from({ length: 5 }, (v, k) => k);
// return Array.from({ length: n }, (v, k) => k);

// Training 25
// function sortIt(arr) {
//     let copy = arr.slice();
//     let count = copy.length;
//     let mysort = {};
//     let uniqueArray = [];

//     let ks = [];
//     for (let value of copy) {
//       ks[value] = (ks[value] || 0) + 1;
//     }

//     let multiArray = [];
//     for (let i in copy) {
//       if (ks[copy[i]] > 1) {
//         multiArray.push(copy[i]);
//       }
//     }
// for (let key in mysort) {
//          if (mysort[key] > key) multiArray.push(+key);
//        }

//     for (let i = 0; i < count; i++) {
//       let k = copy[i];
//       if (mysort[k] === undefined) {
//         mysort[k] = 1;
//       } else {
//         mysort[k]++;
//       }
//     }

//     for (let key in mysort) {
//       if (mysort[key] === 1) uniqueArray.push(+key);
//     }

//     let result = [...uniqueArray.sort((a, b) => b - a), ...multiArray.sort((a, b) => b - a)];
//     return result;
//   }

//   console.log(sortIt([1, 1, 1, 2, 2, 3]));
//   console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
//   console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
//   console.log(sortIt([1,3,3,5,2,2,4,6,6,7,7,7]));

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1

// function sortIt(arr) {
//     let uniqueArray = [];
//     let multyArray = arr.slice().sort();

// for (let i=0; i<multyArray.length; i){
//     let count = 1;
//     while(true){
//         if (multyArray[i] === multyArray[i+count])
//             count +=1;
//          else break;
//     }
// console.log(multyArray);

//     uniqueArray.push({'number': multyArray[i], count: count})
//     i+= count
// }
// console.log(uniqueArray);
// uniqueArray.sort((a,b) => b.number - a.number)
// uniqueArray.sort((a,b) => a.count - b.count)

// multyArray = []
// for (let i=0; i<uniqueArray.length; i++) {
//     for (let k=1; k<= uniqueArray[i].count; k++){
//         multyArray.push(uniqueArray[i].number)
//     }
// }
// return uniqueArray
// }

// console.log(sortIt([1, 1, 1, 2, 2, 3]));
// console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
// console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
// console.log(sortIt([1,3,3,5,2,2,4,6,6,7,7,7]));

// function between(a, b) {
//     let result = [];
//    while(a <= b){
//        }
//    result.push(a++);
//    }

// var a=[1,2,3,4,5];
// a.every(x=>{
//   console.log(x);
//   return x<4;
// })

// function mirrorImage(arr){
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i].toString().split('').reverse().join('') === arr[i+1].toString()) {
//       return [arr[i],arr[i+1]];}
//     }
//     return [-1,-1]}

// function mirrorImage(arr){
//     let a = 0
//   let b = 0;

//   for(let i=0;i<arr.length-1;i++){
//     a = arr[i];
//   b = arr[i+1]

//       if( a === Number(toString(b).split('').reverse().join(''))) {
//       return [a, b];}

//     return [-1,-1]
//   }
//    };

// function mirrorImage(arr){
//     arr.some((i)=> {

//         if(arr[i].toString().split('').reverse().join('') === arr[i+1].toString()) {
//         return [arr[i], arr[i+1]];}

//       return [-1,-1]
//     })
//      };

//    console.log([11,22,33,33,22,11]);

// function roundIt(n){
//     let array = n.toString().split(".");
//     if (array[0].length > array[1].length) {
//      return Math.floor(n);
//       } else if (array[0].length < array[1].length) {
//         return Math.ceil(n);
//         } else {
//           return Math.round(n);
//         }

//     }

//     console.log(roundIt(3.45));

// const digitize = (n) => Array.from(String(n), Number).reverse()

// console.log(digitize(35231));

// class Cube {
//     constructor (n=0){
//       this.side = n
//     }
//     getSide(){
//       return this.side
//     }
//     setSide(n) {
//       if(isNaN(n))
//        return this.side = Math.abs(n);
//     }
//   }

//   function Cube(n) {
//     let side = 0;

//     this.setSide = function(n) {
//       if (isNaN(n) !== true) {
//          side = Math.abs(n);
//         }
//       };
//       this.getSide = function() {
//         return side;
//    }
//   };

// function Cube(n=0) {
//   let side = n;
//   this.setSide = n=> isNaN(n) !== true? side = Math.abs(n): side=0;
//   this.getSide = () => side;
//     };

// let c = new Cube(-10);
// console.log(c.getSide());

//7 kyu Highest and Lowest--------------------------------
// function highAndLow(n){
//   const array = n.split(' ').map(Number).sort((a,b)=>b-a)
//   return array[0]+' '+array[array.length-1]
// }
// 6 kyu Who likes it?=----------------------------------------
// const likes = (names) =>
// names.length===0?'no one likes this':
// names.length===1?`${names[0]} likes this`:
// names.length===2?`${names[0]} and ${names[1]} like this`:
// names.length===3?`${names[0]}, ${names[1]} and ${names[2]} like this`:
// `${names[0]}, ${names[1]} and ${names.length-2} others like this`

//7 kyu Get the Middle Character ====-----------------------------------------
// function getMiddle(s){
//   let middleIndex = Math.floor(s.length/2);
//     return (s.length%2)?s[middleIndex]:s[middleIndex-1]+s[middleIndex]
//   }

//6 kyu Find the odd int -----------------------------------------------
// const findOdd = (A) => A.find((a, b, c) => c.filter(el => el === a).length % 2 === 1);

// I am very very - надо решиииить!!!____====------------------------------------
// function iam(input) {
//     return input.split(' ');
// }



// console.log(iam('happy'));
// console.log(iam()()('tall'));
// console.log(iam()()('tall and ') + iam()('funny'));