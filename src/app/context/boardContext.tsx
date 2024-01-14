import React from "react";

export const BoardContext = React.createContext<BoardContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const BoardContextProvider: React.FC<Props> = ({ children }) => {
  const [board, setBoard] = React.useState<BoardType>({
    stack: { id: "", color: "" },
  });

  const moveCard = (card: CardType, from: BoardLocation, to: BoardLocation) => {
    delete board[from];

    setBoard({ ...board, [to]: card });
  };

  return (
    <BoardContext.Provider value={{ board, moveCard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
