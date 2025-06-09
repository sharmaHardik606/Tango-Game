
const level1 = {
  cellGrid: [
    ["orange", "empty", "empty", "orange", "orange", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "blue"],
    ["empty", "orange", "empty", "orange", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "blue", "empty"],
    ["orange", "orange", "empty", "empty", "empty", "empty"],
  ],

  horizontalRules: [
    ["×", null, null, null, null],
    [null, null, null, null, null],
    [null, "×", null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],

  verticalRules: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],

  solutionGrid: [
    ["orange", "blue", "blue", "orange", "orange", "blue"],
    ["blue", "orange", "orange", "blue", "blue", "orange"],
    ["orange", "blue", "orange", "blue", "orange", "blue"],
    ["blue", "orange", "blue", "orange", "blue", "orange"],
    ["blue", "blue", "orange", "orange", "blue", "orange"],
    ["orange", "orange", "blue", "blue", "orange", "blue"]
  ]

};

export default level1;
