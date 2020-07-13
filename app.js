
const { SlippiGame, characters } = require('slp-parser-js');
const fs = require("fs");
const gamesDir = "./Pound-2019/vgbootcamp";

const files = fs.readdirSync(gamesDir);

const games = files.map((e) => new SlippiGame(gamesDir + "/" + e));

const count = {};
games.forEach((game) => {
  game.getSettings().players.forEach((player) => {
    const character = characters.getCharacterName(player.characterId);
    if (count[character] && player.type === 0) {
      count[character] += 1;
    } else {
      count[character] = 1;
    }
  });
});
console.log(count);