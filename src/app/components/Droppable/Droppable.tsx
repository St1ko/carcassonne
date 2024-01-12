"use client";

import React from "react";

import { useDroppable } from "@dnd-kit/core";

import styles from "./Droppable.module.css";

interface DroppableProps {
  id: string;
  children?: React.ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      className={`${styles.droppable} ${isOver ? styles.over : ""}`}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}
