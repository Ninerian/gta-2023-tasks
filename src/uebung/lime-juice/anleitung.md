# Anleitung

Deine Freundin Li Mei betreibt eine Saftbar, in der sie leckere gemischte Fruchtsäfte verkauft.
Du bist ein regelmäßiger Kunde in ihrem Laden und hast gemerkt, dass du deiner Freundin das Leben leichter machen kannst.
Du beschließt, deine Programmierkenntnisse einzusetzen, um Li Mei bei ihrer Arbeit zu helfen.

## 1. Bestimme, wie lange es dauert, einen Saft zu mischen

Li Mei sagt ihren Kunden gerne im Voraus, wie lange sie auf einen bestellten Saft aus der Karte warten müssen.
Es fällt ihr schwer, sich die genauen Zahlen zu merken, denn die Zeit, die sie zum Mischen der Säfte braucht, variiert.
Für `'Pure Strawberry Joy'` braucht sie 0,5 Minuten, für `'Energizer'` und `'Green Garden'` jeweils 1,5 Minuten, für `'Tropical Island'` 3 Minuten und für `'All or Nothing'` 5 Minuten.
Für alle anderen Getränke (z.B. Sonderangebote) kannst du eine Zubereitungszeit von 2,5 Minuten annehmen.

Um deinem Freund zu helfen, schreibe eine Funktion `timeToMixJuice`, die einen Saft aus der Speisekarte als Argument nimmt und die Anzahl der Minuten zurückgibt, die es dauert, dieses Getränk zu mixen.

``Javascript
timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Beeren & Limette');
// => 2.5
```

## 2. Den Vorrat an Limettenspalten wieder auffüllen

Viele von Li Meis Kreationen enthalten Limettenspalten, entweder als Zutat oder als Teil der Dekoration.
Wenn sie also morgens ihre Schicht beginnt, muss sie sicherstellen, dass der Vorrat an Limetten für den kommenden Tag voll ist.

Implementiere die Funktion "Limetten zum Schneiden", die die Anzahl der zu schneidenden Limettenkeile und ein Array mit dem Vorrat an ganzen Limetten, den sie zur Verfügung hat, benötigt.
Aus einer "kleinen" Limette kann sie 6 Keile schneiden, aus einer "mittleren" Limette 8 und aus einer "großen" Limette 10 Keile.
Sie schneidet die Limetten immer in der Reihenfolge, in der sie auf der Liste stehen, und beginnt mit dem ersten Stück.
Sie macht so lange weiter, bis sie die Anzahl der benötigten Keile erreicht hat oder bis ihr die Limetten ausgehen.

Li Mei würde gerne im Voraus wissen, wie viele Limetten sie schneiden muss.
Die Funktion `LimesToCut` soll die Anzahl der zu schneidenden Limetten zurückgeben.

``Javascript
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4
```

## 3. Beende die Schicht

Li Mei arbeitet immer bis 15 Uhr.
Dann übernimmt ihr Mitarbeiter Dmitry.
Oft gibt es Getränke, die bestellt wurden, aber noch nicht zubereitet sind, wenn Li Meis Schicht endet.
Dmitry bereitet dann die restlichen Säfte zu.

Um die Übergabe zu erleichtern, implementiere eine Funktion `remainingOrders`, die die Anzahl der verbleibenden Minuten in Li Meis Schicht und ein Array der bestellten, aber noch nicht zubereiteten Säfte enthält.
Die Funktion sollte die Bestellungen zurückgeben, mit deren Zubereitung Li Mei nicht vor Ende ihres Arbeitstages beginnen kann.

Die verbleibende Zeit in der Schicht wird immer größer als 0 sein.
Das Feld der zuzubereitenden Säfte wird nie leer sein.
Außerdem werden die Bestellungen in der Reihenfolge zubereitet, in der sie in der Liste stehen.
Wenn Li Mei beginnt, einen bestimmten Saft zu mischen, wird sie ihn immer fertigstellen, auch wenn sie etwas länger arbeiten muss.
Wenn es keine Bestellungen mehr gibt, um die sich Dmitry kümmern muss, sollte ein leeres Array zurückgegeben werden.

```javascript
remainingOrders(5, ['Energizer', 'Alles oder Nichts', 'Grüner Garten']);
// => ['Green Garden']
```
