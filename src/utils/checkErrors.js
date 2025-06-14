export function checkErrors(grid, horizontalRules, verticalRules) {
  const rowErrors = Array(6).fill(false);
  const colErrors = Array(6).fill(false);
  const ruleViolations = [];

  // Rule 1: Max 3 of same color in a full row or column
  for (let i = 0; i < 6; i++) {
    const row = grid[i];
    const col = grid.map(r => r[i]);

    const orangeInRow = row.filter(cell => cell === "orange").length;
    const blueInRow = row.filter(cell => cell === "blue").length;
    if (orangeInRow > 3 || blueInRow > 3) rowErrors[i] = true;

    const orangeInCol = col.filter(cell => cell === "orange").length;
    const blueInCol = col.filter(cell => cell === "blue").length;
    if (orangeInCol > 3 || blueInCol > 3) colErrors[i] = true;

  }

  // Rule 2: No three same colors in a row (horizontal or vertical)
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    // Check horizontal triplets
    const a = grid[i][j];
    const b = grid[i][j + 1];
    const c = grid[i][j + 2];
    if (a !== "empty" && a === b && b === c) {
      rowErrors[i] = true;
    }

    // Check vertical triplets
    const x = grid[j][i];
    const y = grid[j + 1][i];
    const z = grid[j + 2][i];
    if (x !== "empty" && x === y && y === z) {
      colErrors[i] = true;
    }
  }
}

  // Rule 3 & 4: = and X rule
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      // 👉 Horizontal check
      const hRule = horizontalRules[row]?.[col];
      const aH = grid[row][col];
      const bH = grid[row][col + 1];

      if (hRule === "×" && aH !== "empty" && bH !== "empty" && aH === bH) {
        ruleViolations.push({ type: "×", row, col });
      }

      if (hRule === "=" && aH !== "empty" && bH !== "empty" && aH !== bH) {
        ruleViolations.push({ type: "=", row, col });
      }

      // 👉 Vertical check
      const vRule = verticalRules[row]?.[col];
      const aV = grid[row][col];
      const bV = grid[row + 1]?.[col];

      if (vRule === "×" && aV !== "empty" && bV !== "empty" && aV === bV) {
        ruleViolations.push({ type: "×", row, col, vertical: true });
      }

      if (vRule === "=" && aV !== "empty" && bV !== "empty" && aV !== bV) {
        ruleViolations.push({ type: "=", row, col, vertical: true });
      }
    }
  }

  return {
    rowErrors,
    colErrors,
    ruleViolations,
  };
}

