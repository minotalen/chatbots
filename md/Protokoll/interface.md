# Interface Design und Aufgaben

## TODO Interface

- Buttons zur Eingabe: es funktionieren aktuell folgende Befehle, die als Buttons implementiert werden können (als JSON übermittelt): 
  - go to start
  - go to room
  - current room 
  - look around 
  - go to right / left 
  - use (...)
- Modalfenster
- Responsiveness für mobile Geräte
- Raum und Level abhängig von Information in JSON setzen
    - Wozu brauchen wir eine Levelanzeige, die permanent sichtbar ist?



## Verschiedene Inputkonzepte

1. Nur Texteingabe
2. Texteingabe + Buttons
   1. Buttons von Anfang an
   2. Buttons nach Zeit ohne Aktion anzeigen
   3. Buttons bei Gesprächen
3. Texteingabe und Befehle im Format ~~/befehl oder~~ **!befehl**  
4. Texteingabe + Nummerierte Textvorschläge im Chat, erreichbar durch Eintippen der Ziffer

## Aufgaben Interface

![Modal](https://cdn.dribbble.com/users/2631930/screenshots/6783941/driver-listing-page-new-design___1.png)  
Einen Modal gestalten. Muss auf Knopfdruck öffnen und schließen. Muss Textfeld, checkbox und radio selector können.
Der Modal sollte idealerweise ein Modul sein, also mit variablem Inhalt geladen werden können. (Da wir z.B. nicht nur für Settings sondern auch auch eine Hilfe mit dem gleichen Modal darstellen sollten.)

Nachtrag Interface: da wir nur für 2 Zwecke diesen Modal brauchen (Einstellungen & Hilfe) haben wir beschlossen das Modal nicht modular zu machen sondern 2 statische Modals die nach Bedarf ein und ausgeblendet werden können.


# notes may 19


limit max suggestion amt, global setting
differentiate between autoconfirm and further input required
unterscheidung: leerzeichen am ende vom string oder nicht bzw. typenangabe in eckigen klammern

zwei verschiedene typen von suggestion:
incomplete - suggestion muss noch durch weiteren input vervollständigt werden
in der vorschau angezeigt als "verb [type]"
klickverhalten - ändert wert des textfelds, aktualisiert previews

complete - suggestion ist vollständig und kann direkt abgesendet werden

```js
  suggestions = [
    // incomplete
    {name: 'pick up [object]'},
    {name: 'open [object]'},
    {name: 'use [object]'},
    {name: 'inspect [object]'},
    {name: 'give [object] '}, // two layers
    {name: 'give [object] to [person]'},
    {name: 'go to [location]'},
    {name: 'talk to [person]'},
    {name: 'about [any]'},
    {name: 'look at [person, object]'},
    // complete
    {name: 'current room'},
    {name: 'look around'},
    {name: 'go to start'},
    {name: 'go to door'},
    {name: 'go right'},
    {name: 'go left'},
    {name: 'walk to right'},
    {name: 'walk to left'},
    {name: 'about chatbot how old are you'},
    {name: 'about chatbot what is your name'}
  ]
```

farbliche hervorhebung von [object] in der preview - 4 typen, 4 farben
`ghost` des [objekt] im inputfeld bis der user tippt

incomplete funktioniert auch 2stufig  
give [object] to [person]


zukunftsmusik:
show history of last 3 incomp inputs on left arrow press
