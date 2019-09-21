import cloneDeep from "lodash.clonedeep";
import { Matrix } from "../Matrix/matrix";

function scale(m: Matrix, scalar: number) {
  const mcopy = cloneDeep(m);
  loop(m, (i, j) => (mcopy.matrix[i][j] *= scalar));
  return mcopy;
}

export function multiply(m: Matrix, n: number | Matrix) {
  if (n instanceof Matrix)
    if (m.columns != n.rows)
      throw Error("columns of first matrix must equal rows of second matrix");
    else return dot(m, n);
  return scale(m, n);
}

export function loop(matrix: Matrix, cb: (i: number, j: number) => void) {
  for (let i = 0; i < matrix.rows; i++)
    for (let j = 0; j < matrix.columns; j++) cb(i, j);
}

export function add(m: Matrix, amount: number | Matrix) {
  let mcopy = cloneDeep(m);
  loop(
    m,
    (i, j) =>
      (mcopy.matrix[i][j] +=
        amount instanceof Matrix ? amount.matrix[i][j] : amount)
  );
  return mcopy;
}

function dot(m: Matrix, n: Matrix) {
  const dotted = new Matrix({ rows: m.rows, cols: n.columns });
  const a = m.matrix;
  const b = n.matrix;
  for (let i = 0; i < dotted.rows; i++) {
    for (let j = 0; j < dotted.columns; j++) {
      let sum = 0;
      for (let k = 0; k < m.columns; k++) {
        sum += a[i][k] * b[k][j];
      }
      dotted.matrix[i][j] = sum;
    }
  }
  return dotted;
}
