// Reference: https://leetcode.com/problems/reverse-words-in-a-string/solutions/1490161/js-4-solutions-with-and-without-built-in-functions-and-optimised/

// Solution 1
// var reverseWords = function(s) {
// 	// 1. split the string with a space to form an array of words
// 	// 2. reverse the words
// 	// 3. filter out the words that are empty
// 	// 4. join the array to form the resultant string
//     return s.split(" ").reverse().filter(w => w !== "").join(" ");
// };

// Solution 2:
var reverseWords = function (s) {
  // Step 1: Convert the string to an array and reverse the string
  arr = Array.from(s).reverse();
  const length = arr.length;

  // Step 2: Clear the extra spaces within arr
  let slow = 0,
    fast = 0;
  // O(n)
  while (fast < length) {
    // Copy non-space characters to slow pointer
    while (fast < length && arr[fast] !== " ") {
      arr[slow] = arr[fast];
      slow++;
      fast++;
    }
    // Add necessary space if slow pointer is not at the beginning
    if (slow !== 0) {
      arr[slow] = " ";
      slow++;
    }
    // Skip multiple spaces in the input string
    while (fast < length && arr[fast] == " ") fast++;
  }

  // Step 3: Reverse the words within the range [0, slow-1)
  let start = 0,
    end = 0;
  while (end < slow - 1) {
    // Find the end index of a word
    while (end < slow - 1 && arr[end] !== " ") end++;
    // Reverse the word within the range [start, end]
    let i = end - 1;
    while (i >= start) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      start++;
      i--;
    }
    end++;
    start = end;
  }
  // Step 4: Join the array elements and return the result
  return arr.splice(0, slow - 1).join("");
};
