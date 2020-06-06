
# Schritt 1

das modul per `pip` installieren

# Schritt 2

mit `pip list` die Version herausfinden (die Zahl rechts vom namen in der selben spalte)

# Schritt 3

in der requirements.txt eine neue Zeile mit `modulenamen>=Versionsnummer` einfügen, ohne Leerzeichen
(das `>=` erlaubt moderne versionen, speichert allerdings eine funktionierende Version ab. Im finalen Projekt ersetzt man dann `>=` durch `<=`)

# Wenn pip das Modul nicht findet

Alternativ, in einem Szenario, wie z.B. mit en-core-web-sm~=2.2.5, kann man auch den direkten Downloadlink in die requirements.txt pasten, in dem Beispiel:
https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-2.2.5/en_core_web_sm-2.2.5.tar.gz

Oder das modul in das Repo downloaden und lokal installieren, in dem Beispiel:
/PATH_TO_THE_FILE/en_core_web_sm-2.2.0.tar.gz
da diese Option womöglich einen absouten Pfad verlangt, müsste man nen script vorher laufen lassen, um den Pfad zu bestimmen, was recht umständlich wär

Literatur dazu: [Installation via pip](https://spacy.io/usage/models#download-pip)
