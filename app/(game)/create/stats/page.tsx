"use client"

import Button from "@/component/button";
import CounterBar from "@/component/counter_bar";
import StatBox from "@/component/stat_box";
import { GameContext } from "@/lib/context/game";
import { rolLStatistics } from "@/lib/types/character";
import { useContext } from "react";

import styles from '@/css/statistics.module.css';

export default function CreateStats() {
  const game = useContext(GameContext);
  const statistics = game.statistics;
  const setStatistics = game.setStatistics;

  return (
    <>
      <h3>Statistics</h3>

      <CounterBar counter={statistics.hp} />
      <CounterBar counter={statistics.sanity} />

      <section className={styles.stat_list}>
        <StatBox stat={statistics.strength} />
        <StatBox stat={statistics.constitution} />
        <StatBox stat={statistics.size} />
        <StatBox stat={statistics.dexterity} />
        <StatBox stat={statistics.appearance} />
        <StatBox stat={statistics.education} />
        <StatBox stat={statistics.intelligence} />
        <StatBox stat={statistics.power} />
      </section>

      <Button href="" onClick={() => {
        setStatistics(rolLStatistics());
      }}>Reroll</Button>

      <Button href="/create">Done</Button>
    </>
  )
}