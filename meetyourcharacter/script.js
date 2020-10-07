setWords()

function setWords() {
  const being = [
    "Your character’s biggest insecurity",
    "The person(s) who raised your character",
    "Your character’s favorite place",
    "Your character’s favorite possession",
    "The person your character trusts most",
    "Your character’s nemesis",
    "Your character at dinnertime",
    "Your character’s favorite breakfast",
    "Your character on a special occasion",
    "One of your character’s secrets",
    "Your character as a child",
    "Your character in old age",
    "One of your character’s hobbies",
    "A chore your character hates doing",
    "Where your character sleeps",
    "Where your character lives",
    "One of your character’s fears",
    "What your character is doing at 10am on an ordinary day",
    "What your character is doing at 8pm on an ordinary day",
    "Your character’s favorite book/movie/game",
    "One of your character’s goals",
    "Your character’s favorite outfit",
    "Something your character hates wearing",
    "What your character does when they’re feeling sad",
    "Something that your character gets excited about",
    "Something your character views as a treat",
    "Something your character envies",
    "Something that annoys your character",
    "An unusual habit your character has",
    "How your character reacts to praise",
    "How your character reacts to criticism",
    "Your character's ideal best friend",
    "Your character's actual best friend",
    "How your character gets around",
    "Something your character looks forward to",
    "Your character's neighbors",
    "Your character's personal hero",
    "Something your character believes in",
    "A recurring dream your character has",
    "What happens when your character hears their favorite song",
    "Your character's favorite childhood toy",
  ];


  const randomNumber1 = Math.floor(Math.random() * being.length);

  document.getElementById("being").innerHTML = being[randomNumber1];

}
