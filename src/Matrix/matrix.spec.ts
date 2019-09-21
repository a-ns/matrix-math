import { Matrix } from "./matrix";

describe("Matrix", () => {
  it("should be initialized with rows and columns", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    // Act
    const actual = new Matrix({ rows, cols });
    // Assert
    expect(actual.rows).toBe(rows);
    expect(actual.columns).toBe(cols);
  });
  it("should initialize with all values as 0", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    // Act
    const actual = new Matrix({ rows, cols });
    // Assert
    actual.matrix.forEach(row => row.forEach(cell => expect(cell).toBe(0)));
  });

  it("should have random values after calling randomize", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    let amount = 5;
    // Act
    const actual = new Matrix({ rows, cols });
    actual.randomize(amount);
    // Assert
    actual.matrix.forEach(row =>
      row.forEach(cell => {
        expect(cell).toBeGreaterThanOrEqual(0);
        expect(cell).toBeLessThan(amount);
      })
    );
  });
});
