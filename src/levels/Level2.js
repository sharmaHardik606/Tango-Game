
const level2 = {
  cellGrid: [
    ["empty", "blue", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "orange", "orange"],
    ["blue", "empty", "blue", "blue", "empty", "empty"],
    ["empty", "empty", "blue", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "orange", "empty", "orange"],
  ],

  horizontalRules: [
    [null, null, null, null, null],
    [null, null, null, null, "="],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, "×", null, null, null],
    [null, null, null, null, null],
  ],

  verticalRules: [
    [null, null, null, null, null, "×"],
    [null, null, null, "=", null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],

  solutionGrid: [
    ["orange", "blue", "orange", "orange", "blue", "blue"],
    ["blue", "blue", "orange", "blue", "orange", "orange"],
    ["blue", "orange", "blue", "blue", "orange", "orange"],
    ["orange", "orange", "blue", "orange", "blue", "blue"],
    ["orange", "blue", "orange", "blue", "orange", "blue"],
    ["blue", "orange", "blue", "orange", "blue", "orange"]
  ]

};

export default level2;