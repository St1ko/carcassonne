type BoardType = Record<TileType, CardType>;

type BoardContextType = {
  board: BoardType;
  stack: CardType[];
  moveCard: (card: CardType, to: TileType, from?: TileType) => void;
  // rotateCard: (id: string) => void;
};