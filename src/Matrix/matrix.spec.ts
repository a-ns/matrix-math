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
    actual.multiply(scale);
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
  it("should add matrix elements wise", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    let amount = 5;
    // Act
    const m1 = new Matrix({ rows, cols });
    m1.randomize(amount);
    const m2 = new Matrix({ rows, cols });
    m2.randomize(amount);
    const m1_backup = JSON.parse(JSON.stringify(m1.matrix));
    m1.add(m2);
    // Assert
    for (let i = 0; i < m1.rows; i++) {
      for (let j = 0; j < m1.columns; j++) {
        expect(m1.matrix[i][j]).toBe(m2.matrix[i][j] + m1_backup[i][j]);
      }
    }
  });
  it("should perform a dot product and return the new matrix", () => {
    let m = new Matrix({ rows: 2, cols: 3 });
    m.matrix[0] = [1, 2, 3];
    m.matrix[1] = [4, 5, 6];
    let n = new Matrix({ rows: 3, cols: 2 });
    n.matrix[0] = [7, 8];
    n.matrix[1] = [9, 10];
    n.matrix[2] = [11, 12];
    let mn = m.multiply(n);
    expect(mn).toEqual({
      _rows: 2,
      _cols: 2,
      _matrix: [[58, 64], [139, 154]]
    });
  });
});
