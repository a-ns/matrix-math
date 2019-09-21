export class Matrix {
  private _rows: number;
  private _cols: number;
  private _matrix: number[][];
  constructor({ rows, cols }: { rows: number; cols: number }) {
    this._rows = rows;
    this._cols = cols;
    this._matrix = [];
    for (let i = 0; i < rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  get matrix() {
    return this._matrix;
  }
  get rows() {
    return this._rows;
  }
  get columns() {
    return this._cols;
  }
  private loop(cb: (i: number, j: number) => void) {
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.columns; j++) cb(i, j);
  }
  private scale(scalar: number) {
    this.loop((i, j) => (this.matrix[i][j] *= scalar));
  }
  private dot(m: Matrix) {
    const dotted = new Matrix({ rows: this.rows, cols: m.columns });
    const a = this.matrix;
    const b = m.matrix;
    for (let i = 0; i < dotted.rows; i++) {
      for (let j = 0; j < dotted.columns; j++) {
        let sum = 0;
        for (let k = 0; k < this.columns; k++) {
          sum += a[i][k] * b[k][j];
        }
        dotted.matrix[i][j] = sum;
      }
    }
    return dotted;
  }
  multiply(n: number | Matrix) {
    if (n instanceof Matrix) {
      if (this.columns != n.rows) return undefined;
      return this.dot(n);
    } else {
      this.scale(n);
    }
  }
  add(amount: number | Matrix) {
    this.loop(
      (i, j) =>
        (this.matrix[i][j] +=
          amount instanceof Matrix ? amount.matrix[i][j] : amount)
    );
  }
  randomize(scale: number = 5) {
    this.loop(
      (i, j) => (this.matrix[i][j] = Math.floor(Math.random() * scale))
    );
  }

  log() {
    console.table(this.matrix);
  }
}
