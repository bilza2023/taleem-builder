import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("EQ Slide", () => {
  test("eq builds correct structure with spItems", () => {
    const b = new TaleemBuilder();

    b.at(0).eq()
      .eqHeading("H", 0)
        .eqSpText("S1")
      .eqMath("M", 2)
        .eqSpImage("img.png");

    b.end(10);

    const deck = b.build();
    const eq = deck.deck[0];

    expect(eq.type).toBe("eq");
    expect(eq.data.length).toBe(2);

    expect(eq.data[0].spItems[0].name).toBe("text");
    expect(eq.data[1].spItems[0].name).toBe("image");
  });
});