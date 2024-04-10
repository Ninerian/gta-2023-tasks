import { expect, describe, test } from "vitest";

import { anzahl, countdown } from "../src/einfach/while-schleife";

describe("While-Schleife", () => {
  test("Anzahl", () => {
    expect(anzahl).toBe(5);
  });

  test("Countdown", () => {
    expect(countdown).toBe(0);
  });
});
