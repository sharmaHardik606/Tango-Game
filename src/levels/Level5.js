
const level5 = {
  cellGrid: [
    ["empty", "empty", "empty", "empty", "empty", "orange"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "blue", "empty", "empty"],
    ["empty", "empty", "blue", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["blue", "empty", "empty", "empty", "empty", "empty"],
  ],

  horizontalRules: [
    [null, null, null, "×", null],
    [null, null, null, null, null],
    [null, null, null, null, "×"],
    ["=", null, null, null, null],
    [null, null, null, null, null],
    [null, "×", null, null, null],
  ],

  verticalRules: [
    [null, null, null, "=", null, null],
    [null, null, null, null, null, "×"],
    [null, null, null, null, null, null],
    ["×", null, null, null, null, null],
    [null, null, "=", null, null, null],
  ],

  solutionGrid: [
    ["orange", "blue", "blue", "orange", "blue", "orange"],
    ["blue", "orange", "blue", "orange", "orange", "blue"],
    ["orange", "blue", "orange", "blue", "blue",  "orange"],
    ["orange", "orange", "blue", "orange", "blue", "blue"],
    ["blue", "orange", "orange", "blue", "orange", "blue"],
    ["blue", "blue", "orange",  "blue", "orange", "orange"]
  ]

};

export default level5;