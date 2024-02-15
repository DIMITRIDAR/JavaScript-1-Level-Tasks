//Functions
//Task 1
//In this task we have to write a JavaScript function that accepts two arguments: a string and a letter and the function will
//count the number of occurrences of the specified letter within the string.
//Sample arguments:'w3resource.com', 'o'
//Expected output:2.

// function numberOfOccurrence(str, letter) {
//   let counter = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(numberOfOccurrence("w3resource.com", "o"));

//Task 2
//In this task we have to write a JavaScript function to apply the Bubble Sort algorithm.
//Sample array:[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//Expected output:Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
//First way of solution

// function bubbleSort(arr) {
//   arr.sort((a, b) => b - a);

//   return arr;
// }

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

//Second way of solution
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         //Swapping two values here
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

//Task 3
//In this task we have to write a JavaScript function that accepts a list  of country names as input and returns
//the longest country name as output.
//Sample function:Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output:"United States of America"

// function longestCountryName(arr) {
//   let longest = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }

// console.log(
//   longestCountryName(["Australia", "Germany", "United States of America"])
// );
