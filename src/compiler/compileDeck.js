// src/compiler/compileDeck.js

import { resolveTimeline } from "../core/Timeline.js";
import { compileSlide } from "./compileSlide.js";
import { compileEq } from "./compileEq.js";

export function compileDeck(ctx) {
  const slides = ctx._getSlides();
  const end = ctx._getEnd();

  const timelineSlides = resolveTimeline(slides, end);

  const compiled = timelineSlides.map(slide => {
    if (slide.type === "eq") {
      return compileEq(slide);
    }

    return compileSlide(slide);
  });

  return {
    version: "taleem-deck-v2",
    name: ctx._meta.name,
    background: ctx._background,
    deck: compiled
  };
}