//@ts-check

/**
 * Ein Array ist eine geordnete Liste von Werten.
 * Du kannst Werte in einem Array speichern und später darauf zugreifen.
 *
 * Die Werte in einem Array können von jedem beliebigen Typ sein. Es ist aber üblich, dass alle Werte in einem Array den gleichen Typ haben.
 *
 * Ein Array wird mit eckigen Klammern `[]` erstellt.
 * Die Werte in einem Array werden durch Kommas getrennt.
 *
 * Hier ist ein Beispiel für ein Array, das Zahlen enthält:
 *
 * const zahlen = [1, 2, 3, 4, 5];
 *
 * Hier ist ein Beispiel für ein Array, das Zeichenfolgen enthält:
 *
 * const fruechte = ['Apfel', 'Banane', 'Kirsche', 'Dattel'];
 */

// Erstelle ein Array mit den Zahlen von 1 bis 5

export const zahlen = undefined;

// Erstelle ein Array mit den Wochentagen

export const wochentage = undefined;

// Auf die Werte in einem Array kannst Du mit dem Index zugreifen.
// Der Index ist die Position des Werts im Array und beginnt bei 0.
//
// Hier ist ein Beispiel, wie Du auf den ersten Wert in einem Array zugreifen kannst:
// const montag = wochentage[0];

// Gib den Sonntag aus dem Array wochentage aus
export const sonntag = undefined;

// Ein Array hat eine Eigenschaft `length`, die die Anzahl der Werte im Array enthält.
// Hier ist ein Beispiel, wie Du die Anzahl der Werte in einem Array erhalten kannst:
// const anzahlWochentage = wochentage.length;

// Gib die Anzahl der Werte im Array zahlen aus
export const anzahlZahlen = undefined;

// Ein Array hat auch Methoden, die Du verwenden kannst, um Werte hinzuzufügen, zu entfernen oder zu ändern.
// Hier sind einige Beispiele für Methoden, die Du mit Arrays verwenden kannst:
// - push: Fügt einen Wert am Ende des Arrays hinzu
// - pop: Entfernt den letzten Wert aus dem Array
// - shift: Entfernt den ersten Wert aus dem Array
// - unshift: Fügt einen Wert am Anfang des Arrays hinzu
// - splice: Fügt, entfernt oder ersetzt Werte an einer bestimmten Position im Array
// - slice: Gibt eine Kopie eines Teils des Arrays zurück

// Hier ist ein Beispiel, wie Du einen Wert am Ende eines Arrays hinzufügen kannst:
// const zahlen2 = [1, 2, 3, 4, 5];
// zahlen2.push(6);
// zahlen enthält nun [1, 2, 3, 4, 5, 6];

// Füge die Zahl 6 am Ende des Arrays zahlen2 zahlen hinzu
export const zahlen2 = [1, 2, 3, 4, 5];

// Hier ist ein Beispiel, wie Du den letzten Wert aus einem Array entfernen kannst:
// const zahlen3 = [1, 2, 3, 4, 5];
// zahlen3.pop();
// zahlen3 enthält nun [1, 2, 3, 4];

// Entferne die letzte Zahl aus dem Array zahlen3
export const zahlen3 = [1, 2, 3, 4, 5];

// Hier ist ein Beispiel, wie Du den ersten Wert aus einem Array entfernen kannst:
// const zahlen4 = [1, 2, 3, 4, 5];
// zahlen4.shift();
// zahlen4 enthält nun [2, 3, 4, 5];

// Entferne die erste Zahl aus dem Array zahlen4
export const zahlen4 = [1, 2, 3, 4, 5];

// Hier ist ein Beispiel, wie Du einen Wert am Anfang eines Arrays hinzufügen kannst:
// const zahlen5 = [1, 2, 3, 4, 5];
// zahlen5.unshift(0);
// zahlen5 enthält nun [0, 1, 2, 3, 4, 5];

// Füge die Zahl 0 am Anfang des Arrays zahlen5 hinzu
export const zahlen5 = [1, 2, 3, 4, 5];

// Hier ist ein Beispiel, wie Du einen Wert an einer bestimmten Position in einem Array hinzufügen, entfernen oder ersetzen kannst:
// const zahlen6 = [1, 2, 3, 4, 5];
// zahlen6.splice(2, 0, 2.5);
//                ↑  ↑   ↑
//                |  |   |
//                |  |   Wert, der hinzugefügt wird
//                |  Anzahl der Elemente die entfernt werden
//                Position, an der der Wert hinzugefügt wird
// zahlen6 enthält nun [1, 2, 2.5, 3, 4, 5];

// Füge die Zahl 4.5 an der Position 4 im Array zahlen6 hinzu
// Hinweis: Die Positionen im Array beginnen bei 0
export const zahlen6 = [1, 2, 3, 4, 5];

// Ersetze die Zahl 3 im Array zahlen7 durch die Zahl 3.5
// Hinweis: das zweite Argument von splice ist die Anzahl der Elemente, die entfernt werden sollen
export const zahlen7 = [1, 2, 3, 4, 5];

// Hier ist ein Beispiel, wie Du einen Teil eines Arrays kopieren kannst:
// const zahlen8 = [1, 2, 3, 4, 5];
// const zahlen9 = zahlen8.slice(1, 4);
//                               ↑  ↑
//                               |  |
//                               |  Die Endposition in der Liste
//                               Die Startposition in der Liste
// zahlen9 enthält nun [2, 3, 4];

// Kopiere die Zahlen 3 und 4 aus dem Array zahlen in das Array zahlen8
// Hinweis: Das erste Argument von slice ist die Position, an der das Kopieren beginnt
export const zahlen8 = zahlen;
