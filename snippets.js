// I can add a path to an object

//Add a path to an object
const NewPathObject = startingLetter => {
  pathObject = [];
  pathObject.push(findMatchingPointsFromLetter(startingLetter));
  //   pathObject.push(findMatchingPointsFromLetter("C"));
  console.log(pathObject);
};

const create2ndPathArraySplit = newPathArray => {
  let individualArray = createNewPathArray(newPathArray)[0];
  let secondPath = createNewPathArray(individualArray[0]);
  return secondPath;
};
