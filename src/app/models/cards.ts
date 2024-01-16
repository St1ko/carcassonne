export const cards: CardType[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

export const colorMapping: Record<CardType["id"], string> = {
  "1": "red",
  "2": "green",
  "3": "blue",
  "4": "yellow",
  "5": "pink",
};

export const shuffle = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
