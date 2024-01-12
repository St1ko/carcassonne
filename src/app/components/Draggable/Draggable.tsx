"use client";

import React from "react";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import styles from "./Draggable.module.css";

interface DraggableProps {
  id: string;
  children?: React.ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? { transform: CSS.Translate.toString(transform) }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className={styles.draggable}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
