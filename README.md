# Balloon Bomber Refreshed

## Purpose
To create an interface where a user could sign up and play games (for now just limited to balloon bomber) and store their game data under their profile and user data.

## Games
### Balloon Bomber
Fly as a balloon or another flying entity (which can be unlocked as you progress) and attack/bomb enemy entities while dodging projectiles shot from those enemies.

## Status
Building

## Installation (for local use)
1. Fork and Clone the git repository at [Link Here](https://github.com/imjchiang/balloon-bomber-refreshed)
2. Change Directory to the backend folder and use command ```npm i``` to install all the necessary node modules
3. add a .env file to the backend folder and add ```JWT_SECRET="RANDOMSTRINGHERE"``` and ```MONGO_URI="mongodb://localhost:27017/databaseNameHere"``` on separate lines and ```ATLAS_URI="mongodb+srv://exitcodeZero:reactiveMangos@exitcodezero.imblw.azure.mongodb.net/exitcodeZero?retryWrites=true&w=majority"``` if you want to deploy your database through ATLAS
