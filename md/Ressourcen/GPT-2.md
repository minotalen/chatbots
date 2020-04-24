# GPT-2

## was ist das?

- gute performance
- generiert textparagraphen
- basiert auf (GPT)unüberwachtem tiefenlernen. Es ist zwar schwer ein gutes Anwendungsgebiet für
  unüberwachtes Lernen statt überwachtem zu finden, aber bei großen Mengen an ungelabelten Daten
  lässt sich dies nicht effizient überwachen und dank der wachsenden Leistung sind dank
  unüberwachtem Lernen(ohne labels) diese recht gut zu bewältigen. (Dies ist der Ansatz von GPT
  und stammt aus dem Blog zu GPT)
- trainiert darauf, das nächste wort vorherzusagen aufgrund der vorhergegangenen Wörter
- basiert auf transformer
- sprach-/textaufgaben: Q and A, Leseverständnis, zusammenfassung, übersetzung
- kann aus textkontext style adaptiere
- gut mit lateinischen schriftzeichen, da auf englisch trainiert
- GPT-2 kann man sich vorstellen wie 'ne black box als I/O-Bibliothek
- input: liste von tokens
- output: wahrscheinlichkeiten(vorhersagen) fürs nächste token
- tokens sind mit byte pair encoding komprimiert, basically paare werden rekursiv
  mit einem neuen zeichen verkürzt, bis ne abbruchbedingung erreicht wird(z.B.
  es gibt keine paare mehr als einmal mehr), decoding benutzt dann das ganze in
  revers mithilfe der aufgebauten encoding-übersetzungen

## wie benutzt man das?

- default version: 124 MB bei Trainigsdata < 10 MB, bei pip gpt-2-simple gennant,
  pip ist der installer von python, python 3.4+ beinhaltet pip, ist ne konsolenapplikation:
- python import: 3ter link, is'ne python bibliothek

## links

- [entwickler-seite](https://openai.com/about/)
- [blog zu GPT](https://openai.com/blog/language-unsupervised/)
- [guide](https://minimaxir.com/2019/09/howto-gpt2/)
- [pip unter windows installieren](https://dev.scoutman.at/2014/04/python-pip-unter-windows-installieren/)
- [Dokumentation](https://huggingface.co/transformers/installation.html)

## TL;DR

generiert Text aufgrund von textkontext(Trainingsdaten), basiert auf transformer,
nachfolger von GPT(unüberwachtes tiefenlernen, weil riesige Datenmengen und wachsende Rechenleistung), 
nur mit weitaus mehr daten(10x) ist ne python lib, Q and A,
Leseverständnis, zusammenfassung und übersetzung, mit pip herunterladen

## python chatbots

man nimmt Traininsdaten (z.B. mit .json), tokenisiert die eingaben(z.B. als "intents") und ausgaben
und damit lernt dann GPT-2
