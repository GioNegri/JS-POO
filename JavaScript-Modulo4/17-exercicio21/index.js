const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatriz = new Thief ('Beatriz', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatriz, cain})

cain.switchStance()
arthur.attack(cain)
beatriz.attack(arthur)

console.table({ arthur, beatriz, cain})

cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)
beatriz.attack(cain)

console.table({ arthur, beatriz, cain})