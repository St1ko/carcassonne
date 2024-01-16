"use client";

import React, { useContext } from "react";

import { BoardContext } from "@/app/context/boardContext";

import styles from "./Stack.module.css";
import { Card } from "../Card/Card";

export const Stack: React.FC = () => {
  const { stack } = useContext(BoardContext) as BoardContextType;

  const card = stack[stack.length - 1];

  return (
    <div className={styles.stack}>{card && <Card card={card}></Card>}</div>
  );
};
