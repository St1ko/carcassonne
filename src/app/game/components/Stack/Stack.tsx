"use client";

import React, { useContext } from "react";

import { GameContext } from "@/app/game/context/gameContext";

import styles from "./Stack.module.css";
import { Card } from "../Card/Card";

export const Stack: React.FC = () => {
  const { stack } = useContext(GameContext) as GameContextType;

  const card = stack[stack.length - 1];

  return (
    <div className={styles.stack}>{card && <Card card={card}></Card>}</div>
  );
};
