setWords()

function setWords() {
  const being = [
    "Tootharax",
    "Eedorun",
    "Thunkachu",
    "Derpamon",
    "Dabizard",
    "Dale",
    "Elegorph",
    "Grickle",
    "Coronette",
    "Pittapod",
    "Thraxobee",
    "Mewthree",
    "Dreepachu",
  ];
  const occupation = [
    "Storm",
    "Silence",
    "Zap",
    "Gas",
    "Sweet Dance Moves",
    "Purify Air",
    "Screaming",
    "Looking so cute that everyone else is distracted",
    "Mega High-Fives",
    "Pukes out delicious ramen on command",
    "Flying at Night",
  ];



  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);


  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];


}
