//@ts-check

/**
 * Eine while-Schleife ist eine Schleife, die solange ausgeführt wird, wie eine Bedingung erfüllt ist.
 *
 * Sie besteht aus dem Schlüsselwort `while`, gefolgt von einer Bedingung in Klammern und einem Block von Anweisungen in geschweiften Klammern.
 *
 * while (bedingung) {
 *  // Anweisungen
 * }
 *
 * Die Bedingung wird vor jedem Durchlauf der Schleife überprüft. Wenn die Bedingung `true` ist, werden die Anweisungen im Block ausgeführt. Wenn die Bedingung `false` ist, wird die Schleife beendet und der Code nach der Schleife wird ausgeführt.
 *
 * In der Regel wird in der Schleife eine Variable verwendet, die in jedem Durchlauf verändert wird, um die Bedingung zu ändern und die Schleife zu beenden.
 *
 */

export let anzahl = 0;

// Die Schleife wird solange ausgeführt, wie i kleiner oder gleich 10 ist.
// Ändere den Code so, dass die Schleife 5 mal durchlaufen wird.
while (anzahl < 10) {
  anzahl++;
}

// Schreibe eine while-Schleife, die von 10 bis 0 zählt;

export let countdown = 10;
