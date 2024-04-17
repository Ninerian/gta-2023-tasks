# Einführung

## Erläuterung

Neben primitiven Datentypen wie "Zahl" und "String" gibt es in JavaScript noch einen weiteren wichtigen Datentyp: "Objekt".
Objekte sind Sammlungen von Schlüssel-Werte-Paaren.
Als solche können sie auf die gleiche Weise verwendet werden wie die in anderen Sprachen oft als Maps oder Dictionaries bezeichneten Daten.

In anderen Sprachen müssen alle Werte in einer Map oft den gleichen Datentyp haben.
In JavaScript ist nur der Typ des Schlüssels eingeschränkt: Er muss ein String sein.
Die Werte innerhalb eines Objekts können unterschiedliche Typen haben.
Sie können primitive Typen wie Zahlen sein, aber auch Arrays, andere Objekte oder sogar Funktionen.
Das macht Objekte sehr vielseitig, so dass sie auch für die [objektorientierte Programmierung][oop] (OOP) in JavaScript eine wichtige Rolle spielen.

Im Folgenden werden wir uns auf Objekte als Sammlungen oder Maps konzentrieren. Andere Anwendungsfälle von Objekten werden in anderen Konzepten behandelt, siehe z. B. [Classes][concept-classes].

## Erstellen eines Objekts

Du erstellst ein Objekt mit geschweiften Klammern.
Du kannst auch direkt einige Einträge einfügen.
Dazu gibst du zuerst den Schlüssel an, gefolgt von einem Doppelpunkt und dem Wert.

```javascript
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hallo Welt',
  useGreeting: true,
  Adresse: {
    Straße: 'Trincomalee Highway',
    Stadt: 'Batticaloa',
  },
  Früchte: ['Melone', 'Papaya'],
  addNumbers: function (a, b) {
    return a + b;
  },
};
```

Das abschließende Komma nach dem letzten Eintrag ist in JavaScript optional.

Du fragst dich vielleicht, warum die Schlüssel nicht in Anführungszeichen eingeschlossen sind, obwohl sie eigentlich Zeichenketten sein sollten.
Das ist eine Kurzschreibweise.
Wenn der Schlüssel den Benennungsregeln für einen JavaScript-[Bezeichner][mdn-identifier] folgt, kannst du die Anführungszeichen weglassen.
Für Schlüssel mit Sonderzeichen im Namen musst du die übliche String-Schreibweise verwenden.

```javascript
const obj = {
  1keyStartsWithNumber': '...',
  'key/with/slashes': '...',
  'key-with-dashes': '...',
  'Schlüssel mit Leerzeichen': '...',
  '#&()[]{}èä樹keyWithSpecialChars': '...',
};
```

## Abrufen eines Wertes

Es gibt zwei Möglichkeiten, den Wert eines bestimmten Schlüssels abzurufen: die Punkt- und die Klammerschreibweise.

````javascript
const obj = { greeting: 'hello world' };

obj.greeting;
// => hallo Welt

obj['greeting'];
// => hallo Welt

// Die Klammerschreibweise funktioniert auch mit Variablen.
const Schlüssel = 'Gruß';
obj[Schlüssel];
// => hallo Welt
```

Die Verwendung der Punktnotation als Abkürzung hat die gleiche Einschränkung wie das Weglassen der Anführungszeichen.
Sie funktioniert nur, wenn der Schlüssel den Regeln für die Benennung von Bezeichnern folgt.

## Hinzufügen oder Ändern eines Wertes

Du kannst einen Wert hinzufügen oder ändern, indem du den Zuweisungsoperator `=` verwendest.
Auch hier gibt es Punkt- und Klammerschreibweisen.

``javascript
const obj = { greeting: 'hello world' };

obj.greeting = 'Hallo, du!';
obj['greeting'] = 'Willkommen.';

obj.newKey1 = 'neuer Wert 1';
obj['neuer Schlüssel 2'] = 'neuer Wert 2';

const. key = 'neuer Schlüssel 3';
obj[Schlüssel] = 'neuer Wert 3';
```

## Löschen eines Eintrags

Mit dem Schlüsselwort `delete` kannst du ein Schlüssel-Wert-Paar aus einem Objekt löschen.

````javascript
const obj = {
  key1: 'wert1',
  key2: 'wert2',
};

delete obj.key1;
delete obj['key2'];
```

## Prüfen, ob ein Schlüssel vorhanden ist

Mit der Methode `hasOwnProperty` kannst du prüfen, ob ein bestimmter Schlüssel in einem Objekt existiert.

````javascript
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

## Schleife durch ein Objekt

Es gibt eine spezielle `for...in` Schleife, um über alle Schlüssel eines Objekts zu iterieren.

```javascript
const obj = {
  Name: 'Ali',
  Alter: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// Name Ali
// Alter 65
```

Um subtile Fehler zu vermeiden, solltest du immer davon ausgehen, dass die `for...in`-Schleife die Schlüssel in beliebiger Reihenfolge besucht.
Außerdem solltest du beachten, dass `for...in` die [vererbten Schlüssel][Konzeptvererbung] in seine Iteration einbezieht.

[oop]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
[concept-classes]: /tracks/javascript/concepts/classes
[mdn-identifier]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier
[concept-inheritance]: /tracks/javascript/concepts/inheritance 
