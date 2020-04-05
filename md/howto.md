# How To Do Stuff

## Basics / wie man Texte zu dieser Seite beiträgt

Zuerst benötigst du den Link zum bearbeiten dieser Seite, den findest du in den angepinnten Nachrichten in `#general` im Discord.  
Wenn du den Link zum bearbeiten aufrufst solltest du auf der linken Seite eine Leiste mit Dateien sehen. Alle Texte liegen in dem `md` Ordner - klicke sie an um eine Vorschau zu erhalten, dann klick auf den `Markdown👁` Knopf in der oberen Leiste zum Bearbeiten. Du kannst zum Beispiel mal in die `howto.md` schauen um zu sehen, wie dieser Text formatiert ist.

Markdown ist eine Syntax, um Text möglichst einfach formatieren zu können. Es ist **einfach zu lernen**, eine Anleitung findest du z.B. [hier](https://markdown.de). 
Die Basics könnt ihr aber auch sehen, indem ihr dieses Dokument im Editor öffnet.
Neue Dateien kannst du mit einem Knopfdruck auf `New File` erstellen, dann `md/deinDateiname.md` eingeben und die Datei im Explorer anwählen. 
Die Datei lässt sich auch im Index (der Hauptseite) verlinken, indem du `[Name](deinDateiname)` hinzufügst. 
![how to make new file](https://cdn.glitch.com/55b523cf-c2f4-4e0d-be9f-2fcebd2dac14%2Fnewfile.png?v=1586046172761)  
Du kannst Dateien umbenennen bzw. verschieben, indem du auf die drei Punkte ⋮ neben dem Dateinamen klickst.

Für ein Live Preview deiner Änderungen kannst du `STRG+shift+u` drücken oder oben `Show`, dann `next to the code`.  
![next to](https://cdn.glitch.com/55b523cf-c2f4-4e0d-be9f-2fcebd2dac14%2Fnextto.png?v=1586046609033)
Falls du eine Unterseite bearbeitest musst du in der rechten Seite über dem Preview `change URL` anwählen, dann den Link zur Unterseite angeben. FÜr Markdown gibt es auch tolle [Editoren](typora.io) für so ziemlich jedes Betriebssystem, sogar für Smartphones.
![how to fix live preview](https://cdn.glitch.com/55b523cf-c2f4-4e0d-be9f-2fcebd2dac14%2Ffixpreview.png?v=1586045447918)  

### Formatierung

* so erstellt man eine Liste
* wenn ihr den * mit Tab einrückt...
  * könnt ihr Unterpunkte erstellen  
  
Ihr könnt euren Text **fett** oder *kursiv* schreiben und es geht auch **_fett und kursiv_**. (~~durchstreichen mit Tilde~~)
Ein Zeilenumbruch wird
ignoriert, es sei denn...  
...ihr fügt zwei Leerzeichen ans Ende der vorangehenden Zeile!  

Zwei Zeilenumbrüche beginnen einen neuen Absatz. Mit zwei Gleichzeichen könnt ihr ==Text gelb markieren==.  
> **Blockquote** geht mit > und lässt sich <small>~~lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore~~</small>small>
>> auch verschachtelt anwenden <small>~~magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata~~</small>small>

[interne Links in Ordnern](Ressourcen/Code) (auf Großbuchstaben achten!)

```
Codeblock geht so
```

Smarte Pfeile: --> <-- <-->
<!-- Kommentare lassen sich übrigens so einfügen (die Tastenkombination STRG+# funktioniert auch-->

<!-- Kommentare 
gehen auch

über mehrere Zeilen -->
##### Überschriften mit Rauten (eine Raute ist die Größte, 6 die Kleinste)

### Bilder

Glitch hat leider nur 512mb Speicherplatz. Deshalb wenn ihr Bilder einbetten wollt bitte einen externen Hoster (zB imgur) wählen und die Bilder verlinken. Hier bitte ==keine Bilder hochladen==, es sei denn es handelt sich um superkleine Icons etc.  
Die Syntax zum Verlinken von Bildern seht ihr an den obigen Beispielen. 
<!-- ![Bildbeschreibung](Link zum Bild) -->

---

## Infrastruktur / .js, .css und .html, Module

Falls du den Stil dieser Seite bearbeiten oder ein Feature einbauen möchtest, bitte zuerst im Discord fragen. Wenn dir ein Feature fehlt oder du etwas nicht verstehst, auch einfach nachfragen und wir finden bestimmt eine Lösung.  
Die Seite nutzt Node, Express und das Modul [Markdown-it](https://markdown-it.github.io/markdown-it/). Das Einbinden weiterer Node-Module (zB Kalender-Integration, Formulare, Flowcharts, Syntax Highlighting für Codeblöcke) ist machbar.  
[Hier](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) gibt es eine Liste aller für Markdown-It verfügbaren Module.
Installiert sind: inline-comments, container, mark & smartarrows.
[Hier](http://www.aqcoder.com/markdown) ist eine Übersicht einiger cooler Module.

==do not touch:== (without permission) Dateien in `/public` und `/views`, `README.md` und `server.js`!  
==do not share== wenn der Link zum **bearbeiten** des Dokuments öffentlich wird ist diese Seite gefährdet. Dann bitte im Discord Bescheid geben damit zeitig Backup und Umzug geplant werden können. Aber keine Sorge, ist kein großer Aufwand!

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

[This is how to link to other files](index) (the file lives in md/index.md)

[you can link to files in folders](Ressourcen/Code) (this file lives in deep/link.md)

Edit `views/index.html` to change the outer look and feel of the page. (If anyone wants to apply some .css magic, go for it!)
