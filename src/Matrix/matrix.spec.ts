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
  it("every cell value should scale by a scalar amount", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    let amount = 5;
    let scale = 2;
    // Act
    const actual = new Matrix({ rows, cols });
    actual.add(amount);
    actual.scale(scale);
    // Assert
    actual.matrix.forEach(row =>
      row.forEach(cell => expect(cell).toBe(amount * scale))
    );
  });
  it("every cell should add by an amount", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    let amount = 5;
    // Act
    const actual = new Matrix({ rows, cols });
    actual.add(amount);
    // Assert
    actual.matrix.forEach(row =>
      row.forEach(cell => expect(cell).toBe(amount))
    );
  });
});
