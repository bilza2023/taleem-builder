// src/utils/guards.js

export function ensureSlideExists(slide) {
    if (!slide) {
      throw new Error("No active slide");
    }
  }
  
  export function ensureSlideType(slide, type) {
    if (slide.type !== type) {
      throw new Error(`Expected slide type ${type}, got ${slide.type}`);
    }
  }