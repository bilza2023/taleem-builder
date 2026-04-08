import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Timeline", () => {
  test("slides chain correctly without gaps", () => {
    const b = new TaleemBuilder();

    b.at(0).titleAndSubtitle().title("A", 0);
    b.at(10).titleAndSubtitle().title("B", 10);
    b.at(20).titleAndSubtitle().title("C", 20);

    b.end(30);

    const deck = b.build();

    expect(deck.deck[0].end).toBe(10);
    expect(deck.deck[1].end).toBe(20);
    expect(deck.deck[2].end).toBe(30);
  });
});