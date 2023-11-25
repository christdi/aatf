"use client"

import React, { createContext } from "react";
import { Statistics, Occupation } from "../types/character";

export interface GameContext {
  occupation: Occupation,
  setOccupation: React.Dispatch<React.SetStateAction<Occupation>>
  statistics: Statistics,
  setStatistics: React.Dispatch<React.SetStateAction<Statistics>>
}

export const GameContext = createContext<GameContext>({} as GameContext);