setWords()

function setWords() {
  const being = [
    "Tootharax",
    "Eedorun",
    "Thunkachu",
    "Derpamon",
    "Dapizard",
    "Dale",
    "Elegorph",
    "Grickle",
    "Coronette",
    "Pittapod",
    "Thraxobee",
    "Mewthree",
    "Dreepachu",
    "Doublefen",
    "Frylex",
    "Beariben",
    "Rowtongue",
    "Fleep",
    "Puppisaur",
    "Vergonia",
    "Guardarade",
    "Vinesnit",
    "Ralph",
    "Spygrab",
    "Possumi",
    "Jawber",
    "Nubbins",
    "Nibblepuff",
    "Bellitron",
    "Rookrok",
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
    "Mimic",
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
  ];



  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);


  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];


}
