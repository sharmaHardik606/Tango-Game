const level4 = {
  cellGrid: [
    ["orange", "empty", "empty", "orange", "orange", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty"],
    ["orange", "empty", "orange", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "orange", "empty", "orange"],
    ["empty", "empty", "blue", "empty", "empty", "empty"],
    ["orange", "empty", "empty", "empty", "orange", "empty"],
  ],

  horizontalRules: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    ["×", null, null, null, null],
  ],

  verticalRules: [
    [null, null, null, null, "×", null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    ["×", null, null, null, null, null],
  ],

  solutionGrid: [
    ["orange", "blue", "blue", "orange", "orange", "blue" ],
    ["blue", "orange", "orange", "blue", "blue", "orange"],
    ["orange", "blue", "orange", "blue", "orange", "blue"],
    ["blue", "orange", "blue", "orange", "blue", "orange"],
    ["blue", "orange", "blue", "orange", "blue", "orange" ],
    ["orange", "blue", "orange", "blue", "orange", "blue"]
  ]

};

export default level4;