"use client"

import CounterBar from "@/component/counter_bar";
import { GameContext } from "@/lib/context/game";
import { useContext } from "react";

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const game = useContext(GameContext);
  const statistics = game.statistics;

  return (
    <>
      <ul>
        <li>Scene</li>
        <li>Statistics</li>
        <li>Skills</li>
        <li>Inventory</li>
      </ul>

      <CounterBar counter={statistics.hp} />
      <CounterBar counter={statistics.sanity} />

      {children}
    </>
  )
}
