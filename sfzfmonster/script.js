setWords()

function setWords() {
  const being = [
    "Tootharax",
    "Eedorun",
    "Thunkachu",
    "Derpamon",
    "Dapizard",
    "Dale",
    "Elefungus",
    "Grickle",
    "Coronette",
    "Pittapod",
    "Thraxobee",
    "Mewthree",
    "Dreepachu",
    "Snickerpoodle",
    "Frylex",
    "Bearybeary",
    "Rowtongue",
    "Fleep",
    "Puppisaur",
    "Jellypitch",
    "Gatoraider",
    "Vinesnit",
    "Ralph",
    "Spygrab",
    "Lowpossum",
    "Jawber",
    "Nubbins",
    "Nibblepuff",
    "Bellitron",
    "Rookrok",
    "Painbow",
    "Polarglare",
    "Sneercat",
    "Tiedyeger",
    "Songhorn",
    "Toucan't",
    "Groundflash",
    "Marshmallet",
    "Octopush",
    "Foxensox",
    "Whinnypig",
    "Jollypop",
    "Puddlelip",
    "Reducks",
    "Pumpking",
    "Cattywhomper",
    "Rattoon",
    "Cuddlefish",
    "Sledgehog",
    "Oopsiday",
    "Benji",
    "Daffypool",
    "Pinsky",
  ];
  const occupation = [
    "Rot",
    "Mute",
    "Zap",
    "Gas",
    "Sweet Dance Moves",
    "Purify Air",
    "Screaming. Just screaming.",
    "Looking so cute that everyone else is distracted",
    "Mega High-Fives",
    "Pukes out delicious ramen on command",
    "Flying at Night",
    "Mirror",
    "Glitter",
    "The Power of Love",
    "Stuffed Animals",
    "Fast Food",
    "Wifi",
    "Hiccups",
    "Perfume",
    "Screen Time",
    "Timeout",
    "Eraser",
    "Zoom",
    "Glue",
    "Makeup",
    "Unearthly glow",
    "Crafting",
    "Kissing",
    "Faces",
    "Knitting",
    "Skating",
    "Origami",
    "Fluffy",
    "Spots",
    "Mood",
    "Bunnies",
    "Snot",
    "Hair",
    "Cheese",
    "Memes",
    "Zines",
    "Umbrella",
    "Cactus",
    "Snuggling",
    "Double Bubble",
    "Bloop",
    "Garbage",
    "Banjo",
    "Eggshells",
    "Random",
    "Math",
  ];



  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);


  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];


}
