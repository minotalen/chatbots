# Python Notes

LEERZEICHEN UND EINRÜCKUNGEN SIND RELEVANT FÜR DEN INTERPRETER!  
`<vector T>` -> listen [], tuples ()  
`<map T1, T2>` -> dictionaries {} sind wie maps mydictionary = {key:data, key2:data2}  

## arrays:  
`a[1,2,3,4,5,6] -> a=[0,1,2,3,4,5]`  
zugriff per index: a[1] == 1  
zugriff per slice(scheibe): slices sind pointer zwischen den elementen (slice "1" ist zwischen pointer 0 und 1 usw.  
    schreibt man als a[x:] alles ohne das vor x, a[:x] alles ohne das nach x, a[x:y] alles zwischen x und y  
zugriff von hinten per index: a[-1] == letztes element, a[size-1] == erstes element  
zugriff per slices von hinten: viceversa  
strings sind immutable, veränderung erzeugt neuen string  
2^2 -> 2 ** 2  
==, <, >, !=  
String[Index] == 'char beim index'  
len(String)  
listenfunktionen: append(data), pop(data), liste[index]  
end of line, eof, linefeed, lf bedeuten: nächste funktion  
basis datentypen: convertierung innerhalb eines basis datentypes übernimmt der interpreter  
* alle möglichen zahlen(1 1.2 7/3 2**2 ...) können ein b, o, x haben, um eine andere basis als die decimal anzuzeigen  
* Wörter("Hallo Welt" 'c' )
* Listen( liste = [1,2,3,4,5] ...)
* Dictionaries
* Tuples
* type(data) gibt den genauen datentyp aus
* boolean(True, False)
escapen per \ für \', \", \newline, \\  
ein newline, also enter drücken, bedeutet in python, dass eine funktion zuende ist, mit \ kann man das dann escapen und eine funktion über mehrere zeilen strecken  
```
\a 	ASCII Bell (BEL) character
\b 	ASCII Backspace (BS) character
\f 	ASCII Formfeed (FF) character
\n 	ASCII Linefeed (LF) character
\N{<name>} 	Character from Unicode database with given <name>
\r 	ASCII Carriage Return (CR) character
\t 	ASCII Horizontal Tab (TAB) character
\uxxxx 	Unicode character with 16-bit hex value xxxx
\Uxxxxxxxx 	Unicode character with 32-bit hex value xxxxxxxx
\v 	ASCII Vertical Tab (VT) character
\ooo 	Character with octal value ooo
\xhh 	Character with hex value hh
```
ein r oder R vor einem String escaped alle escapes in dem String(raw String)  
built-in Funktionen(python 3.6): https://docs.python.org/3.6/library/functions.html  
#### operatoren:  
*    \+ konkatenation von strings
*    \* duplizierung und konkatenation von stirngs
*    in ist string in string
*    not viveversa

#### string indexing:  
    ein string kann als liste von chars verwendet werden für indexing  
#### slicing: das mit dem operator :  
    x:y:z bedeutet: ein slice von x bis y und jedes z-te element wird übersprungen
    auslassen beim slicing bedeutet x ist 0, y ist -1
    negatives z bedeutet es wird rückwärts gelesen und es wird von y bis x gelesen

fürs casten(typumwandlung) gibt's funktionen. z.B.: print("zahl: " + str(8)) gibt aus: zahl: 8  

man kann funktionen erstellen mit def funktionsname(parameter1, parameter2 ...):  
    `return rückgabe_wert`  

dabei kann man auch 
```
def funktionsname(*name_einer_liste_mit_parametern):  
    funktionen_rumpf
```
schreiben.  

man kann auch schreiben 
```
def funktionsname(parameter1, parameter2=None:
    return tu_dies
```
, um einen parameter optional zu machen, hier parameter2  
Falls die methode dann ohne parameter2 aufgerufen wird, ist dieser = None, dabei ist None dann sowas wie ein Standardwert  

Abfragen von variablen mit if, elif(else if) und else
syntax: 
```
if variable comparator variable:
    tu_dies
elif variable comparator variable:
    tu_dieses
else:
    tu_das
```

iteratoren: 
```
for iterator_name in name_einer_liste(index_des_ersten_elements, index_nach_dem_letzen_element):
    tu_dies
```
oder auch 
```
for iterator_name in name_einer_liste:
    tu_dies
```
, um die ganze liste durchzulaufen

```
while iterator_name comparator vergleich_variable:
    tu_dies
``` 
solange der comparator wahr ausgibt, läuft die Schleife

bei dictionaries schreibt man statt iterator_name den key und value für die respektiven werte

alles andere ist bibliotheken importieren und benutzen
z.B. mit `import name_der_bibliothek`

dann kann man die funktionen der bibliotk mit name_der_bibliothek.name_der_funktion(parameter, ...) aufrufen
falls man nur einzelne funktionen einer bibliotk importieren will, schreibt man: from name_der_bibliothek import name_der_funktion1, name_der_funktion2, ...

`dir(name_der_bibliothek)` gibt z.B. die verfügbaren Funktionen einer bibliotk zurück

zum runnen eines python-skripts: konsole: python3 name_der_datei.py
