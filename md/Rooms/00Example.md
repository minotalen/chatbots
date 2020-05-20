# ID ROOMNAME

### Introduction

**Wird am Anfang / beim Betreten vom raum gezeigt** <br>
"Introduction text"

### Description

'!look around' <br>
**Wird gezeigt wenn man '!look around' eingibt** <br>
"Detalierter Beschreibungstext"

### Connections

'!go to ROOM' <br>
'!open ROOM' <br>
**Alle angrenzenden Räume. <br>
Umfasst auch Synonyme die zu bestimmten Räumen führen sollen.** <br>
!Ist in der csv anders geschrieben. Lest die README!

| Raum          | Synonyme    |
| ------------- | ----------- |
| Example Room  | ~~none~~    |
| Example Room2 | Door; Right |

### Triggers

'!pick up STICHWORT' <br>
'!open STICHWORT' <br>
'!use STICHWORT' <br>
**Alle Stichwörter die neue Texte im selben Raum auswerfen.<br>
Die Bedingung muss erfüllt sein bevor ein Stichwort getriggerd wird.**<br>
!Das Feature ist noch nicht eingebaut!

| Stichwort | Kommandos      | Bedingung | Aktion                  | Beschreibung                       |
| --------- | -------------- | --------- | ----------------------- | ---------------------------------- |
| key       | !pick up; !use | ~~none~~  | add key to Inventory    | You picked up a key for an example |
| chest     | !open          | key       | open chest & remove key | You opened the chest with your key |
