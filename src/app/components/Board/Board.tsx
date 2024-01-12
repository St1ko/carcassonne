"use client";

import React, { useState } from "react";

import { DndContext } from "@dnd-kit/core";

import styles from "./Board.module.css";
import { Draggable } from "../Draggable/Draggable";
import { Droppable } from "../Droppable/Droppable";

export function Board() {
  const [width, height] = [8, 8];
  const [parent, setParent] = useState(null);

  const fields = Array.from({ length: width * height }, (_, i) => i.toString());
  const draggableMarkup = <Draggable id="draggable"></Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.board}>
        <aside className={styles.aside}>
          <div className={styles.stack}>
            <Droppable id="stack">
              {(parent === "stack" || parent === null) && draggableMarkup}
            </Droppable>
          </div>
        </aside>
        <div
          className={styles.field}
          style={{ gridTemplateColumns: `repeat(${width}, var(--tile-size))` }}
        >
          {fields.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id && draggableMarkup}
            </Droppable>
          ))}
        </div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const { over } = event;

    setParent(over ? over.id : null);
  }
}
