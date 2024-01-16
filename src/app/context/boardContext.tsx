"use client";

import React from "react";

import { cards, shuffle } from "../models/cards";

export const BoardContext = React.createContext<BoardContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const shuffledCards = shuffle(cards);

const BoardContextProvider: React.FC<Props> = ({ children }) => {
  const [stack, setStack] = React.useState<CardType[]>(shuffledCards);
  const [board, setBoard] = React.useState<BoardType>({});

  const moveCard = (card: CardType, to: TileType, from?: TileType) => {
    if (from === undefined) {
      setStack(stack.slice(0, -1));
    } else {
      delete board[from];
    }

    setBoard({ ...board, [to]: card });
  };

  return (
    <BoardContext.Provider value={{ board, stack, moveCard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
