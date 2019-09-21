export class Matrix {
  _rows: number;
  _cols: number;
  matrix: number[][];
  constructor({ rows, cols }: { rows: number; cols: number }) {
    this._rows = rows;
    this._cols = cols;
    this.matrix = [];
    for (let i = 0; i < rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  get rows() {
    return this._rows;
  }
  get columns() {
    return this._cols;
  }
  private loop(cb: Function) {
    for (let i = 0; i < this.rows; i++)
      for (let j = 0; j < this.columns; j++) cb(i, j);
  }
  scale(scalar: number) {
    this.loop((i, j) => (this.matrix[i][j] *= scalar));
  }
  add(amount: number) {
    this.loop((i, j) => (this.matrix[i][j] += amount));
  }
}
