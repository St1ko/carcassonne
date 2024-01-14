type BoardLocation = TileType | "stack";

type BoardType = Record<BoardLocation, CardType>;

type BoardContextType = {
  board: BoardType;
  moveCard: (card: CardType, from: BoardLocation, to: BoardLocation) => void;
  // rotateCard: (id: string) => void;
};
