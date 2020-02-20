# MyReads Project

In this application, the main page displays a list of "decks" (i.e. categories), each of which contains a number of cards. If there is no deck you can create with add new deck.

Each deck has a control that lets you add new card or start quiz.

The result page shows your result from quiz

## Get Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.js # This is the root of your app. Contains Navigator and statusbar
    └── Components
        ├── Deck.js # Deck view for creating new question or start quiz
        ├── DeckList.js # Contains decks
        ├── Navigator.js # Stack and tab navigator together and all screen to navigate.
        ├── NewDeck.js # Create new deck with title.
        ├── NewQuestion.js # Add card's question and answer, if you choose correct that means answer is correct.
        ├── Quiz.js # Flip card view makes question and answer in different side of card. 
        ├── Result.js # Show results of quiz. Has restart or to deck buttons. 
        └── TabNavigator.js # List or new deck view with tabs
    └── Utils
        ├── api.js # Has functions for interact with AsyncStorage
        ├── colors.js # Colors for view.
        ├── helpers.js # Helper classes.
        
```

