# Anleitung

In dieser Übung implementierst du eine Methode, um die Highscores für das beliebteste Spiel in deiner örtlichen Spielhalle zu speichern.

Du hast 6 Funktionen zu implementieren, die sich hauptsächlich auf die Bearbeitung eines Objekts beziehen, das die Highscores enthält.

## 1. Erstelle eine neue Highscore-Tafel

Erstelle eine Funktion `createScoreBoard`, die ein Objekt erzeugt, das als Highscore-Board dient.
Die Schlüssel dieses Objekts sind die Namen der Spielerinnen und Spieler, die Werte sind ihre Punktzahlen.
Zu Testzwecken möchtest du direkt einen Eintrag in das Objekt einfügen.
Dieser erste Eintrag sollte aus "The Best Ever" als Spielername und "1000000" als Punktzahl bestehen.

```javascript
createScoreBoard();
// gibt ein Objekt mit einem ersten Eintrag zurück
```

## 2. Spieler zu einer Punktetafel hinzufügen

Um einen Spieler zur Highscore-Tafel hinzuzufügen, definierst du die Funktion `addPlayer`.
Sie nimmt 3 Parameter entgegen:

- Der erste Parameter ist ein bestehendes Punktetafelobjekt.
- Der zweite Parameter ist der Name des Spielers in Form eines Strings.
- Der dritte Parameter ist der Punktestand in Form einer Zahl.

Die Funktion gibt das gleiche Objekt zurück, das nach dem Hinzufügen des neuen Spielers übergeben wurde.

```javascript
addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
// => {'Dave Thomas': 0, 'José Valim': 486373}
```

## 3. Spieler von einer Punktetafel entfernen

Wenn Spieler/innen gegen die Regeln der Spielhalle verstoßen, werden sie manuell von der Highscore-Tafel entfernt.
Definiere `removePlayer`, das 2 Parameter benötigt:

- Der erste Parameter ist ein bestehendes Punktetafelobjekt.
- Der zweite Parameter ist der Name des Spielers in Form eines Strings.

Diese Funktion soll den Eintrag für den angegebenen Spieler von der Tafel entfernen und die Tafel anschließend zurückgeben.
Wenn der Spieler gar nicht auf der Tafel war, sollte nichts mit der Tafel passieren.
Es sollte so zurückgegeben werden, wie es ist.

```javascript
removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas');
// => {}

removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras');
// => { 'Dave Thomas': 0 }
```

## 4. Den Punktestand eines Spielers erhöhen

Wenn ein Spieler oder eine Spielerin ein anderes Spiel in der Spielhalle beendet, wird eine bestimmte Anzahl von Punkten zu der vorherigen Punktzahl auf dem Spielbrett hinzugefügt.
Implementiere `updateScore`, das 3 Parameter benötigt:

- Der erste Parameter ist ein bestehendes Scoreboard-Objekt.
- Der zweite Parameter ist der Name des Spielers, dessen Punktestand erhöht werden soll.
- Der dritte Parameter ist die Punktzahl, die du zum gespeicherten Highscore **hinzufügen** möchtest.

Die Funktion sollte die Punktetafel zurückgeben, nachdem die Aktualisierung durchgeführt wurde.

```javascript
updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);
// => {"Freyja Ćirić", 12771081}
```

## 5. Montags-Bonuspunkte anwenden

In der Spielhalle gibt es montags eine eigene Punktetafel.
Am Ende des Tages erhält jeder Spieler auf dieser Tafel 100 zusätzliche Punkte.

Implementiere die Funktion `applyMondayBonus`, die eine Punktetafel annimmt.
Die Funktion addiert die Bonuspunkte für jeden Spieler, der auf dieser Tafel steht.
Anschließend wird die Tafel zurückgegeben.

```javascript
const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

applyMondayBonus(scoreBoard);
// => { 'Dave Thomas': 144, 'Freyja Ćirić': 639, 'José Valim': 365 }
```

## 6. Einen Highscore normalisieren

Verschiedene Spielhallen vergeben unterschiedliche Punktzahlen.
Um den besten Arcade-Spieler der Stadt zu feiern, muss die Punktzahl eines Spielers normalisiert werden, damit die Punktzahlen aus verschiedenen Spielhallen vergleichbar werden.

Schreibe eine Funktion `normalizeScore`.
Um deine Objektkenntnisse zu trainieren, sollte diese Funktion statt zwei Parametern nur ein Objekt als Parameter akzeptieren.
Dieses Objekt enthält einen Schlüssel `Score`, dessen Wert die Punktzahl eines Spielers ist (eine Zahl).
Außerdem gibt es einen zweiten Schlüssel `normalizeFunction`, der eine Funktion als Wert hat.
Diese Funktion nimmt eine Punktzahl als Argument und gibt die korrigierte Punktzahl zurück.

Deine Funktion `normalizeScore` sollte die normalisierte Punktzahl zurückgeben, die du erhältst, nachdem du die Normalisierungsfunktion auf die übergebene Punktzahl angewendet hast.

```javascript
function normalize(score) {
  return 2 * Punktzahl + 10;
}

const params = { score: 400, normalizeFunction: normalize };
normalizeScore(params);
// => 810
```
