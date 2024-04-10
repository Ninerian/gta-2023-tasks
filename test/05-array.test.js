import { expect, describe, test } from "vitest";

import {
  zahlen,
  wochentage,
  sonntag,
  anzahlZahlen,
  zahlen2,
  zahlen3,
  zahlen4,
  zahlen5,
  zahlen6,
  zahlen7,
  zahlen8,
} from "../src/einfach/05-array";

describe("Array", () => {
  test("Zahlen", () => {
    expect(zahlen).toEqual([1, 2, 3, 4, 5]);
  });

  test("Wochentage", () => {
    expect(wochentage).toEqual([
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonntag",
    ]);
  });

  test("Sonntag", () => {
    expect(sonntag).toEqual("Sonntag");
  });

  test("Anzahl Zahlen", () => {
    expect(anzahlZahlen).toEqual(5);
  });

  test("Zahl am Ende hinzufuegen", () => {
    expect(zahlen2).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Zahl am Ende entfernen", () => {
    expect(zahlen3).toEqual([1, 2, 3, 4]);
  });

  test("Zahl am Anfang entfernen", () => {
    expect(zahlen4).toEqual([2, 3, 4, 5]);
  });

  test("Zahl am Anfang hinzufuegen", () => {
    expect(zahlen5).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("Zahl in die Liste einfuegen", () => {
    expect(zahlen6).toEqual([1, 2, 3, 4, 4.5, 5]);
  });

  test("Zahl in der Liste austauschen", () => {
    expect(zahlen7).toEqual([1, 2, 3.5, 4, 5]);
  });

  test("Zahlen aus einer Liste kopieren", () => {
    expect(zahlen8).toEqual([3, 4]);
  });
});
