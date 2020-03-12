import React from "react";
import cn from "classnames";
import styles from "./Square.module.scss";

export type SquareValue = "X" | "O" | undefined;

interface SquareProps {
  onClick: () => void;
  value?: SquareValue;
  winner?: boolean;
}

export function Square({ onClick, value, winner }: SquareProps) {
  return (
    <button
      className={
        // posso colocar value no cn
        cn(styles.square, {
          [styles.x]: value === "X",
          [styles.o]: value === "O",
          [styles.winner]: winner
        })
        /* outra maneira sem ser com cn para associar as cores a x e o
        styles.square +
        " " +
        (value ? (value === "X" ? styles.x : styles.o) : "") */
      }
      //data-value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
