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
    
  ];
  const occupation = [
    "storm",
    "silence",
    "zap",
    "gas",
    "sweet dance moves",
    "purify air",
    "screaming. just screaming",
  ];
  
  

  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);


  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];
   
  
}