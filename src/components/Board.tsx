import React from "react";
import { Square, SquareValue } from "./Square";
import styles from "./Board.module.scss";

interface BoardProps {
  winLine?: number[];
  squares: SquareValue[];
  onClick: (i: number) => void;
}

export class Board extends React.Component<BoardProps> {
  renderSquare = (_: any, i: number) => {
    const winLine = this.props.winLine;

    // Se tem win line & se inclui o indice
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        winner={winLine && winLine.includes(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  render() {
    return (
      <div className={styles.gameBoard}>
        {Array.from({ length: 9 }, this.renderSquare)}
      </div>
    );
  }
}
