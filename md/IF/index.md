# Interaktive Fiktion

[GET LAMP doku](https://youtu.be/LRhbcDzbGSU?t=467)  
[Klasse zu interaktiver Fiktion](http://interactive-fiction-class.org/)

### NLP / Parser

[![ELIZA](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ELIZA_conversation.jpg/495px-ELIZA_conversation.jpg)](https://en.wikipedia.org/wiki/ELIZA)  

[Übersicht frühe Chatbots](https://web.stanford.edu/class/cs124/lec/chatbot.pdf)  
[Inform7](http://inform7.com/) ist ein Natural Language Processing Parser für interaktive Fiktion. Geschrieben wird in einer von Menschen lesbaren Sprache.  

    After reading a command:
        if the player's command includes "[R-name]",
            now the R-name of Rumpelstiltskin is the R-name understood;
        if the player's command includes "Rumpelstiltskin":
            now Rumpelstiltskin is identified;
            now Rumpelstiltskin is proper-named.

    Rule for printing the name of Rumpelstiltskin when Rumpelstiltskin is unidentified:
        if the R-name of Rumpelstiltskin is man-thing:
            say "man";
        otherwise:
            say "[R-name]".

[beginners guide](https://en.wikibooks.org/wiki/Beginner%27s_Guide_to_Interactive_Fiction_with_Inform_7/Getting_Started_with_Inform_7)

### Machine Learning 

We introduce TextWorld, a sandbox learning environment for the training and evaluation of RL agents on text-based games. TextWorld is a Python library that handles interactive playthrough of text games, as well as backend functions like state tracking and reward assignment.  
It comes with a curated list of games whose features and challenges we have analyzed. More significantly, it enables users to handcraft or automatically generate new games. 

[wiss. Paper](https://arxiv.org/pdf/1806.11532.pdf)  
[Intro from Microsoft](https://www.microsoft.com/en-us/research/project/textworld/)

[Multi User Dungeon](https://de.wikipedia.org/wiki/Multi_User_Dungeon)


### Ideen

* dynamische Schwierigkeit
