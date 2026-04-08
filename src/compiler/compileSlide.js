import { toTimings } from "./timings.js";

export function compileSlide(slide) {
  const data = slide.items.map(item => {
    const base = {
      name: item.type,
      content: item.text,
      timings: toTimings(item.at)
    };

    // 🔥 preserve spItems if present
    if (item.spItems && item.spItems.length > 0) {
      base.spItems = item.spItems.map(sp => ({
        name: sp.name,
        content: sp.content
      }));
    }

    return base;
  });

  return {
    type: slide.type,
    start: slide.start,
    end: slide.end,
    data
  };
}