**Intent Klassification:**

Meine Definition und Umsetzungsidee ////

W = Menge der (engl.) Wörter
I = Menge von Intents inkl. immer den leearen Intent bzw. sozusagen nicht zuzuordnen

w<sup>x</sup> -> i

mit w elementof W und

i elementof I

x element der natürlichen zahlen

//////////

k-nearest Neightbors selber implementieren (und oder/ google bert tensorflow)  mit csv file und darin enthaltenen vorgegebenen sätzen bzw. anweisungen
in Spalten von Intents


**Paper und wissenschaftliche Erkenntnisse:**

Wichtig sind :

Feedback Mechanismen, Genauigkeit des Erkennung, Zeit bis zum Ergebnis !!!!!!

Es sind verschiedene Entitästypen von Intents zu klassifizieren (Bps. Kommunikation, Bewegung oder Inspektion etc.). Erst wie bei einer Eingabe der Typt bestimmt und dann der der genaue Intent.

Training Dataset: Daten aus denen Eigenschaften bestimmt werden die mit einer warscheinlichkeit auf Intent hinweisen.
                  Mit dem Trainig Dataset werden diese (props and popas) herauskristalliesiert und immer genauer (je nach größe)
                  
Test Dataset : wird geprüft ob Eingaben mit den entsprechenden Eigenschaften tatsächlich so zugewiesen werden sollen oder ob man noch nachjustieren oder verändern muss                  


Links: 

[1](https://www.researchgate.net/profile/Al_Rahman/publication/323211844_Programming_challenges_of_chatbot_Current_and_future_prospective/links/5aba5841a6fdcc0e3d9ee3d9/Programming-challenges-of-chatbot-Current-and-future-prospective.pdf)

[2](https://www.researchgate.net/profile/Andreas_Stoeckl2/publication/318661551_Classification_of_Chatbot_Inputs/links/597642e8a6fdcc8348aa52e4/Classification-of-Chatbot-Inputs.pdf)