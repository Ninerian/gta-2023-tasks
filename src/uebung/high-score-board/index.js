/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Erzeugt eine neue Anzeigetafel mit einem ersten Eintrag.
 *
 * @returns {Record<string, number>} neues score board
 */
export function createScoreBoard() {
  throw new Error("Please implement the createScoreBoard function");
}

/**
 * Fügt einen Spieler zu einer Anzeigetafel hinzu.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} aktualisiertes score board
 */
export function addPlayer(scoreBoard, player, score) {
  throw new Error("Please implement the addPlayer function");
}

/**
 * Entfernt einen Spieler von einer Anzeigetafel.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} aktualisiertes score board
 */
export function removePlayer(scoreBoard, player) {
  throw new Error("Please implement the removePlayer function");
}

/**
 * Erhöht die Punktzahl eines Spielers um den angegebenen Betrag.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} aktualisiertes score board
 */
export function updateScore(scoreBoard, player, points) {
  throw new Error("Please implement the updateScore function");
}

/**
 * Verleiht allen Spielern auf dem Spielbrett 100 Bonuspunkte.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} aktualisiertes score board
 */
export function applyMondayBonus(scoreBoard) {
  throw new Error("Please implement the applyMondayBonus function");
}

/**
 * Normalisiert eine Punktzahl mit der angegebenen Normalisierungsfunktion.
 *
 * @param {Params} params die Parameter zur Durchführung der Normalisierung
 * @returns {number} normalisierte score
 */
export function normalizeScore(params) {
  throw new Error("Please implement the normalizeScore function");
}
