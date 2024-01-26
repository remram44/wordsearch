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

  // TODO: Check words are in the grid

  return {width, height, grid, words};
}

let gridElem = document.getElementById('wordsearch-grid');
let width, height, grid, gridElems, words, wordsFound;
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
  wordsFound = {};

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
  let listElem = document.getElementById('wordsearch-list');
  listElem.innerHTML = '';
  document.getElementById('wordsearch-text').innerText = 'The following ' + words.length + ' words have been hidden above:';
  for(let i = 0; i < words.length; ++i) {
    let wordElem = document.createElement('li');
    wordElem.innerText = words[i];
    listElem.appendChild(wordElem);
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
    start = null;

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
