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

const infiniteLoop = (arr,d,n) => {
 
    // for (let i = 0; i <= arr.length; i+=1){
        for (let j = 1; j <= n; j+=1){
    if (d === "left"){
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === "right"){
        arr[1].unshift(arr[0].pop());
        arr[2].unshift(arr[1].pop());
        arr[0].unshift(arr[2].pop());
     
    }
}
    
    return arr;
}
  console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",2));
  console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1));
    
  