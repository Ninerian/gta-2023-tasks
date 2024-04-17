import {
  createScoreBoard,
  addPlayer,
  removePlayer,
  updateScore,
  applyMondayBonus,
  normalizeScore,
} from "./index";

import { describe, test, expect } from "vitest";

describe("createScoreBoard", () => {
  test("erstellt eine neue Karte mit einem Testeintrag", () => {
    const expected = { "The Best Ever": 1000000 };
    expect(createScoreBoard()).toEqual(expected);
  });
});

describe("addPlayer", () => {
  test("fügt dem Spielfeld einen Spieler und eine Punktzahl hinzu", () => {
    const scoreBoard = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
    };

    const expected = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
      "Jesse Johnson": 1337,
    };

    const actual = addPlayer(scoreBoard, "Jesse Johnson", 1337);
    expect(actual).toEqual(expected);
  });

  test("gibt die vorhandene Anzeigetafel zurück", () => {
    const scoreBoard = {};
    const actual = addPlayer(scoreBoard, "Jesse Johnson", 1337);

    // This checks that the same object that was passed in is returned.
    // https://jestjs.io/docs/expect#tobevalue
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });
});

describe("removePlayer", () => {
  test("entfernt einen Spieler von der Anzeigetafel", () => {
    const scoreBoard = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
      "Jesse Johnson": 1337,
    };

    const expected = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
    };

    const actual = removePlayer(scoreBoard, "Jesse Johnson");
    expect(actual).toEqual(expected);

    // This checks that the same object that was passed in is returned.
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });

  test("tut nichts, wenn der Spieler nicht auf der Tafel ist", () => {
    const scoreBoard = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
      "Jesse Johnson": 1337,
    };

    const actual = removePlayer(scoreBoard, "Bruno Santangelo");
    expect(actual).toEqual(scoreBoard);

    // This checks that the same object that was passed in is returned.
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });
});

describe("updateScore", () => {
  test("erhöht die Punktzahl eines Spielers", () => {
    const scoreBoard = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 0,
      "Jesse Johnson": 1337,
    };

    const expected = {
      "Amil Pastorius": 99373,
      "Min-seo Shin": 1999,
      "Jesse Johnson": 2674,
    };

    updateScore(scoreBoard, "Min-seo Shin", 1999);
    const actual = updateScore(scoreBoard, "Jesse Johnson", 1337);
    expect(actual).toEqual(expected);

    // This checks that the same object that was passed in is returned.
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });
});

describe("applyMondayBonus", () => {
  test("fügt 100 Punkte für alle Spieler hinzu", () => {
    const scoreBoard = {
      "Amil Pastorius": 345,
      "Min-seo Shin": 19,
      "Jesse Johnson": 122,
    };

    const expected = {
      "Amil Pastorius": 445,
      "Min-seo Shin": 119,
      "Jesse Johnson": 222,
    };

    const actual = applyMondayBonus(scoreBoard);
    expect(actual).toEqual(expected);

    // This checks that the same object that was passed in is returned.
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });

  test("macht nichts, wenn die Anzeigetafel leer ist", () => {
    const scoreBoard = {};
    const actual = applyMondayBonus(scoreBoard);
    expect(actual).toEqual({});

    // This checks that the same object that was passed in is returned.
    expect(Object.is(actual, scoreBoard)).toBe(true);
  });
});

describe("normalizeScore", () => {
  test("wendet die Normalisierungsfunktion", () => {
    const params = {
      score: 45,
      normalizeFunction: function (score) {
        return score * 3 - 10;
      },
    };

    expect(normalizeScore(params)).toEqual(125);
  });

  test("funktioniert bei verschiedenen Parametern", () => {
    const params = {
      score: 2100,
      normalizeFunction: function (score) {
        return score / 2 + 100;
      },
    };

    expect(normalizeScore(params)).toEqual(1150);
  });
});
