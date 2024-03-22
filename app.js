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

//Task 4
//In this task we have to write a JavaScript function that takes an array of numbers and finds the second lowest and
//second greatest numbers, respectively.
//Sample array:[1,2,3,4,5];
//Expected output:2,4

// function lowestAndGreatest(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let secondLowest = sortedArr[1];
//   let secondGreatest = sortedArr[sortedArr.length - 2];

//   return [sortedArr[1], sortedArr[sortedArr.length - 2]];
// }

// console.log(lowestAndGreatest([1, 2, 3, 4, 5]));

//Task 5
//In this task we have to write a JavaScript function that accepts a string as a parameter and converts the first letter
//of each word into upper case.
//Example string:"the quick brown fox"
//Expected output:"The Quick Brown Fox"

//First way of solution

// function toUpperCase(str) {
//   let splittedString = str.split(" ");
//   for (let i = 0; i < splittedString.length; i++) {
//     splittedString[i] =
//       splittedString[i][0].toUpperCase() + splittedString[i].slice(1);
//   }

//   return splittedString.join(" ");
// }

// console.log(toUpperCase("the quick brown fox"));

//Second way of solution

// function toUpperCase(str) {
//   return str
//     .split(" ")
//     .map((str) => str[0].toUpperCase() + str.slice(1))
//     .join(" ");
// }

// console.log(toUpperCase("the quick brown fox"));

//Task 6
//In this task we have to write a JavaScript function that returns a string that has letters in alphabetical order.
//Example string:"webmaster"
//Expected output:"abeemrstw"

// function alphabeticalOrder(str) {
//   return str.toLowerCase().split("").sort().join("");
// }

// console.log(alphabeticalOrder("webmaster"));

//Task 7
//In this task we have to write a JavaScript function that generates all combinations of a string.
//example string:"dog"
//Expected output:"d,do,dog,o,og,g"

// function allCombinations(word) {
//   let combinations = [];
//   let length = word.length;
//   for (let i = 0; i < word.length; i++) {
//     for (j = i; j < word.length; j++) {
//       combinations.push(word.slice(i, j + 1));
//     }
//   }
//   return combinations.join(" , ");
// }

// console.log(allCombinations("dog"));

//Task 8
//In this task we have to write a JavaScript function to find the first not repeated character.
//Sample arguments:"abacddbec"
//Expected output:"e"

// function notRepeated(str) {
//   let charFrequency = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charFrequency[char]) {
//       charFrequency[char]++;
//     } else {
//       charFrequency[char] = 1;
//     }
//   }
//   for (let char in charFrequency) {
//     if (charFrequency[char] === 1) {
//       return char;
//     }
//   }
//   return charFrequency;
// }

// console.log(notRepeated("abacddbec"));
//.........................................................................................................................
//Arrays
//Task 1
//In this task we have to find maximum subarray sum: Write a function that takes an array of integers as input and finds
//the contiguous subarray within the array that has the largest sum. Return the sum of that subarray.
//For example, given the array :[-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds
//to the sum of the subarray [4, -1, 2, 1].

// function subArraySum(arr) {
//   let currentSum = arr[0];
//   let maxSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum += arr[i];
//     if (currentSum < arr[i]) {
//       currentSum = arr[i];
//     } else if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// }

// console.log(subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Task 2
//Rotate Array: We have to write a function that rotates an array of n elements to the right by k steps.
//For example, given the array: [1, 2, 3, 4, 5, 6, 7]  and k=3, the function should modify the array
// to become: [5, 6, 7, 1, 2, 3, 4].

// function rotateArray(arr, k) {
//   for (let i = 0; i < k; i++) {
//     let popIt = arr.pop();
//     arr.unshift(popIt);
//   }
//   return arr;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//Task 3
//In this task we have to find missing number:There's given an array, containing n distinct numbers, taken from
//0, 1, 2, ..., n, and we have to find the missing number. For example, given the array:[3, 0, 1], the function
//should return 2

// function missingNumber(numbers) {
//   let min = Math.min(...numbers);
//   let max = Math.max(...numbers);
//   for (i = min; i <= max; i++) {
//     if (!numbers.includes(i)) {
//       return i;
//     }
//   }
// }

// console.log(missingNumber([3, 0, 1]));

//Task 4
//Merge Intervals:Given an array of intervals, merge overlapping intervals and return the resulting merged intervals.
//For example, given the intervals: [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].

// function mergeIntervals(intervals) {
//   if (intervals.length <= 1) {
//     return intervals;
//   }
//   intervals.sort((a, b) => a[0] - b[0]);
//   let mergedIntervals = [intervals[0]];
//   for (let i = 1; i < intervals.length; i++) {
//     let currentInterval = intervals[i];
//     let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
//     if (currentInterval[0] <= lastMergedInterval[1]) {
//       lastMergedInterval[1] = Math.max(
//         currentInterval[1],
//         lastMergedInterval[1]
//       );
//     } else {
//       mergedIntervals.push(currentInterval);
//     }
//   }
//   return mergedIntervals;
// }

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

