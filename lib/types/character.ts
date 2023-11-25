"use client"

import { roll } from "../dice";

export enum Occupation {
  ANTIQUARIAN,
  DOCTOR_OF_MEDICINE,
  JOURNALIST,
  PRIVATE_INVESTIGATOR,
  PROFESSOR
};

export interface Counter {
  name: string,
  description: string,
  max: number,
  current: number
}

export interface Stat {
  name: string,
  description: string,
  value: number
}

export interface Statistics {
  hp: Counter,
  sanity: Counter,
  luck: number
  strength: Stat,
  constitution: Stat,
  size: Stat,
  dexterity: Stat,
  appearance: Stat,
  intelligence: Stat,
  power: Stat,
  education: Stat,

};

export function newStat(name: string, value: number, description: string = ""): Stat {
  return {
    name,
    description,
    value
  }
}

export function newCounter(name: string, max: number, description: string = ""): Counter {
  return {
    name,
    description,
    max,
    current: max
  };
}

export function rolLStatistics(): Statistics {
  let constitution: number = roll(3, 6) * 5;
  let size: number = roll(2, 6, 6) * 5;
  let hp: number = Math.floor((constitution + size) / 10);
  let power: number = roll(3, 6) * 5;
  let sanity = power;

  return {
    strength: newStat("STR", roll(3, 6) * 5),
    constitution: newStat("CON", constitution),
    size: newStat("SIZ", size),
    dexterity: newStat("DEX", roll(3, 6) * 5),
    appearance: newStat("APP", roll(3, 6) * 5),
    intelligence: newStat("INT", roll(2, 6, 6) * 5),
    power: newStat("POW", power),
    education: newStat("EDU", roll(2, 6, 6) * 5),
    luck: roll(3, 6) * 5,
    hp: newCounter("HP", hp),
    sanity: newCounter("SAN", sanity)
  }
}