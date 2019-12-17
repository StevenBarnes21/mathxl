"use strict"

// This function finds the nth term in a geometric sequence
function geoSeq(sequence, n) {
  let a = sequence[0];
  let r = findGeoSeqConstant(sequence);
  return a * Math.pow(r, n - 1);
}

// This function returns true if the sequence is a geometric sequence and false in all other cases
function isGeoSeq(sequence) {
  if (sequence.length < 2) return false;

  //find the constant
  let r = findGeoSeqConstant(sequence);

  if (r) return true;

  return false;
}

// This function returns the constant of a geometric sequence if there is one or null in all other cases
function findGeoSeqConstant(sequence) {
  if (sequence.length < 2) return null;

  let r = sequence[1] / sequence[0];

  for (let i = 0; i < sequence.length - 1; i++) {
    if ((sequence[i + 1] / sequence[i]) !== r) {
       return null;
    }  
  }
  return r;
}

// This function finds the sum of the nth term in a geometric sequence series. 
// It will return null if the sequence is not a valid geometric sequence
function getGeoSeqSeries(sequence, n) {

  if (isGeoSeq(sequence)) {
    
    let a = sequence[0];
    let r = findGeoSeqConstant(sequence);

    return (Math.pow(r, n) - 1) * a / (r - 1);

  }

  return null;
}





//TESTING CODE
console.log(findGeoSeqConstant([4, 12]));
console.log(getGeoSeqSeries([10, 20, 40, 80, 160], 3)); //expect 70


let geoSeqConstant = findGeoSeqConstant([-2, 4, -8, 16]);
console.log(geoSeqConstant); //expect -2
let isThisAGeoSeq = isGeoSeq([1, 3, 9, 27]);

let sixth = geoSeq([4, 12, 36, 108], 6);

if (sixth === null) {
  console.log("is null");
}

console.log(sixth);