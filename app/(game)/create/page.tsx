"use client"

import Button from "@/component/button";
import { GameContext } from "@/lib/context/game";
import { useContext } from "react";

export default function CreateCharacter() {
  const game: GameContext = useContext(GameContext);

  return (
    <main>
      <Button href="/create/stats">Statistics</Button>
      <Button href="/create/occupation">Occupation</Button>
      <Button href="/play">Start</Button>
    </main>
  )
}