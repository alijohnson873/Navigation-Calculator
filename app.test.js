import {
  findMatchingPoints,
  createNewPathArray,
  checkDistanceOfArray,
  createPathLetterArray
} from "./app.js";

test("return array of matching points from given starting point letter", () => {
  const expected = { D: 4, E: 7 };
  expect(findMatchingPoints("B")).toStrictEqual(expected);
});

test("return matching point object split into path arrays", () => {
  const expected = [["D", 4], ["E", 7]];
  expect(createNewPathArray("B")).toStrictEqual(expected);
});

test("sum distance in Path array", () => {
  const testArray = ["A", 1, "B", 2, "C", 3];
  expect(checkDistanceOfArray(testArray)).toBe(6);
});

test("create array of path letters", () => {
  const testArray = ["A", 1, "B", 2, "C", 3];
  const expected = ["A", "B", "C"];
  expect(createPathLetterArray(testArray)).toStrictEqual(expected);
});
