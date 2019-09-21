import { Matrix } from "../Matrix/matrix";
import * as MatrixOps from "./matrixOps";
describe("Matrix Operations", () => {
  it("every cell value should scale by a scalar amount", () => {
    // Arrange
    let cols = 5;
    let rows = 5;
    let amount = 5;
    let scale = 2;

    let m = new Matrix({ rows, cols });

    m = MatrixOps.add(m, amount);
    // Act
    const actual = MatrixOps.multiply(m, scale);
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

    const m = new Matrix({ rows, cols });
    // Act
    const actual = MatrixOps.add(m, amount);
    // Assert
    actual.matrix.forEach(row =>
      row.forEach(cell => expect(cell).toBe(amount))
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
    const actual = MatrixOps.add(m1, m2);
    // Assert
    for (let i = 0; i < m1.rows; i++) {
      for (let j = 0; j < m1.columns; j++) {
        expect(actual.matrix[i][j]).toBe(m2.matrix[i][j] + m1_backup[i][j]);
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
    let mn = MatrixOps.multiply(m, n);
    expect(mn).toEqual({
      _rows: 2,
      _cols: 2,
      _matrix: [[58, 64], [139, 154]]
    });
  });
});
