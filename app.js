
const { SlippiGame, characters } = require('slp-parser-js');

// node's filesystem API
const fs = require("fs");

// games directory to loop over.
const gamesDir = "./Pound-2019/vgbootcamp";

const files = fs.readdirSync(gamesDir);

// convert files to slippi game objects
const games = files.map((e) => new SlippiGame(gamesDir + "/" + e));

//standard "memo"-ization to count character usage. 
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