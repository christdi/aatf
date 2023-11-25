"use client"

import { Stat } from "@/lib/types/character"
import styles from '@/css/statbox.module.css'

export interface StatBoxProperties {
  stat: Stat
}

export default function StatBox({ stat }: StatBoxProperties) {
  return (
    <span>
      <dt className={styles.stat_name}>{stat.name}</dt>
      <dd>{stat.value}</dd>
    </span>
  )
}