"use client"

import Button from "@/component/button"

export default function Home() {
  return (
    <main>
      <Button href="/create">Play</Button>
      <p>This is an unofficial online adaption of the Call of Cthulhu solo adventure <em>"Alone Against The Flames"</em>.</p>
      <p>By pressing play, you will be able to create a character and play through the adventure.</p>
      <p>Good luck!</p>
    </main>
  )
}
