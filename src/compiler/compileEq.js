// src/compiler/compileEq.js

import { toTimings } from "./timings.js";

export function compileEq(slide) {
  const data = slide.items.map(line => ({
    name: line.type,
    content: line.text,
    timings: toTimings(line.at),
    spItems: (line.spItems || []).map(sp => ({
      name: sp.type,
      content: sp.text
    }))
  }));

  return {
    type: "eq",
    start: slide.start,
    end: slide.end,
    data
  };
}