import { describe, test, expect } from "vitest";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { validateDeck } from "../src/schema/taleem-schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const goldenPath = path.resolve(
  __dirname,
  "../src/specs/GoldenDeckV2-8Apr2026.json"
);

describe("Golden Deck Schema Validation", () => {
  test("golden deck should pass zod schema", () => {
    const raw = fs.readFileSync(goldenPath, "utf-8");
    const deck = JSON.parse(raw);

    expect(() => validateDeck(deck)).not.toThrow();
  });
});