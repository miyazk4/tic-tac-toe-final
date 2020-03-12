import React from "react";
import styles from "./Game.module.scss";
import cn from "classnames";
import { SquareValue } from "./Square";
import { GameState } from "./Game";
import { Winner } from "../utils";

interface GameInfoProps extends GameState {
  winner: Winner | null;
  // Adicionar step?
  jumpTo: (move: number) => void;
}

export function GameInfo({
  history,
  stepNumber,
  xIsNext,
  winner,
  jumpTo
}: GameInfoProps) {
  const moves = history.map((step, move) => {
    const desc = move > 0 ? "Go to move #" + move : "Go to game start";

    return (
      <li key={move} className={styles.travelItem}>
        <button
          className={cn(styles.btn, {
            [styles.active]: move === stepNumber
          })}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  // Se for vencedor e estiver empatado dá tie else
  const status = winner
    ? winner.isDraw
      ? "Game is tie"
      : "Winner is:" + winner.player
    : "Next player is:" + (xIsNext ? " X " : " O ");

  return (
    <div className={styles.gameInfo}>
      <div className={styles.status}>{status}</div>
      <ol className={styles.travelList}>{moves}</ol>
    </div>
  );
}
