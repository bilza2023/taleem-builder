

import { describe, test, expect } from "vitest";
import TaleemBuilder from "../src/index.js";

describe("Errors", () => {
  test("throws if end() is missing", () => {
    const b = new TaleemBuilder();

    b.at(0).titleAndSubtitle().title("A", 0);

    expect(() => b.build()).toThrow();
  });
});