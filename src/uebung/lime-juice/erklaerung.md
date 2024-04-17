# Einführung

## While-Schleifen

Mit einer while-Schleife kannst du Code wiederholbar ausführen, solange eine bestimmte Bedingung erfüllt ist.
Sie wird mit dem Schlüsselwort `while` geschrieben, gefolgt von einer Bedingung, die in runde Klammern eingeschlossen ist, und einem Codeblock, der den _Körper_ der Schleife enthält und in geschweifte Klammern eingeschlossen ist.

```javascript
while (Bedingung) {
  // Code, der wiederholt ausgeführt wird, solange die Bedingung wahr ist
}
```

JavaScript hat auch eine do-while-Schleife.
Hier wird die Bedingung geprüft, nachdem der Schleifenkörper ausgeführt wurde.
Das ist nützlich, wenn die Bedingung von Auswertungen abhängt, die im Körper durchgeführt werden.

````Javascript
do {
  // Der Code hier wird immer einmal ausgeführt und dann
  // wiederholt ausgeführt, solange die Bedingung wahr ist.
} while (Bedingung);
```

Innerhalb eines Schleifenkörpers kannst du das Schlüsselwort `break` verwenden, um die Ausführung der Schleife ganz zu stoppen.
Im Gegensatz dazu hält das Schlüsselwort `continue` nur die Ausführung der aktuellen Iteration an und fährt mit der nächsten fort.
Mit `continue` kannst du es oft vermeiden, große Teile des Schleifenkörpers in eine if-Anweisung zu verpacken.

```javascript
let i = 0;

while (i < 100) {
  i = i + 2;

  if (i % 3 === 0) {
    weiter;
  }

  // Der Code hier wird nur ausgeführt, wenn i nicht durch
  // durch 3 teilbar ist.
}
```

## Switch-Anweisungen

Neben der if-Anweisung gibt es in JavaScript auch eine switch-Anweisung, um eine Logik bedingt auszuführen.
Sie wird verwendet, wenn eine einzelne Variable mit mehreren Varianten verglichen werden soll.
Der Vergleich erfolgt durch die Prüfung auf strikte Gleichheit (`===`), siehe [concept comparison][concept-comparison].
Für eine Variable `x` hat die switch-Anweisung in JavaScript die folgende Syntax.

<!-- prettier-ignore-start -->
```javascript
switch (x) {
  case option1:
    // Code, der ausgeführt wird, wenn "x === option1" wahr ist
    break;
  case option2:
    // Code, der ausgeführt wird, wenn "x === Option2" wahr ist
    break;
  default:
    // Code, der ausgeführt wird, wenn x nicht gleich einer der Optionen ist
}
```
<!-- prettier-ignore-end -->

Der `default` Fall ist optional und wird verwendet, wenn du einen Code ausführen willst, wenn keine der anderen Optionen auf die Variable passt.

Die obigen `break`-Anweisungen werden benötigt, weil standardmäßig alle Fälle in JavaScript "durchfallen".
Das bedeutet, dass ohne eine `break`-Anweisung der gesamte Code in den Fällen unterhalb der ersten passenden Option ausgeführt würde, obwohl `x` nicht auf diese Optionen passt.
Dieses "fallthrough by default"-Verhalten ist ein häufiger Fallstrick bei der Verwendung von `switch` in JavaScript.
Innerhalb einer Funktion kann `return` auch anstelle von `break` verwendet werden, um dieses Problem zu vermeiden.

[concept-comparison]: /tracks/javascript/concepts/comparison 
