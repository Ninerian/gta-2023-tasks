import { expect, describe, test } from "vitest";

import { if1, ifElse, ifElseIf } from "../src/einfach/06-bedingungen";

describe("06-bedingungen", () => {
  test("if", () => {
    expect(if1(1)).toBe("Wahr");
    expect(if1(0)).toBe("Falsch");
  });

  test("ifElse", () => {
    expect(ifElse(1)).toBe("Wahr");
    expect(ifElse(0)).toBe("Falsch");
  });

  test("ifElseIf", () => {
    expect(ifElseIf(0, 0)).toBe("Falsch");
    expect(ifElseIf(1, 0)).toBe("Wahr");
    expect(ifElseIf(0, 1)).toBe("Wahr");
  });

  test("switchCase", () => {
    expect(switchCase(1)).toBe("Spieler 1");
    expect(switchCase(2)).toBe("Spieler 2");
    expect(switchCase(3)).toBe("Unbekannt");
  });
});
