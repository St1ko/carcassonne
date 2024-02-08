"use client";

import React from "react";

import { useOthers, useUpdateMyPresence } from "root/liveblocks.config";

import styles from "./Board.module.css";
import { Cursor, cursorColors } from "../Cursor/Cursor";
import { Field } from "../Field/Field";
import { Stack } from "../Stack/Stack";

export function Board() {
  const updateMyPresence = useUpdateMyPresence();
  const others = useOthers();
  const userCount = others.length;

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
