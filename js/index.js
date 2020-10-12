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

function unique_Code(array) {
    var result = null, n = array.length;
  
    for (let i = 0; i < n; i++) {
      for (let v = i; v < n; v++) {
        if (array[i] != array[v]) {
          result = array[i];
        }
      }
    }
  
    return result;
  }
