function bubbleSort(a) {
  var swapped;
  let start = Date.now();
  do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
        if (a[i] > a[i+1]) {
            var temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
            swapped = true;
        }
    }
  } while (swapped);
  let end = Date.now();
  console.log(`Start: ${new Date(start)}.\nEnd: ${new Date(end)}.\nSeconds spent: ${(end - start) / 1000}`);
}

const generateRandomNumbers = require('./generateArrayOfRandomNumbers');

var randomNumbers = generateRandomNumbers(1000000, 1000000);

bubbleSort(randomNumbers);
// console.log(randomNumbers);