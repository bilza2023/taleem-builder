import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Golden Deck", () => {
  test("full system should produce stable structure", () => {
    const b = new TaleemBuilder();

    b.meta({ name: "Golden Test" });

    b.background()
      .color("#111111")
      .opacity(0.3);

    // --- minimal golden subset (expand later)

    b.at(0).titleAndSubtitle()
      .title("Taleem Slides", 0)
      .subtitle("Structured", 3);

    b.at(10).bulletList()
      .heading("Points", 10)
      .bullet("A", 12);

    b.at(20).eq()
      .eqHeading("EQ", 20)
        .eqSpText("Intro")
      .eqMath("a+b", 22)
        .eqSpText("Step");

    b.end(30);

    const deck = b.build();

    // 🔍 assertions (IMPORTANT)

    expect(deck.version).toBe("taleem-deck-v2");
    expect(deck.deck.length).toBe(3);

    // timeline chain
    expect(deck.deck[0].end).toBe(deck.deck[1].start);
    expect(deck.deck[1].end).toBe(deck.deck[2].start);

    // eq shape
    const eq = deck.deck[2];
    expect(eq.type).toBe("eq");
    expect(eq.data.length).toBe(2);
    expect(eq.data[0].spItems.length).toBe(1);
  });
});