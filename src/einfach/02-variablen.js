//@ts-check

/**
 * Es gibt 3 Arten von Variablen in JavaScript
 *
 * 1. var (veraltet)
 *  - kann immer wieder neu deklariert werden
 *  - hat einen globalen Scope
 * 2. let
 *  - kann immer wieder neu deklariert werden
 *  - hat einen block Scope
 * 3. const
 *  - kann nicht neu deklariert werden
 *  - hat einen block Scope
 */

export var a = 1;

// entferne die // um a einen neuen Wert zuzuweisen
// a = 3;

{
  // In einem Block bleibt die Variable nur in diesem Block gültig
  let b1 = 3;
}

// b1 ist hier nicht mehr gültig

export let b = 3;

// entferne die // um b einen neuen Wert zuzuweisen
// b = 4;

export const c = 3;

c = 4; // Fehler, da c nicht neu deklariert werden kann
