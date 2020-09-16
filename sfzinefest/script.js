setWords()

function setWords() {
  const being = [
    "an elephant",
    "a rat",
    "a dinosaur",
    "a ghost",
    "a donut",
    "a skunk",
    "an octopus",
    "a cactus",
    "a squirrel",
    "a penguin",
    "a unicorn",
    "a pizza",
    "a snail",
    "an alien",
    "a merperson",
    "a vampire",
    "a cat",
    "a dog",
    "a sloth",
    "a kaiju",
    "a werewolf",
    "a raccoon",
    "a bat",
    "a panda",
    "a swamp creature",
    "a tiger",
    "a skeleton",
    "a giraffe",
    "a camel",
    "a flamingo",
    "a jellyfish",
    "a lobster",
    "a spider",
    "a balloon",
    "a moose",
    "a snake",
    "a cow",
    "a peacock",
    "a broccoli",
    "an invisible",
    "a shark",
  ];
  const occupation = [
    "monarch",
    "knight",
    "pirate",
    "YouTube star",
    "spy",
    "scientist",
    "rock star",
    "psychic",
    "wizard",
    "actor",
    "cartoonist",
    "gardener",
    "dog walker",
    "racecar driver",
    "teacher",
    "astronaut",
    "fairy",
    "supervillain",
    "athlete",
    "chef",
    "traveling salesperson",
    "thief",
    "cowhand",
    "comedian",
    "businessperson",
    "dancer",
    "martial artist",
    "detective",
    "writer",
    "toymaker",
    "magical girl",
    "superhero",
  ];

   const situation = [
     "explores a dungeon",
     "finds treasure",
     "goes on a date",
     "runs from a monster",
"has an alien pet",
     "competes in a talent show",
     "sees a ghost",
 "runs for president",
     "buys a gift",
     "does a (failed) science experiment",
     "wears a cursed hat",
     "drives a spaceship",
     "just got superpowers",
     "spies on someone",
     "at a restaurant for monsters",
     "at a museum",
     "teaches a class",
     "breaks something valuable",
     "invents a new machine",
     "visits the future",
     "visits the past",
     "sneaks past a guard",
     "competes in the Olympics",
     "on an alien safari",
     "falls in love at first sight",
     "meets the world's worst magician",
     "meets an incredibly cute monster",
     "on vacation",
     "has a terrible case of the hiccups",
     "tries to do a craft",
     "has an evil twin",
     "plays a card game",
     "goes to the doctor",
     "shows off their favorite outfit",
     "during an alien invasion",
     "cheats at a game",
      ];

  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);
   const randomNumber3 = Math.floor(Math.random() * situation.length);

  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];
   document.getElementById("situation").innerHTML = situation[randomNumber3];

}
