# Carcassonne (WIP)

Carcassonne is a web based version of the popular tabletop game Carcassonne.

## Todo

- [x] Game board with tiles where cards can be dragged to
- [x] Local state management
- [x] Card stack with draggable cards
- [ ] Multiplayer lobbies (using [Liveblocks.io](https://liveblocks.io/))
  - [ ] Allow creation of new lobbies
  - [ ] A game can be started, locking in the players
- [ ] Round based player moves
  - [ ] Player needs to play one card from stack
  - [ ] Board is locked after round
- [ ] Card side properties (city, road, etc.)
- [ ] Card rotation
- [ ] Card placement validation
- [ ] ...

## Run locally

Install dependendies and run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)
