// src/core/Timeline.js

export function resolveTimeline(slides, finalEnd) {
    if (!slides.length) return [];
  
    const result = [];
  
    for (let i = 0; i < slides.length; i++) {
      const current = slides[i];
      const next = slides[i + 1];
  
      const start = current.start;
      const end = next ? next.start : finalEnd;
  
      if (end === undefined || end === null) {
        throw new Error("Final end time missing");
      }
  
      if (end <= start) {
        throw new Error(`Invalid timeline: end <= start at slide ${i}`);
      }
  
      result.push({
        ...current,
        start,
        end
      });
    }
  
    return result;
  }