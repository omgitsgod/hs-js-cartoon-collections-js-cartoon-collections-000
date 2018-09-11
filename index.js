function dwarfRollCall(dwarves) {
  var blah = [];
  for (var i = 0; i < dwarves.length; i++) {
    blah.push(`${i + 1}. ${dwarves[i]} `);
  }

  return blah.join('');
}

function summonCaptainPlanet(planeteerCalls) {
  var blah = [];

  for (var i = 0; i < planeteerCalls.length; i++) {
    blah.push(`${planeteerCalls[i].toUpperCase()}!`);
  }

  return blah;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }

  }
}

function findTheCheese(foods) {
  if (foods.some(x => x == 'cheddar')) {
    return 'cheddar';
  } else if (foods.some(x => x == 'gouda')) {
    return 'gouda';
  } else if (foods.some(x => x == 'camebert')) {
    return 'camebert';
  } else if (foods.some(x => x == 'american')) {
    return 'american'
  } else {
    return 'no cheese!';
  }
}

function wordsWithB(arr) {
  
}