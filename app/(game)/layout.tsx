"use client"

import { GameContext } from '@/lib/context/game';
import { Occupation, Statistics, rolLStatistics } from '@/lib/types/character';
import { useEffect, useState } from 'react';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [occupation, setOccupation] = useState<Occupation>(Occupation.ANTIQUARIAN);
  const [statistics, setStatistics] = useState<Statistics>({} as Statistics);

  useEffect(() => {
    setStatistics(rolLStatistics());
  }, []);

  return (
    <>
      <GameContext.Provider value={{ occupation, setOccupation, statistics, setStatistics }}>
        {children}
      </GameContext.Provider>
    </>
  )
}
