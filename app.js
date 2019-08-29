// alert("hey baby");

const distanceTable = [
  ["A", "C", 2],
  ["C", "D", 1],
  ["C", "F", 4],
  ["B", "D", 4],
  ["B", "E", 7],
  ["D", "F", 1],
  ["D", "G", 2],
  ["F", "G", 3],
  ["G", "H", 4],
  ["E", "H", 10]
];
const findFirstStartPoint = startingLetter => {
  const containsStartingPoint = distanceTable.filter(distanceRow =>
    distanceRow.includes(startingLetter)
  );
  console.log(containsStartingPoint);
};

//All matching points for each letter and thier distances
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

//Given a letter, return all matching points from the above array
const findMatchingPointsFromLetter = startingLetter => {
  return allMatchingPoints[startingLetter];
};

//Add a path to an object
const NewPathObject = startingLetter => {
  pathObject = [];
  pathObject.push(findMatchingPointsFromLetter(startingLetter));
  //   pathObject.push(findMatchingPointsFromLetter("C"));
  console.log(pathObject);
};

NewPathObject("B");
