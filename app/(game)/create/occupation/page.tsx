"use client"

import Button from "@/component/button";
import { GameContext } from "@/lib/context/game"
import { Occupation } from "@/lib/types/character";
import { useContext } from "react";

import styles from '@/css/form.module.css'

export default function CreateOccupation() {
  const { occupation, setOccupation } = useContext(GameContext);

  return (
    <>
      <h3>Occupation</h3>

      <p><em>"An occupation shows how an investigator makes a living, be it as a doctor, a student, or lowlife fraudster. An occupation also reflects a particular investigator’s field of expertise, and
        so dictates which of their skills should be higher"</em> - Call of Cthulhu Rulebook</p>

      <form className={styles.form}>
        <label htmlFor="occupation">Occupation</label>
        <select className={styles.select} id="occupation" value={occupation} onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
          setOccupation(+ev.target.value);
        }}>
          <option value={Occupation.ANTIQUARIAN}>Antiquarian</option>
          <option value={Occupation.DOCTOR_OF_MEDICINE}>Doctor of Medicine</option>
          <option value={Occupation.JOURNALIST}>Journalist</option>
          <option value={Occupation.PRIVATE_INVESTIGATOR}>Private Investigator</option>
          <option value={Occupation.PROFESSOR}>Professor</option>
        </select>
      </form >

      <Button href="/create">Done</Button>
    </>
  )
}