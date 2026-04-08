// src/compiler/timings.js

export function toTimings(at, slideStart) {
  const time = (at === undefined || at === null)
    ? slideStart
    : at;

  return [
    {
      time,
      event: "show"
    }
  ];
}