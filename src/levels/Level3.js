
const level3 = {
  cellGrid: [
    ["empty", "empty", "orange", "empty", "empty", "empty"],
    ["empty", "blue", "empty", "blue", "empty", "blue"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["orange", "orange", "empty", "empty", "empty", "empty"],
    ["orange", "empty", "empty", "empty", "orange", "empty"],
    ["empty", "empty", "empty", "empty", "orange", "empty"],
  ],

  horizontalRules: [
    [null, null, null, null, null],
    ["×", null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],

  verticalRules: [
    [null, "=", null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ],

  solutionGrid: [
    ["blue", "blue", "orange", "orange", "blue", "orange"],
    ["orange", "blue", "orange", "blue", "orange", "blue"],
    ["blue", "orange", "blue", "orange", "blue",  "orange"],
    ["orange", "orange", "blue", "orange", "blue", "blue"],
    ["orange", "blue", "orange", "blue", "orange", "blue"],
    ["blue", "orange", "blue", "blue", "orange", "orange"]
  ]

};

export default level3;