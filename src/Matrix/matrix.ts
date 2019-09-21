import { loop } from "../MatrixOps/matrixOps";
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

  randomize(scale: number = 5) {
    loop(
      this,
      (i, j) => (this.matrix[i][j] = Math.floor(Math.random() * scale))
    );
  }

  log() {
    console.table(this.matrix);
  }
}
