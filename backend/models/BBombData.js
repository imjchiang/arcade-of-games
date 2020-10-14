const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//BBombData Schema
const BBombDataSchema = new Schema(
{
    //number of games played
    gamesPlayed:
    {
        type: Number,
        default: 0
    },
    //number of bombs dropped
    bombsDropped:
    {
        type: Number,
        default: 0
    },
    //number of bunkers hit
    bunkersHit:
    {
        type: Number,
        default: 0
    },
    //number of lives lost
    livesLost:
    {
        type: Number,
        default: 0
    },
    //current level
    level:
    {
        type: Number,
        default: 0
    },
    //unlocked vehicles
    unlockedVehicle: 
    {
        type: Number,
        default: 0
    }
});

module.exports = BBombData = mongoose.model("BBombData", BBombDataSchema);
