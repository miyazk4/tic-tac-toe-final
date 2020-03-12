import { SquareValue } from "./components/Square";

export interface Winner {
  player?: SquareValue;
  line?: number[];
  isDraw: boolean;
}

export function calculateWinner(squares: SquareValue[]): Winner | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [a, b, c] = line;
    // diz q linha foi a vencedora
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: line, isDraw: false };
    }
  }

  if (squares.every(Boolean)) {
    return { isDraw: true };
  }

  let isDraw = true;
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      isDraw = false;
    }
  }

  return null;
}
