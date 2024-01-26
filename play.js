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

window.addEventListener('load', function() {
  let params = loadParams(window.location.search);
  if(params.error) {
    let error = document.getElementById('wordsearch-error');
    error.style.display = '';
    error.innerText = params.error;
    return;
  }

  let {width, height, grid, words} = params;

  // Fill the grid element in the page with the letters
  let gridElem = document.getElementById('wordsearch-grid');
  gridElem.innerHTML = '';
  for(let y = 0; y < height; ++y) {
    let rowElem = document.createElement('tr');
    for(let x = 0; x < width; ++x) {
      let cellElem = document.createElement('td');
      cellElem.innerText = grid[y * width + x];
      rowElem.appendChild(cellElem);
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
