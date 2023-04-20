const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
   test("returns an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shuffle(arr);
    expect(Array.isArray(result)).toBe(true);
   })
});
