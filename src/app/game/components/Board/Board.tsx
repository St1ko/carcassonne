"use client";

import React from "react";

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

import {
  useMutation,
  useOthers,
  useUpdateMyPresence,
} from "root/liveblocks.config";

import styles from "./Board.module.css";
import { cards, shuffle } from "../../models/cards";
import { Cursor, cursorColors } from "../Cursor/Cursor";
import { Field } from "../Field/Field";
import { Stack } from "../Stack/Stack";

export function Board() {
  const updateMyPresence = useUpdateMyPresence();
  const others = useOthers();
  const userCount = others.length;

  const deleteStorage = useMutation(({ storage }) => {
    const game = storage.get("game");

    game.set("board", new LiveMap());
    game.set("stack", new LiveList(shuffle(cards)));
  }, []);

  return (
    <div
      className={styles.board}
      onPointerMove={(e) =>
        updateMyPresence({
          cursor: {
            x: Math.round(e.clientX),
            y: Math.round(e.clientY),
          },
        })
      }
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    >
      <aside className={styles.aside}>
        <button onClick={deleteStorage}>Reset</button>
        <div>There are {userCount} other user(s) online</div>
        <Stack />
      </aside>

      <Field size={12} />

      {others.map(
        ({ connectionId, presence }) =>
          presence.cursor && (
            <Cursor
              key={connectionId}
              color={cursorColors[connectionId % cursorColors.length]}
              x={presence.cursor.x}
              y={presence.cursor.y}
            />
          )
      )}
    </div>
  );
}
