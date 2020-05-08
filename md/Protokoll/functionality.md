# Funktionalität Server

07.05.2020

-> Die Datei ggf. umbennen, da hier mittlerweile viel mehr drin steht

## Befehle

| ID  | Befehl            | Funktion                                                                     | getestet / bewertet |
| --- | ----------------- | ---------------------------------------------------------------------------- | ------------------- |
| 0   | !help             | gibt alle möglichen Aktionen aus                                             |                     |
| 1   | !go to 'Roomname' | bewegt den spieler in den neu ausgewählten Raum                              |                     |
| 2   | !inventory        | gibt alle Objekte aus dem Inventar aus                                       |                     |
| 3   | !start            | startet das Spiel im ersten Raum                                             |                     |
| 4   | !pick up 'object' | fügt das Object dem Inventar hinzu                                           |                     |
| 5   | !use 'object'     | verbraucht das angegebene Objekt aus dem Inventar um eine Aktion auszuführen |                     |
| 6   | !open 'object'    | öffnet ein Objekt im Raum oder Inventar (door, chest, matryoshka)            |                     |
| 7   | !current room     | gibt den derzeitigen Raum zurück in dem man sich befindet                    |                     |
| 8   | !look around      | gibt weitere Informationen über den Raum aus                                 |                     |

## JSON

- Raumbasiert?
- Items (erhalten, verlieren, Besitz testen)
  - Qualitativ (ja/nein), nicht quantitativ (wie viele)
- Deterministisch (jeder Input hat festen Output)

#### Format

- Raum / Level (ID)
- Sender
- Input vom User/(Text-)Output vom Server(Komplette Nachricht bzw. Keyword für Aktionen)
- Key Items (bei loot und drop)

**room** (gibt Aufenthalt an),  
**test** (prüft inventar),  
**gain** (item erhalten),  
**loss** (verliere item),  
**goto** (wechselt raum),  
**text** (story bit)

```
{
"level": "id",
"sender": "name",
"room": "room name",
"items": [ {"item": "item_name", "action": "pick_up"}, {"item": "item_name2", "action": "use"} ], //liste soll leer sein, falls kein item aufgenommen/verbraucht wurde ("action": "")
"message": "user input/server output"
}
```

#### Beschreibung JSON

- Aktuelles Level
- Sender der Nachricht (z. B. User, Charakter, Raum)
- Aktueller Raum
- Änderungen an den Items, sowohl im User- als auch im Rauminventar
- Nachrichtentext

## Ideen

| ID  | Varianten                                                                                                 | getestet / bewertet |
| --- | --------------------------------------------------------------------------------------------------------- | ------------------- |
| 0   | Inventar in Text ausgeben lassen                                                                          |                     |
| 1   | GW2 Escaperoom spielbar                                                                                   |                     |
| 2   | Spezifische Eingabe gibt spezifische Ausgabe                                                              |                     |
| 3   | Alternative mit Buttons                                                                                   |                     |
| 4   | Zustandsbasiert                                                                                           |                     |
| 5   | Datenbank zum abspeichern der Zustände und Spielstände                                                    |                     |
| 6   | Autovervollständigung für Befehle                                                                         |                     |
| 7   | Anpassbarkeit der Steuerung                                                                               |                     |
| 8   | Darkmode Lightmode toggle                                                                                 |                     |
| 9   | 'Tagebuch' hält vergangene Key Events des Users fest und gibt Hinweise für die next Steps                 |                     |
| 10  | Tippindikatoren, die das 'Tippen' des Bots signalisieren, um die Wartezeit auf die Antwort zu überbrücken |                     |

## Server

- Nutzer nach ID speichern (evtl. Cookies zum lagern)
- Objekt, das User ID mit Socket ID verknüpft
- Server antwortet

## Verschiedene Inputkonzepte

1. Nur Texteingabe
2. Texteingabe + Buttons
   1. Buttons von Anfang an
   2. Buttons nach Zeit ohne Aktion anzeigen
   3. Buttons bei Gesprächen
3. Texteingabe und Befehle im Format ~~/befehl oder~~ !befehl
4. Texteingabe + Nummerierte Textvorschläge im Chat, erreichbar durch Eintippen der Ziffer

## Aufgaben Interface

![Modal](https://cdn.dribbble.com/users/2631930/screenshots/6783941/driver-listing-page-new-design___1.png)  
Einen Modal gestalten. Muss auf Knopfdruck öffnen und schließen. Muss Textfeld, checkbox und radio selector können.
Der Modal sollte idealerweise ein Modul sein, also mit variablem Inhalt geladen werden können. (Da wir z.B. nicht nur für Settings sondern auch auch eine Hilfe mit dem gleichen Modal darstellen sollten.)
