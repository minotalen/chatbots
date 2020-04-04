# How To Do Stuff

## Basics / wie man Texte zu dieser Seite beiträgt

Zuerst benötigst du den Link zum bearbeiten dieser Seite, den findest du in den angepinnten Nachrichten in `#general` im Discord.  
Wenn du den Link zum bearbeiten aufrufst solltest du auf der linken Seite eine Leiste mit Dateien sehen. Alle Texte liegen in dem `md` Ordner - klicke sie an um eine Vorschau zu erhalten, dann klick auf den `Markdown👁` Knopf in der oberen Leiste zum bearbeiten. Du kannst zum Beispiel mal in die `howto.md` schauen um zu sehen, wie dieser Text formatiert ist.

Markdown ist eine Syntax, um Text möglichst einfach formatieren zu können. Es ist **einfach zu lernen**, eine Anleitung findest du z.B. [hier](https://markdown.de). Die Basics könnt ihr aber auch sehen, indem ihr dieses Dokument im Editor öffnet.
Neue Dateien kannst du mit einem Knopfdruck auf `New File` erstellen, dann `md/deinDateiname.md` eingeben und die Datei im Explorer anwählen. Die Datei lässt sich auch im Index (der Hauptseite) verlinken, indem du `[Name](deinDateiname)` hinzufügst.  
Für ein Live Preview deiner Änderungen kannst du `STRG+shift+u` drücken oder oben `Show`, dann `next to the code`.

<!-- Kommentare lassen sich übrigens so einfügen (die Tastenkombination STRG+# funktioniert auch-->

<!-- Kommentare 
gehen auch

über mehrere Zeilen -->

* so erstellt man eine Liste
* wenn ihr den * mit Tab einrückt...
  * könnt ihr Unterpunkte erstellen  
  
Ihr könnt euren Text **fett machen** oder *kursiv schreiben* und es geht auch **_fett und kursiv_**. (~~durchstreichen geht auch~~)
Ein Zeilenumbruch wird
ignoriert, es sei denn...  
...ihr fügt zwei Leerzeichen ans Ende der vorangehenden Zeile!
###### Überschriften mit Rauten (eine Raute ist die Größte, 6 die Kleinste)
mit zwei Gleichzeichen könnt ihr ==Text highlighten==


## Infrastruktur / bearbeiten von .css und .html, Module

Falls du den Stil dieser Seite bearbeiten oder ein Feature einbauen möchtest, bitte zuerst Mon auf Discord anschreiben. Wenn dir ein Feature fehlt oder du etwas nicht verstehst, auch einfach nachfragen.  
Die Seite nutzt Node, Express und das Modul [Markdown-it](https://markdown-it.github.io/markdown-it/). Das Einbinden weiterer Node-Module (zB Kalendar-Integration, Formulare) ist machbar. [Hier](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) gibt es eine Liste aller für Markdown-It verfügbaren Module.

## Hilfe ich habe etwas kaputtgemacht

1. Erstmal probieren ob es sich mit undo beheben lässt (über STRG+Z)
1. falls das nicht geht unten links auf `Tools`, dann auf Rewind und zu dem letzten Autosave zurückfahren (**Vorsicht**: wenn andere parallel an der Seite werkeln geht auch deren Fortschritt verloren)  
1. wenn das alles nichts bringt, Mon anhauen und mit etwas Glück gibt es ein nicht allzu altes Backup auf Github 🙏

---


## contributing to this website

First, you will need the link to edit this document. You can get it from the pinned message in the group discord.  
After you enter the edit page you will see a file tree on the left. All the texts live in the `md` folder - click on them to see a preview, then click on the `Markdown👁` button in the top bar.

All texts are formatted with markdown. You should get used to the markdown basics but don't worry, it is easy to learn!  
Github has a [nice guide](https://guides.github.com/features/mastering-markdown/) for using markdown.

If you want a live preview of the rendered text, click on 'show in the top bar', then select 'next to the code'.  
You should now be able to see the document on the right!  
The preview updates with every input and if you edit a file other than index.md you
might lose the preview. You can prevent this by clicking on 'change url', but I recommend finding a [markdown editor](https://typora.io/) and doing most of your work there.

[This is how to link to other files](test) (the file lives in md/test.md)

[you can link to folders](deep/link) (this file lives in deep/link.md)

Edit `views/index.html` to change the outer look and feel of the page. (If anyone wants to apply some .css magic, go for it!)
