# 02 Math Room

### Introduction

"You walk towards the open door and already feel your math senses tickling. You enter an empty room. There is a white board that is filled with weird math formulas, but something kicks in you and you sense a key hidden behind the wall of math. If you can solve this complex calculation you might be able to reach behind it..."

### Description

'!look around' <br>
~~none~~

### Connections

'!go to ROOM' <br>
'!open ROOM' <br>

| Raum          | Synonyme       |
| ------------- | -------------- |
| First Hallway | floor; hallway |

### Triggers

'!pick up STICHWORT' <br>
'!open STICHWORT' <br>
'!use STICHWORT' <br>
'!look at STICHWORT' <br>

| Stichwort                        | Kommandos | Bedingung                                  | Aktion               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------- | --------- | ------------------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| solve; riddle; whiteboard; board | !look at  | ~~none~~                                   | ~~none~~             | "This is written on the white board: You buy a watch for thirty euros. You sell it for forty euros. You buy it once again for fifty euros. You sell it once again for sixty euros. How much euros did you gain compared to the very beginning? There is an empty square on the bottom right which should be the place to write the answer."                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 20                               | ~~none~~  | while on the riddle action                 | !pick up key         | "You write the right answer on the board and in the corner of your eye you see a brick on the wall behind with crumbling mortar. You grab the brick and it gets loose. Behind the brick is a tiny Matryoshka doll. You open the matryoshka. Inside is an even tinier Matryoshka doll. And inside this one is a rusty key with a keychain on it. Carved on the keychain are letters that appear random at first. You scratch the key against the wall to rub the rust off. You rub a bit too hard and shiny metal breaks out of the rust. Carvings on the metal spell the word 'fire escape'. An idea forms into your head. If this key is really a key to the fire exit, it would not cause an alarm and you can swiftly exit the building. So you take your feet in your hands and get the hell out of the room." |
| ANY                              | ~~none~~  | any other input while on the riddle action | ~~none~~             | ""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| leave; go back                   | ~~none~~  | ~~none~~                                   | !go to First Hallway | "Math makes you really sad. So you just walk out of the room quietly..."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
