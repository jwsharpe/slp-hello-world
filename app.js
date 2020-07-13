const { SlippiGame } = require("slp-parser-js");
const fs = require("fs");
const gamesDir = "./Pound-2019/vgbootcamp";

const characterDictionary = [
  "Captain Falcon",
  "Donkey Kong",
  "Fox",
  "Mr. Game & Watch",
  "Kirby",
  "Bowser",
  "Link",
  "Luigi",
  "Mario",
  "Marth",
  "Mewtwo",
  "Ness",
  "Peach",
  "Pikachu",
  "Ice Climbers",
  "Jigglypuff",
  "Samus",
  "Yoshi",
  "Zelda",
  "Shiek",
  "Falco",
  "Young Link",
  "Dr. Mario",
  "Roy",
  "Pichu",
  "Ganondorf",
];
const files = fs.readdirSync(gamesDir);

const games = files.map((e) => new SlippiGame(gamesDir + "/" + e));

const count = {};
games.forEach((game) => {
  game.getSettings().players.forEach((player) => {
    const character = characterDictionary[player.characterId];
    if (count[character] && player.type === 0) {
      count[character] += 1;
    } else {
      count[character] = 1;
    }
  });
});
console.log(count);