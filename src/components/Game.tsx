import React from "react";
import { Board } from "./Board";
import { calculateWinner } from "../utils";
import styles from "./Game.module.scss";
import { GameInfo } from "./GameInfo";
import cn from "classnames";
import { SquareValue } from "./Square";

interface GameProps {}

export interface GameState {
  history:  SquareValue[][];
  stepNumber: number;
  xIsNext: boolean;
  //winLine?:number[];
}

export class Game extends React.Component<GameProps, GameState> {
  state: GameState = {
    history: [
      Array(9).fill(undefined)
    ],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick(i:number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        squares
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo = (step:number) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  } 
  render() {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current);
    

    return (
      <div className={styles.game}>
        <h1>Tic-Tac-Toe</h1>
        <Board
          squares={current}
          winLine={winner?.line}
          onClick={i => this.handleClick(i)}
        />
        <GameInfo {...this.state} winner={winner} jumpTo={this.jumpTo} />
      </div>
      // ...this.state leva tudo ao info
    );
  }
}
