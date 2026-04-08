import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Errors", () => {
  test("throws if slide used without at()", () => {
    const b = new TaleemBuilder();

    expect(() => {
      b.titleAndSubtitle();
    }).toThrow();
  });
});
