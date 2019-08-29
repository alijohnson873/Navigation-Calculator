// I can add a path to an object

//Add a path to an object
const NewPathObject = startingLetter => {
  pathObject = [];
  pathObject.push(findMatchingPointsFromLetter(startingLetter));
  //   pathObject.push(findMatchingPointsFromLetter("C"));
  console.log(pathObject);
};