//.....................................................................................................................
//Objects
//Task 1
//Object Deep Comparison: We have to write a function , that compares two objects deeply and returns true if they
//are equal and false otherwise. The function should handle nested objects and arrays. For example, given the objects:
//{ a: 1, b: { c: 2 } } and  { a: 1, b: { c: 2 } } should return true.

//Way 1

// let object1 = {
//   name: "Bob",
//   surName: "Clark",
//   age: 28,
// };

// let object2 = {
//   name: "Bob",
//   surName: "Clark",
//   age: 28,
// };
// console.log(object1 === object2);  This is the example that refers to the object without nested objects or arrays.

//Way 2

// function comparisonStringify(object1, object2) {
//   return JSON.stringify(object1) === JSON.stringify(object1);
// }

// console.log(comparisonStringify({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

//JSON.stringiFy converts objects and arrays into string and then when we compare strings deeply, it returns true,
//at this time there is compared two objects by their actual content , not by their reference in memory(in this case
//function returns false)

//Task 2
//Object transformation: We have to write a function that takes an array of objects and transforms them into a single
//object. The transformation should use a specific property of each object as the key and another property as the value.
//For example, given the array :[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] and using the id property as the key
//and the name property as the value, the function should return:{ 1: 'Alice', 2: 'Bob' }

// function transformation(arr, keyProp, valueProp) {
//   const result = {};
//   arr.forEach((obj) => {
//     const key = obj[keyProp];
//     const value = obj[valueProp];
//     result[key] = value; //Array braces is just a braces and doesn't mean keyProp's
//   });
//   return result;
//   //index - it just means we're trying to access object property
// }

// console.log(
//   transformation(
//     [
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//     ],
//     "id",
//     "name"
//   )
// );

//Task 3
//Object Serialization:We have to write a function that serializes an object into a string representation.
//The serialization should handle nested objects and arrays. For example, given the object: { a: 1, b: { c: [2, 3] } },
//the function should return the string : "{ a: 1, b: { c: [2, 3] } }".

// function serializeObject(obj) {
//   if (typeof obj !== "object") {
//     throw new Error("Insert an object!");
//   }
//   let serializedString = "{";
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       serializedString += `${key}:${serializeValue(obj[key])},`;
//     }
//   }
//   serializedString = serializedString.slice(0, -1);
//   serializedString += "}";
//   return serializedString;

//   function serializeValue(value) {
//     if (typeof value === "object") {
//       if (Array.isArray(value)) {
//         return `[${value.map(serializeValue).join(",")}]`;
//       } else {
//         return serializeObject(value);
//       }
//     } else {
//       return JSON.stringify(value);
//     }
//   }
// }

// console.log(serializeObject({ a: 1, b: { c: [2, 3] } }));

//Task 4
//Object Prototype Extension: We have to write a function that extends an object's prototype with additional methods.
//The additional methods should perform specific operations on the object's properties. For example, extend the array
//prototype with a method called sum() that calculates the sum of all elements in the array.

// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// };

// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [4, 5, 6, 7, 8];

// console.log(numbers2.sum());

//Task 5
//Object Inheritance:Implement a class hierarchy using object-oriented programming principles. Create a base class
//with common properties and methods, and then create child classes that inherit from the base class and add their own
//specific properties and methods.

//..........................................................................................................................
//Conditionals/Loops

//Task 1
//Palindrome Checker:We have to write a program that prompts the user for a string and checks if it is a palindrome.
//A palindrome is a word,phrase, number, or other sequence of characters that reads the same backward as forward.
//Ignore spaces, punctuation and letter casing. USe conditional statements and loops to implement this behavior.

// let str = prompt("Enter the word!");

// let newStr = str.toLowerCase().replace(/[ .]/g, "");

// if (newStr === newStr.split("").reverse().join("")) {
//   console.log("It's a Palindrome!");
// } else {
//   console.log("Enter the correct Palindrome!");
// }

//Task 2
//Fibonacci Sequence:In this task we have to write a program that prompts the user for a number and generates
//the Fibonacci sequence up to that number. The Fibonacci sequence is a series of numbers in which each number
//is the sum of the two preceding ones. Use a loop and conditional statements to generate the sequence.

function Fibonacci(number) {
  if (number <= 0) {
    return "Wrong input!";
  } else {
    let fibonacci = [0, 1];
    while (number > fibonacci[fibonacci.length - 1]) {
      let newItem =
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      if (newItem > number) {
        break;
      }
      fibonacci.push(newItem);
    }
    return fibonacci;
  }
}

let input = parseInt(prompt("Enter the number!"));
console.log(Fibonacci(input));
