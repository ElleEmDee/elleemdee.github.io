setWords()

function setWords() {
  const incident = [
    "they receive a mysterious letter",
    "they accidentally win a contest",
    "they inherit a fortune",
    "they are mistaken for a killer",
    "they discover a magic door",
    "ants attack a high rise",
  ];
  const protagonist = [
    "a superhero",
    "the devil",
    "an office worker with a secret",
    "three toddlers in a trenchcoat",
    "the world's smartest dog",
    "the President of the United States",
    "an alien empress",
    "a supermodel",
  ];

   const goal = [
     "clear their name",
     "get $10,000 in cash",
     "steal back their ancestral talisman",
     "get home",
     "win a beauty pageant",
      ];

    const antagonist = [
      "a superhero",
      "gravity",
      "a pack of raccoons",
    ];

    const obstacle = [
      "they can't go out in the sun",
      "they are famous",
      "they sneeze uncontrollably",
      "they are just a kid",
      "they have amnesia",
    ];

    const setting = [
      "Mars",
      "a space station",
      "an unmapped jungle",
      "a video game",
      "the world's tallest apartment building",
    ];

    const badoutcome = [
      "they turn to stone",
      "they are sent to prison",
      "everyone falls asleep forever",
      "they suffer the ultimate embarrassment",
    ];

  const randomNumber1 = Math.floor(Math.random() * incident.length);
  const randomNumber2 = Math.floor(Math.random() * protagonist.length);
  const randomNumber3 = Math.floor(Math.random() * goal.length);
  const randomNumber4 = Math.floor(Math.random() * antagonist.length);
  const randomNumber5 = Math.floor(Math.random() * obstacle.length);
  const randomNumber6 = Math.floor(Math.random() * setting.length);
  const randomNumber7 = Math.floor(Math.random() * badoutcome.length);

  document.getElementById("incident").innerHTML = incident[randomNumber1];
  document.getElementById("protagonist").innerHTML = protagonist[randomNumber2];
  document.getElementById("goal").innerHTML = goal[randomNumber3];
  document.getElementById("antagonist").innerHTML = antagonist[randomNumber4];
  document.getElementById("obstacle").innerHTML = obstacle[randomNumber5];
  document.getElementById("setting").innerHTML = setting[randomNumber6];
  document.getElementById("badoutcome").innerHTML = badoutcome[randomNumber7];

  document.getElementById("incident1").innerHTML = incident[randomNumber1];
  document.getElementById("incident2").innerHTML = incident[randomNumber1];
  document.getElementById("incident3").innerHTML = incident[randomNumber1];

  document.getElementById("protagonist1").innerHTML = protagonist[randomNumber2];
  document.getElementById("protagonist2").innerHTML = protagonist[randomNumber2];
  document.getElementById("protagonist3").innerHTML = protagonist[randomNumber2];
  document.getElementById("protagonist4").innerHTML = protagonist[randomNumber2];
  document.getElementById("protagonist5").innerHTML = protagonist[randomNumber2];

  document.getElementById("goal1").innerHTML = goal[randomNumber3];
  document.getElementById("goal2").innerHTML = goal[randomNumber3];
  document.getElementById("goal3").innerHTML = goal[randomNumber3];
  document.getElementById("goal4").innerHTML = goal[randomNumber3];
  document.getElementById("goal5").innerHTML = goal[randomNumber3];

  document.getElementById("antagonist1").innerHTML = antagonist[randomNumber4];
  document.getElementById("obstacle1").innerHTML = obstacle[randomNumber5];

  document.getElementById("setting1").innerHTML = setting[randomNumber6];

  document.getElementById("badoutcome1").innerHTML = badoutcome[randomNumber7];
  document.getElementById("badoutcome2").innerHTML = badoutcome[randomNumber7];

}
