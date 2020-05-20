Schritt 1: das modul per `pip` installieren

Schritt 2: mit `pip list` die Version herausfinden (die Zahl rechts vom namen in der selben spalte)

Schritt 3: in der requirements.txt eine neue Zeile mit `modulenamen>=Versionsnummer` einfügen, ohne Leerzeichen
(das `>=` erlaubt moderne versionen, speichert allerdings eine funktionierende Version ab. Im finalen Projekt ersetzt man dann `>=` durch `<=`)