"use client";

import React from "react";

import { useStorage } from "root/liveblocks.config";

import styles from "./Stack.module.css";
import { Card } from "../Card/Card";

export const Stack: React.FC = () => {
  const stack = useStorage((root) => root.game.stack);

  const card = stack[0];

  return (
    <div className={styles.stack}>{card && <Card card={card}></Card>}</div>
  );
};
