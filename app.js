// import { getConsoleOutput } from "@jest/console";

// const distanceTable = [
//   ["A", "C", 2],
//   ["C", "D", 1],
//   ["C", "F", 4],
//   ["B", "D", 4],
//   ["B", "E", 7],
//   ["D", "F", 1],
//   ["D", "G", 2],
//   ["F", "G", 3],
//   ["G", "H", 4],
//   ["E", "H", 10]
// ];
// const findFirstStartPoint = startingLetter => {
//   const containsStartingPoint = distanceTable.filter(distanceRow =>
//     distanceRow.includes(startingLetter)
//   );
//   console.log(containsStartingPoint);
// };

const allMatchingPoints = {
  A: { C: 2 },
  B: { D: 4, E: 7 },
  C: { D: 1, F: 4 },
  D: { F: 1, G: 2, C: 1, B: 4 },
  E: { H: 10, B: 7 },
  F: { G: 3, C: 4, D: 1 },
  G: { H: 4, D: 2, F: 3 },
  H: { G: 4, E: 10 }
};

const startingLetterToTest = "B";

const findMatchingPoints = startingLetter => {
  return allMatchingPoints[startingLetter];
};

const createNewPathArray = startingLetter => {
  return Object.entries(findMatchingPoints(startingLetter));
};

const create2ndPathArraySplit = newPathArray => {
  let firstPathArray = createNewPathArray(newPathArray);
  firstPathArray.forEach(singleArray => {
    singleArray.push("push array here");
  });
  console.log(firstPathArray);
};

const checkDistanceOfArray = array => {
  let distance = 0;
  for (let i = 1; i < array.length; i += 2) {
    distance += array[i];
  }
  return distance;
};

const createPathLetterArray = array => {
  let pathLetterArray = [];
  for (let i = 0; i < array.length; i += 2) {
    pathLetterArray.push(array[i]);
  }
  return pathLetterArray;
};

const firstPathSplit = createNewPathArray(startingLetterToTest);
console.log(firstPathSplit);
const secondPathSplit = create2ndPathArraySplit(startingLetterToTest);
console.log(secondPathSplit);
let testArray = ["a", 1, "b", 2, "c", 3];
console.log(checkDistanceOfArray(testArray));
console.log(createPathLetterArray(testArray));

export {
  findMatchingPoints,
  createNewPathArray,
  checkDistanceOfArray,
  createPathLetterArray
};
