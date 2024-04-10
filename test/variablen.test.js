import { describe, expect, test } from "vitest";

import { a, b, c } from "../src/einfach/variablen";

describe("Variablen", () => {
  test("var laesst sich neu zuweisen", () => {
    expect(a).toBe(3);
  });

  test("let laesst sich neu zuweisen", () => {
    expect(b).toBe(4);
  });

  test("const laesst sich nich neu zuweisen", () => {
    expect(c).toBe(3);
  });
});
