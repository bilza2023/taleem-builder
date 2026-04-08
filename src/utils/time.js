// src/utils/time.js

export function ensureNumber(time) {
    if (typeof time !== "number") {
      throw new Error("Time must be a number");
    }
  }