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

function checkWordInGrid(word, grid, width, height, x, y, dx, dy) {
  for(let i = 0; i < word.length; ++i) {
    if(x < 0 || x >= width || y < 0 || y >= height) {
      return false;
    }
    if(grid[y * width + x] !== word[i]) {
      return false;
    }
    x += dx;
    y += dy;
  }
  return true;
}

function checkWordsInGridDir(words, grid, width, height, wordsFound, dx, dy, sx, sy, dsx, dsy) {
  while(sx >= 0 && sx < width && sy >= 0 && sy < height) {
    let x = sx;
    let y = sy;
    while(x >= 0 && x < width && y >= 0 && y < height) {
      for(let i = 0; i < words.length; ++i) {
        if(checkWordInGrid(words[i], grid, width, height, x, y, dx, dy)) {
          wordsFound[words[i]] = true;
        }
      }

      x += dx;
      y += dy;
    }

    sx += dsx;
    sy += dsy;
  }
}

function checkWordsInGrid(words, grid, width, height) {
  let wordsFound = {};

  for(let direction = 0; direction < directions.length; ++direction) {
    // Reading direction
    let dx = directions[direction][0];
    let dy = directions[direction][1];

    if(dx === 1) {
      checkWordsInGridDir(words, grid, width, height, wordsFound, dx, dy, 0, 0, 0, 1);
    }
    if(dx === -1) {
      checkWordsInGridDir(words, grid, width, height, wordsFound, dx, dy, width - 1, 0, 0, 1);
    }
    if(dy === 1) {
      checkWordsInGridDir(words, grid, width, height, wordsFound, dx, dy, 0, 0, 1, 0);
    }
    if(dy === -1) {
      checkWordsInGridDir(words, grid, width, height, wordsFound, dx, dy, 0, height - 1, 1, 0);
    }
  }

  let wordsNotFound = [];
  for(let i = 0; i < words.length; ++i) {
    if(!wordsFound[words[i]]) {
      wordsNotFound.push(words[i]);
    }
  }
  return wordsNotFound;
}

function loadParams(str) {
  let params = new URLSearchParams(str);

  let width = parseInt(params.get('width'), 10);
  if(isNaN(width) || width < 3 || width > 100) {
    return {error: 'Invalid dimensions'};
  }
  let height = parseInt(params.get('height'), 10);
  if(isNaN(height) || height < 3 || height > 100) {
    return {error: 'Invalid dimensions'};
  }

  let grid = params.get('grid');
  if(grid.length != width * height) {
    return {error: 'Invalid grid size'};
  }
  for(let i = 0; i < grid.length; ++i) {
    if(letters.indexOf(grid[i]) === -1) {
      return {error: 'Invalid grid'};
    }
  }

  let words = params.get('words');
  if(!words) {
    return {error: 'Invalid list of words'};
  }
  words = words.split('-');
  for(let i = 0; i < words.length; ++i) {
    let word = words[i];
    for(let c = 0; c < word.length; ++c) {
      if(letters.indexOf(word[c]) === -1) {
        return {error: 'Invalid word "' + word + '"'};
      }
    }
  }

  let wordsNotFound = checkWordsInGrid(words, grid, width, height);
  if(wordsNotFound.length !== 0) {
    let notFound = wordsNotFound.slice(0, 3).join(', ');
    if(wordsNotFound.length > 3) {
      notFound += '...';
    }
    return {error: 'Missing words in grid: ' + notFound};
  }

  return {width, height, grid, words};
}

let gridElem = document.getElementById('wordsearch-grid');
let width, height, grid, gridElems, words, wordsFound, wordsElems;
let start = null;

window.addEventListener('load', function() {
  let params = loadParams(window.location.search);
  if(params.error) {
    let error = document.getElementById('wordsearch-error');
    error.style.display = '';
    error.innerText = params.error;
    return;
  }

  width = params.width;
  height = params.height;
  grid = params.grid;
  words = params.words;
  wordsFound = 0;

  // Fill the grid element in the page with the letters
  gridElems = {};
  gridElem.innerHTML = '';
  for(let y = 0; y < height; ++y) {
    let rowElem = document.createElement('tr');
    for(let x = 0; x < width; ++x) {
      let cellElem = document.createElement('td');
      cellElem.innerText = grid[y * width + x];
      rowElem.appendChild(cellElem);
      gridElems[x + '-' + y] = cellElem;
      cellElem.addEventListener('click', function() { clicked(x, y); });
    }
    gridElem.appendChild(rowElem);
  }

  // List the words to be found
  wordsElems = {};
  let listElem = document.getElementById('wordsearch-list');
  listElem.innerHTML = '';
  document.getElementById('wordsearch-text').innerText = 'The following ' + words.length + ' words have been hidden above:';
  for(let i = 0; i < words.length; ++i) {
    let wordElem = document.createElement('li');
    wordElem.innerText = words[i];
    listElem.appendChild(wordElem);
    wordsElems[words[i]] = wordElem;
  }
});

function clicked(x, y) {
  if(start === null) {
    // Select start of word
    start = [x, y];

    gridElems[x + '-' + y].classList.add('selected');
    for(direction = 0; direction < directions.length; ++direction) {
      let dx = directions[direction][0];
      let dy = directions[direction][1];
      let ox = x + dx;
      let oy = y + dy;
      while(ox >= 0 && ox < width && oy >= 0 && oy < height) {
        gridElems[ox + '-' + oy].classList.add('lined');
        ox += dx;
        oy += dy;
      }
    }

    gridElem.classList.add('selected');
  } else {
    // Select end of word
    let pos1 = start;
    let pos2 = [x, y];
    start = null;
    selectWord(pos1, pos2);
    selectWord(pos2, pos1);

    // Reset styles
    for(let y = 0; y < height; ++y) {
      for(let x = 0; x < width; ++x) {
        let elem = gridElems[x + '-' + y];
        elem.classList.remove('selected');
        elem.classList.remove('lined');
      }
    }
    gridElem.classList.remove('selected');
  }
}

function selectWord(start, end) {
  for(let direction = 0; direction < directions.length; ++direction) {
    let dx = directions[direction][0];
    let dy = directions[direction][1];

    let word = [];
    let hitEnd = false;
    {
      let [x, y] = start;
      while(x >= 0 && x < width && y >= 0 && y < height) {
        word.push(grid[y * width + x]);
        if(x === end[0] && y === end[1]) {
          hitEnd = true;
          break;
        }
        x += dx;
        y += dy;
      }
    }
    if(!hitEnd) {
      continue;
    }

    word = word.join('');
    if(words.indexOf(word) === -1) {
      continue;
    }

    wordsElems[word].classList.add('found');

    {
      let [x, y] = start;
      while(x >= 0 && x < width && y >= 0 && y < height) {
        gridElems[x + '-' + y].classList.add('found');
        if(x === end[0] && y === end[1]) {
          break;
        }
        x += dx;
        y += dy;
      }
    }
  }
}
