//@ts-check

/**
 * Bedingungen erlauben es uns, Code nur unter bestimmten Umständen auszuführen.
 *
 * In JavaScript gibt es verschiedene Arten von Bedingungen:
 * - if
 *   Bei der if Bedingung wird ein Codeblock nur ausgeführt, wenn eine Bedingung wahr ist.
 *
 * - else
 *   Wenn die Bedingung in einem if-Block nicht wahr ist, kann ein else-Block ausgeführt werden.
 *
 * - else if
 *   Wenn mehrere Bedingungen geprüft werden sollen, kann ein else if-Block verwendet werden.
 *
 * - switch
 *   Wenn mehrere Bedingungen geprüft werden sollen, kann ein switch-Block verwendet werden.
 */

/**
 *   Bei der if Bedingung wird ein Codeblock nur ausgeführt, wenn eine Bedingung wahr ist.
 * - Beispiel:
 *   ```javascript
 *   if (bedingung) {
 *      // Code wird nur ausgeführt, wenn Bedingung wahr ist
 *   }
 *   ```
 *
 * Diese Funktion gibt den Text "Wahr" zurueck, wenn die Bedingung 1 ist.
 * ansonsten gibt sie den Text "Falsch" zurueck.
 *
 * @param {0|1} bedingung
 *
 * @returns string
 */
export function if1(bedingung) {
  let x = "Falsch";

  // schreibe eine if Bedingung, die prüft, ob bedingung wahr ist
  // und setze x auf "Wahr", wenn die Bedingung wahr ist

  return x;
}

/**
 *   Wenn die Bedingung in einem if-Block nicht wahr ist, kann ein else-Block ausgeführt werden.
 *   Beispiel:
 *   ```javascript
 *   if (bedingung) {
 *    // Code wird nur ausgeführt, wenn Bedingung wahr ist
 *   } else {
 *    // Code wird ausgeführt, wenn Bedingung nicht wahr ist
 *   }
 *   ```

 * Diese Funktion gibt den Text "Wahr" zurueck, wenn die Bedingung 1 ist.
 * ansonsten gibt sie den Text "Falsch" zurueck.
 *
 * @param {0|1} bedingung
 *
 * @returns string
 */
export function ifElse(bedingung) {
  let x = "";

  // schreibe eine if Bedingung, die prüft, ob bedingung wahr ist
  // und setze x auf "Wahr", wenn die Bedingung wahr ist
  // ansonsten setze x auf "Falsch"

  return x;
}

/**
 *
 *   Wenn mehrere Bedingungen geprüft werden sollen, kann ein else if-Block verwendet werden.
 *   Beispiel:
 *   ```javascript
 *   if (bedingung1) {
 *      // Code wird nur ausgeführt, wenn Bedingung1 wahr ist
 *   } else if (bedingung2) {
 *   // Code wird nur ausgeführt, wenn Bedingung2 wahr ist
 *   } else {
 *   // Code wird ausgeführt, wenn keine der Bedingungen wahr ist
 *   }
 *   ```
 *
 * Diese Funktion gibt den Text "Wahr" zurueck, wenn die erste Bedingung wahr ist.
 * den Text "Falsch" zurueck, wenn die zweite Bedingung wahr ist.
 * ansonsten gibt sie den Text "Unbekannt" zurueck.
 *
 * @param {0|1} bedingung
 * @param {0|1} bedingung2
 *
 * @returns string
 */
export function ifElseIf(bedingung, bedingung2) {
  let x = "";

  // schreibe eine if Bedingung, die prüft, ob bedingung gleich 1 ist
  // und setze x auf "Wahr", wenn die Bedingung wahr ist
  // schreibe eine else if Bedingung, die prüft, ob bedingung gleich 2 ist
  // und setze x auf "Falsch", wenn die Bedingung wahr ist
  // ansonsten setze x auf "Unbekannt"

  return x;
}

/**
 *
 *  Wenn mehrere Bedingungen geprüft werden sollen, kann ein switch-Block verwendet werden.
 *  Beispiel:
 *  ```javascript
 *  switch (ausdruck) {
 *  case wert1:
 *   // Code wird ausgeführt, wenn ausdruck gleich wert1 ist
 *  break; // Beendet den switch-Block, ansonsten wird der Code für alle folgenden Fälle ausgeführt
 *  case wert2:
 *   // Code wird ausgeführt, wenn ausdruck gleich wert2 ist
 *  break;
 *  default:
 *  // Code wird ausgeführt, wenn keine der Bedingungen wahr ist
 *  }
 *
 * Diese Funktion gibt den Text "Spieler 1" zurueck, wenn die Wahl 1 ist,
 * den Text "Spieler 2" zurueck, wenn die Wahl 2 ist.
 * ansonsten gibt sie den Text "Unbekannt" zurueck.
 *
 * @param {number} wahl
 *
 * @returns string
 */
export function switchCase(wahl) {
  let x = "";

  // schreibe einen switch Block, der prüft, ob wahl gleich 1 ist
  // und setze x auf "Spieler 1", wenn die Bedingung wahr ist
  // prüfe, ob wahl gleich 2 ist
  // und setze x auf "Spieler 2", wenn die Bedingung wahr ist
  // ansonsten setze x auf "Unbekannt"

  return x;
}
