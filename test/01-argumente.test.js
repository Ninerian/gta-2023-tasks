import { expect, describe, test } from "vitest";

import { plus, minus } from "../src/einfach/01-argumente";

describe("Zwei zahlen sollen addiert werden", () => {
  test("1 + 1 = 2", () => {
    const result = plus(1, 1);
    expect(result).toBe(2);
  });

  test("1 + 2 = 3", () => {
    const result = plus(1, 2);
    expect(result).toBe(3);
  });
});

describe("Zwei Zahlen sollen subtrahiert werden", () => {
  test("1 + 1 = 2", () => {
    const result = minus(1, 1);
    expect(result).toBe(0);
  });

  test("1 + 2 = 3", () => {
    const result = minus(2, 1);
    expect(result).toBe(1);
  });
});
