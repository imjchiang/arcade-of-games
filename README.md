# Arcade of Games (rKD)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Purpose
To create a full stack web application where users can play board games with other users and store/view their personal data about games they have played.

# Status
IN DEVELOPMENT

# Complete
> ## Front End
> - Gomoku multiplayer
> - Checkers multiplayer
> - user sign in/verification
> - basic profile page
> - pages for games
> - basic site (home, about, explore pages)
> ## Back End
> - models for user verification

# In Progress
> ## Front End
> - user profile page
> - game data for users
> - single player Gomoku
> - single player Checkers
> - quit, restart, etc.. panels for Checkers
> ## Back End
> - sockets (for multiplayer online)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Games
## Gomoku
### Background:
Gomoku is a Japanese board game that has existed since the Meiji Restoration Period. The name Gomoku literally translates to "five line-up" or in other words, five in a row. This game has been popular in many places Asia and was introduced to Britain in the 19th century as Go Bang.
### Purpose: 
Each player takes turns to place their piece down on the board. The first player to get five of their pieces in a row (horizontally, vertically, or diagonally) wins.
### Snapshots:


## Checkers
### Background:
Checkers is...
### Purpose: 
Each player takes turns to place their piece down on the board. The first player to capture all the opposing player's pieces or prevent the opposing player's pieces from moving wins.
### Snapshots:

---

## Installation (for local use)
1. Fork and Clone the git repository at [Link Here](https://github.com/imjchiang/arcade-of-games)
2. Change Directory to the backend folder and use command ```npm i``` to install all the necessary node modules
3. add a .env file to the backend folder and add ```JWT_SECRET="RANDOMSTRINGHERE"``` and ```MONGO_URI="mongodb://localhost:27017/databaseNameHere"``` on separate lines and ```ATLAS_URI="mongodb+srv://exitcodeZero:reactiveMangos@exitcodezero.imblw.azure.mongodb.net/exitcodeZero?retryWrites=true&w=majority"``` if you want to deploy your database through ATLAS
