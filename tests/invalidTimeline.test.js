import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Invalid Timeline", () => {
  test("throws when slide start time goes backwards", () => {
    const b = new TaleemBuilder();

    b.at(10).titleAndSubtitle().title("A", 10);

    // ❌ invalid: going backwards
    b.at(5).titleAndSubtitle().title("B", 5);

    b.end(20);

    expect(() => b.build()).toThrow();
  });
});