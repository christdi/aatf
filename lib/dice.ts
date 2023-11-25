"use client"

export function roll(number: number, size: number, mod: number = 0) {
  let sum: number = 0;

  for (let i: number = 0; i < number; i++) {
    const min: number = Math.ceil(1);
    const max: number = Math.floor(size);

    sum += Math.floor(Math.random() * (max - min + 1) + min);
  }

  return sum += mod;
}
