let options = document.getElementById('wordsearch-options');

function loadWordList(name) {
  fetch('wordlists/' + name + '.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    options.elements.words.value = text;
  });
}

document.getElementById('load-planets').addEventListener('click', function(e) {
  loadWordList('planets');
});

document.getElementById('load-gems').addEventListener('click', function(e) {
  loadWordList('gems');
});


let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let directions = [
  [1, 0],
  [0, 1],
  [1, 1],
  [-1, 1],
  [1, -1],
  // Backwards directions
  [-1, 0],
  [0, -1],
  [-1, -1],
];

options.addEventListener('submit', function(e) {
  e.preventDefault();

  let width = options.elements.width.value;
  let height = options.elements.height.value;
  let backwards = options.elements.backwards.checked;

  let words = options.elements.words.value;
  words = words.split(/\s+/);
  let filteredWords = [];
  for(let i = 0; i < words.length; ++i) {
    let word = words[i].toUpperCase();;
    if(word.length === 0) {
      continue;
    }
    for(let c = 0; c < word.length; ++c) {
      if(letters.indexOf(word[c]) === -1) {
        alert('Invalid word: ' + word);
      }
    }
    filteredWords.push(word);
  }
  if(filteredWords.length === 0) {
    document.getElementById('wordsearch-play-button').disabled = true;
    return;
  }
  options.elements.words.value = filteredWords.join('\n');

  generateGrid(filteredWords, width, height, backwards);
});

document.getElementById('wordsearch-reveal').addEventListener('change', function() {
  if(this.checked) {
    document.getElementById('wordsearch-grid').classList.add('reveal');
  } else {
    document.getElementById('wordsearch-grid').classList.remove('reveal');
  }
});

function generateGrid(words, width, height, backwards) {
  // Sort word list by decreasing length
  words = words.slice();
  words.sort(function(a, b) {
    return b.length - a.length;
  });

  // Which words have been placed
  let wordPlaced = [];
  for(let i = 0; i < words.length; ++i) {
    wordPlaced[i] = false;
  }

  // Initialize grid with random letters
  let grid = [];
  for(let i = 0; i < width * height; ++i) {
    let num = Math.floor(Math.random() * 26);
    grid[i] = letters[num];
  }

  // Which grid cell has been picked
  gridPicked = [];
  for(let i = 0; i < width * height; ++i) {
    gridPicked[i] = false;
  }

  // Try to place each word in turn
  // TODO: Recursive?
  for(let wordNum = 0; wordNum < words.length; ++wordNum) {
    let word = words[wordNum];
    console.log('Placing', word);

    let possibleLocations = [];
    // Build list of possible locations with count of constraints
    let numDirections = directions.length;
    if(!backwards) {
      numDirections = 5;
    }
    for(let direction = 0; direction < numDirections; ++direction) {
      let dx = directions[direction][0];
      let dy = directions[direction][1];

      // Pick where the word can be
      let minX = 0;
      let minY = 0;
      let maxX = width - 1;
      if(dx !== 0) {
        maxX = width - word.length;
      }
      let maxY = height - 1;
      if(dy !== 0) {
        maxY = height - word.length;
      }

      // Change location to be starting location, no matter the direction
      if(dx === -1) {
        minX = width - 1 - maxX;
        maxX = width - 1;
      }
      if(dy === -1) {
        minY = height - 1 - maxY;
        maxY = height - 1;
      }

      // Test all locations
      for(let sy = minY; sy <= maxY; ++sy) {
        for(let sx = minX; sx <= maxX; ++sx) {
          let fits = true;
          let constraints = 0;
          for(let i = 0; i < word.length; ++i) {
            let x = sx + dx * i;
            let y = sy + dy * i;
            if(gridPicked[y * width + x]) {
              if(grid[y * width + x] === word[i]) {
                constraints++;
              } else {
                fits = false;
                break;
              }
            }
          }

          if(fits) {
            possibleLocations.push({direction, sx, sy, constraints});
          }
        }
      }
    }

    // Sort possible locations by decreasing number of constraints
    possibleLocations.sort(function(a, b) {
      return b.constraints - a.constraints + Math.random() - 0.5;
    });
    console.log('Possible locations:', possibleLocations);

    if(possibleLocations.length === 0) {
      continue;
    }

    // Pick first possibility
    // TODO: Recurse here?
    let loc = possibleLocations[0];
    for(let i = 0; i < word.length; ++i) {
      let x = loc.sx + directions[loc.direction][0] * i;
      let y = loc.sy + directions[loc.direction][1] * i;
      grid[y * width + x] = word[i];
      gridPicked[y * width + x] = true;
    }
    wordPlaced[wordNum] = true;
  }

  // Fill the grid element in the page with the letters
  let gridElem = document.getElementById('wordsearch-grid');
  gridElem.innerHTML = '';
  let gridSet = 0;
  for(let y = 0; y < height; ++y) {
    let rowElem = document.createElement('tr');
    for(let x = 0; x < width; ++x) {
      let cellElem = document.createElement('td');
      if(gridPicked[y * width + x]) {
        gridSet++;
        cellElem.className = 'in-word';
      }
      cellElem.innerText = grid[y * width + x];
      rowElem.appendChild(cellElem);
    }
    gridElem.appendChild(rowElem);
  }

  // List the words to be found
  let listElem = document.getElementById('wordsearch-list');
  listElem.innerHTML = '';
  let listedWords = [];
  let placedCount = 0;
  for(let i = 0; i < words.length; ++i) {
    if(wordPlaced[i]) {
      listedWords.push(words[i]);
      placedCount++;
    }
  }
  density = gridSet / (width * height);

  document.getElementById('wordsearch-text').innerText = 'The following ' + placedCount + ' words have been hidden:';
  listedWords.sort();
  for(let i = 0; i < listedWords.length; ++i) {
    let wordElem = document.createElement('li');
    wordElem.innerText = listedWords[i];
    listElem.appendChild(wordElem);
  }

  // Prepare the "play" button
  let playForm = document.getElementById('wordsearch-play-form');
  playForm.elements.width.value = width;
  playForm.elements.height.value = height;
  playForm.elements.grid.value = grid.join('');
  playForm.elements.words.value = listedWords.join('-');
  document.getElementById('wordsearch-play-button').disabled = false;
}

window.addEventListener('load', function() {
  document.getElementById('wordsearch-play-button').disabled = true;
});
