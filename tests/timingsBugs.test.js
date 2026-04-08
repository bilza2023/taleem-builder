import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Default Timing", () => {
  test("item without time falls back to slide start", () => {
    const b = new TaleemBuilder();

    b.at(5).bulletList()
      .bullet("A"); // no time

    b.end(10);

    const deck = b.build();

    expect(deck.deck[0].data[0].timings[0].time).toBe(5);
  });
});