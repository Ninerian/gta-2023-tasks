import { expect, describe, test } from "vitest";

import { anzahl, countdown } from "../src/einfach/03-for-schleife";

describe("For-Schleife", () => {
  test("Anzahl", () => {
    expect(anzahl).toBe(5);
  });

  test("Countdown", () => {
    expect(countdown).toBe(0);
  });
});
