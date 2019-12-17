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
      console.log("is null");
       return null;
    }  
  }
  return r;
}

//TESTING CODE
console.log(findGeoSeqConstant([4, 12]));


let geoSeqConstant = findGeoSeqConstant([-2, 4, -8, 16]);
console.log(geoSeqConstant);
let isThisAGeoSeq = isGeoSeq([1, 3, 9, 27]);

let sixth = geoSeq([4, 12, 36, 108], 6);

if (sixth === null) {
  console.log("is null");
}

console.log(sixth);