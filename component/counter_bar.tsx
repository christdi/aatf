import { Counter } from "@/lib/types/character";

import styles from '@/css/counter.module.css'

export interface CounterBarProperties {
  counter: Counter
}

export default function CounterBar({ counter }: CounterBarProperties) {
  return (
    <div className={styles.counter_bar}>
      <span className={styles.counter_name}>{counter.name}</span>
      <span className={styles.counter_max}>
        <span className={styles.counter_current} />
        {counter.current}
      </span>
    </div >
  )
}