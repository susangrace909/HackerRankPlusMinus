"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/*Thought process:
First need to identify # of integers in array
Identify positive, negative, zero
Convert to fraction
Fraction to decimal
Display on separate lines
*/
function plusMinus(arr) {
  //variables
  const positives = 0;
  const negatives = 0;
  const zeroes = 0;
  //for loop
  //counts number of positives, zeroes, negatives
  for (int i=0; i<arr.size(); i++) {
    if (arr.get(i) > 0) {
      positives ++;
    } else if (arr.get(i) == 0) {
      zeroes++;
    } else {
        negatives++;
      }
    }
//determines decimal
positives /= arr.size();
negatives /= arr.size();
zeros /= arr.size();
//prints numbers
console.log(positives);
console.log(negatives);
console.log(zeroes);
  };

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
