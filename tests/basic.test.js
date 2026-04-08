import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("TaleemBuilder - basic flow", () => {
  test("builds a simple deck with correct timeline", () => {
    const b = new TaleemBuilder();

    b.meta({ name: "Test Deck" });

    b.at(0).titleAndSubtitle()
      .title("Hello", 0)
      .subtitle("World", 2);

    b.at(10).bulletList()
      .heading("Points", 10)
      .bullet("A", 11)
      .bullet("B", 12);

    b.end(20);

    const deck = b.build();

    expect(deck.version).toBe("taleem-deck-v2");
    expect(deck.deck.length).toBe(2);

    expect(deck.deck[0].end).toBe(10);
    expect(deck.deck[1].end).toBe(20);
  });
});