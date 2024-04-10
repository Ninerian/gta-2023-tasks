//@ts-check

/**
 * Eine for-Schleife ist eine Schleife, die eine bestimmte Anzahl von Schritten durchläuft.
 * Sie besteht aus drei Teilen: der Initialisierung, der Bedingung und der Iteration.
 *
 *      for (let i = 0; i < 10; i++) {}
 *               ↑        ↑      ↑
 *               |        |      |
 *  Initialisierung  Bedingung  Iteration
 *
 * Die Initialisierung wird nur einmal ausgeführt, bevor die Schleife beginnt.
 * Die Bedingung wird vor jedem Schleifendurchlauf überprüft. Wenn sie wahr ist, wird der Schleifenkörper ausgeführt.
 * Die Iteration wird nach jedem Schleifendurchlauf ausgeführt.
 *
 */

export let anzahl = 0;

// Diese Schleife wird 10 mal durchlaufen, dabei wird die Variable anzahl um 1 erhöht.
// Ändere den Code so, dass die Schleife 5 mal durchlaufen wird.
for (let i = 0; i < 10; i++) {
  anzahl++;
}

// Schreibe eine Schleife die von 10 bis 0 zählt und die Variable countdown um 1 verringert.

export let countdown = 10;
