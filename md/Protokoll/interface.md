# Interface Design und Aufgaben

## TODO Interface

- Buttons zur Eingabe
- Modalfenster
- Responsiveness für mobile Geräte
- Raum und Level abhängig von Information in JSON setzen

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

Nachtrag Interface: da wir nur für 2 Zwecke diesen Modal brauchen (Einstellungen & Hilfe) haben wir beschlossen kein Modul zu machen sondern 2 statische Modals die nach Bedarf ein und ausgeblendet werden können.