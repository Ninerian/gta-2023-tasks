import { timeToMixJuice, limesToCut, remainingOrders } from "./index";
import { describe, test, expect } from "vitest";

describe("timeToMixJuice", () => {
  test("gibt die richtige Zeit für 'Pure Strawberry Joy' zurück", () => {
    expect(timeToMixJuice("Pure Strawberry Joy")).toBe(0.5);
  });

  test("liefert die richtigen Zeiten für alle anderen Standardmenüpunkte", () => {
    expect(timeToMixJuice("Energizer")).toBe(1.5);
    expect(timeToMixJuice("Green Garden")).toBe(1.5);
    expect(timeToMixJuice("Tropical Island")).toBe(3);
    expect(timeToMixJuice("Alles oder Nichts")).toBe(5);
  });

  test("liefert die gleiche Zeit für alle anderen Säfte", () => {
    const defaultTime = 2.5;
    expect(timeToMixJuice("Limetime")).toBe(defaultTime);
    expect(timeToMixJuice("Manic Organic")).toBe(defaultTime);
    expect(timeToMixJuice("Papaya & Pfirsich")).toBe(defaultTime);
  });
});

describe("limesToCut", () => {
  test("berechnet die Anzahl der Limetten, die benötigt werden, um den Zielvorrat zu erreichen", () => {
    const limes = [
      "small",
      "groß",
      "groß",
      "mittel",
      "klein",
      "groß",
      "groß",
      "mittel",
    ];
    expect(limesToCut(42, limes)).toBe(6);

    expect(limesToCut(4, ["mittel", "klein"])).toBe(1);
  });

  test("verbraucht alle Limetten, wenn nicht genug vorhanden sind, um das Ziel zu erreichen", () => {
    const limes = ["small", "groß", "groß", "mittel", "klein", "groß", "groß"];

    expect(limesToCut(80, limes)).toBe(7);
  });

  test("wenn keine neuen Keile benötigt werden, werden keine Limetten geschnitten", () => {
    expect(limesToCut(0, ["small", "large", "medium"])).toBe(0);
  });

  test("funktioniert, wenn keine Limetten vorhanden sind", () => {
    expect(limesToCut(10, [])).toBe(0);
  });
});

describe("remainingOrders", () => {
  test("ermittelt korrekt die verbleibenden Bestellungen", () => {
    const orders = [
      "Tropical Island",
      "Energizer",
      "Limetime",
      "Alles oder Nichts",
      "Pure Erdbeerfreude",
    ];
    const expected = ["Alles oder Nichts", "Reine Erdbeerfreude"];

    expect(remainingOrders(7, orders)).toEqual(expected);
  });

  test("behandelt Bestellungen, die begonnen wurden, weil noch Zeit übrig war, korrekt", () => {
    const orders = [
      "Pure Strawberry Joy",
      "Reine Erdbeerfreude",
      "Vitalität",
      "Tropical Island",
      "Alles oder Nichts",
      "Alles oder Nichts",
      "Alles oder Nichts",
      "Grüner Garten",
      "Limetime",
    ];
    const expected = ["Alles oder Nichts", "Grüner Garten", "Limetime"];

    expect(remainingOrders(13, orders)).toEqual(expected);
  });

  test("zählt alle Bestellungen als erfüllt, wenn genügend Zeit vorhanden ist", () => {
    const orders = [
      "Energizer",
      "Green Garden",
      "Ruby Glow",
      "Pure Strawberry Joy",
      "Tropical Island",
      "Limetime",
    ];

    expect(remainingOrders(12, orders)).toEqual([]);
  });

  test("funktioniert, wenn nur noch sehr wenig Zeit übrig ist", () => {
    const orders = ["Bananas Gone Wild", "Pure Strawberry Joy"];
    const expected = ["Pure Strawberry Joy"];

    expect(remainingOrders(0.2, orders)).toEqual(expected);
  });
});
