**Intent Klassification:**

Meine Definition und Umsetzungsidee ////

W = Menge der (engl.) Wörter
I = Menge von Intents inkl. immer den leeren Intent bzw. sozusagen nicht zuzuordnen

w<sup>x</sup> -> i

mit w elementof W und

i elementof I

x element der natürlichen zahlen

//////////

k-nearest Neightbors mit Entitäten aus W selber implementieren (und oder/ google bert tensorflow / spacy)  mit csv file und darin enthaltenen vorgegebenen sätzen bzw. anweisungen
in Spalten von Intents (oder aber auch support vector machines)

csb file zum beispiel mit monkey learn zu erstellen

für bert etc auch Dateiformate wie json zu verwenden.

//////////////

Bsp:

Ich möchte das Buch aus dem Regal rausholen.

Intent: Interaktion
Entitäten: Buch, Regal, rausholen


**Paper und wissenschaftliche Erkenntnisse:**

Es gibt Regel und Datenbasierte Intent Classification.
Wir schauen hier auf die Datenbasierte Intent Cassification da diese flexibler und mächtiger ist.

Wichtig sind :

Feedback Mechanismen, Genauigkeit des Erkennung, Zeit bis zum Ergebnis !!!!!!

Es sind verschiedene Entitästypen von Intents zu klassifizieren (Bps. Kommunikation, Bewegung oder Inspektion etc.). Erst wie bei einer Eingabe der Typt bestimmt und dann der der genaue Intent.

Training Dataset: Daten aus denen Eigenschaften bestimmt werden die mit einer warscheinlichkeit auf Intent hinweisen.
                  Mit dem Trainig Dataset werden diese (props and popas) herauskristalliesiert und immer genauer (je nach größe)
                  
Test Dataset : wird geprüft ob Eingaben mit den entsprechenden Eigenschaften tatsächlich so zugewiesen werden sollen oder ob man noch nachjustieren oder verändern muss                  


Rechenwerte zu erstellen wie Accuracy, Precision, Recall

Links: 

[1](https://www.researchgate.net/profile/Al_Rahman/publication/323211844_Programming_challenges_of_chatbot_Current_and_future_prospective/links/5aba5841a6fdcc0e3d9ee3d9/Programming-challenges-of-chatbot-Current-and-future-prospective.pdf)

[2](https://www.researchgate.net/profile/Andreas_Stoeckl2/publication/318661551_Classification_of_Chatbot_Inputs/links/597642e8a6fdcc8348aa52e4/Classification-of-Chatbot-Inputs.pdf)

[3](https://monkeylearn.com/blog/intent-classification/)

[4 SoAPaper](https://arxiv.org/pdf/2004.03705.pdf)