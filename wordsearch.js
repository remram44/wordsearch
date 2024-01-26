let words = [
  'MERCURY',
  'VENUS',
  'EARTH',
  'MARS',
  'JUPITER',
  'SATURN',
  'URANUS',
  'NEPTUNE',
];
words = [
  'ACTINOLITE',
  'ADAMITE',
  'AGATE',
  'ALBITE',
  'ALEXANDRITE',
  'ALGODONITE',
  'ALMANDINE',
  'AMAZONITE',
  'AMBER',
  'AMBLYGONITE',
  'AMETHYST',
  'AMETRINE',
  'AMMOLITE',
  'ANALCIME',
  'ANATASE',
  'ANDALUSITE',
  'ANDESINE',
  'ANDRADITE',
  'ANGLESITE',
  'ANHYDRITE',
  'ANORTHITE',
  'APATITE',
  'APOPHYLLITE',
  'AQUAMARINE',
  'ARAGONITE',
  'AUGELITE',
  'AXINITE',
  'AZURITE',
  'BARITE',
  'BAYLDONITE',
  'BENITOITE',
  'BERYL',
  'BERYLLONITE',
  'BISMUTOTANTALITE',
  'BLOODSTONE',
  'BOLEITE',
  'BORACITE',
  'BORNITE',
  'BRAZILIANITE',
  'BREITHAUPTITE',
  'BROOKITE',
  'BRUCITE',
  'BUSTAMITE',
  'BYTOWNITE',
  'CALCITE',
  'CANASITE',
  'CANCRINITE',
  'CARNELIAN',
  'CASSITERITE',
  'CATAPLEIITE',
  'CELESTITE',
  'CERULEITE',
  'CERUSSITE',
  'CHABAZITE',
  'CHALCEDONY',
  'CHAMBERSITE',
  'CHAROITE',
  'CHILDRENITE',
  'CHIOLITE',
  'CHROMITE',
  'CHRYSOBERYL',
  'CHRYSOCOLLA',
  'CHRYSOPRASE',
  'CINNABAR',
  'CITRINE',
  'CLINOCHLORE',
  'COBALTITE',
  'COLEMANITE',
  'CORAL',
  'CORDIERITE',
  'CORUNDUM',
  'COVELLITE',
  'CREEDITE',
  'CROCOITE',
  'CRYOLITE',
  'CUPRITE',
  'DANBURITE',
  'DATOLITE',
  'DIAMOND',
  'DIASPORE',
  'DICKINSONITE',
  'DIOPSIDE',
  'DIOPTASE',
  'DOLOMITE',
  'DUMORTIERITE',
  'EKANITE',
  'EMERALD',
  'ENSTATITE',
  'EOSPHORITE',
  'EPIDOTE',
  'ETTRINGITE',
  'EUCLASE',
  'EUDIALYTE',
  'EUXENITE',
  'FELDSPAR',
  'FERGUSONITE',
  'FLUORITE',
  'FRIEDELITE',
  'GADOLINITE',
  'GAHNOSPINEL',
  'GARNET',
  'GAYLUSSITE',
  'GRANDIDIERITE',
  'GYPSUM',
  'HAMBERGITE',
  'HAUYNE',
  'HELIODOR',
  'HEMATITE',
  'HEMIMORPHITE',
  'HERDERITE',
  'HESSONITE',
  'HODGKINSONITE',
  'HOLTITE',
  'HOWLITE',
  'HUEBNERITE',
  'HUMITE',
  'HUREAULITE',
  'HURLBUTITE',
  'HYPERITDIABAS',
  'VESUVIANITE',
  'INDERITE',
  'IOLITE',
  'JADEITE',
  'JASPER',
  'JEREMEJEVITE',
  'JET',
  'KORNERUPINE',
  'KURNAKOVITE',
  'KYANITE',
  'KAMMERERITE',
  'LABRADORITE',
  'LANGBEINITE',
  'LAPISLAZULI',
  'LASERBLUE',
  'LAWSONITE',
  'LAZULITE',
  'LEGRANDITE',
  'LEPIDOLITE',
  'LEUCITE',
  'LINARITE',
  'LUDLAMITE',
  'MAGNESITE',
  'MALACHITE',
  'MANGANOTANTALITE',
  'MARCASITE',
  'MELIPHANITE',
  'MELLITE',
  'MICROCLINE',
  'MICROLITE',
  'MILARITE',
  'MILLERITE',
  'MIMETITE',
  'MOLDAVITE',
  'MONAZITE',
  'MOONSTONE',
  'MORDENITE',
  'MORGANITE',
  'NAMBULITE',
  'NATROLITE',
  'MESOLITE',
  'SCOLECITE',
  'NEPHELINE',
  'NEPHRITE',
  'NEPTUNITE',
  'NICCOLITE',
  'OBSIDIAN',
  'OLIGOCLASE',
  'ONYX',
  'OPAL',
  'ORTHOCLASE',
  'PAINITE',
  'PALYGORSKITE',
  'PAPAGOITE',
  'PARGASITE',
  'PARISITE',
  'PEARL',
  'PECTOLITE',
  'PENTLANDITE',
  'PERICLASE',
  'PERIDOT',
  'PERISTERITE',
  'PERTHITE',
  'PETALITE',
  'PHENAKITE',
  'PHOSGENITE',
  'PHOSPHOPHYLLITE',
  'POLLUCITE',
  'POWELLITE',
  'PREHNITE',
  'PROSOPITE',
  'PROTEUS',
  'PROUSTITE',
  'PUMPELLYITE',
  'PURPURITE',
  'PYRARGYRITE',
  'PYRITE',
  'PYROPHYLLITE',
  'PYROXMANGITE',
  'PYRRHOTITE',
  'QUARTZ',
  'QUARTZITE',
  'REALGAR',
  'RHODIZITE',
  'RHODOCHROSITE',
  'RHODONITE',
  'RUBELLITE',
  'RUBY',
  'RUTILE',
  'SAMARSKITE',
  'SANIDINE',
  'SAPPHIRE',
  'SAPPHIRINE',
  'SARCOLITE',
  'SCAPOLITE',
  'SCHEELITE',
  'SCORODITE',
  'SELLAITE',
  'SENARMONTITE',
  'SERANDITE',
  'SERPENTINE',
  'SHATTUCKITE',
  'SHORTITE',
  'SIDERITE',
  'SILLIMANITE',
  'SIMPSONITE',
  'SINHALITE',
  'SMALTITE',
  'SMITHSONITE',
  'SODALITE',
  'SOGDIANITE',
  'SPHALERITE',
  'SPINEL',
  'SPODUMENE',
  'SPURRITE',
  'STAUROLITE',
  'STIBIOTANTALITE',
  'STICHTITE',
  'STOLZITE',
  'STRONTIANITE',
  'SUGILITE',
  'SUNSTONE',
  'TAAFFEITE',
  'TALC',
  'TANTALITE',
  'TANZANITE',
  'TEKTITE',
  'TEPHROITE',
  'THAUMASITE',
  'THOMSONITE',
  'TOPAZ',
  'TOURMALINE',
  'TREMOLITE',
  'TRIPHYLITE',
  'TUGTUPITE',
  'TURQUOISE',
  'ULEXITE',
  'VANADINITE',
  'VARISCITE',
  'VILLIAUMITE',
  'VIVIANITE',
  'VAYRYNENITE',
  'WARDITE',
  'WAVELLITE',
  'WELOGANITE',
  'WHEWELLITE',
  'WILKEITE',
  'WILLEMITE',
  'WITHERITE',
  'WOLLASTONITE',
  'WULFENITE',
  'XONOTLITE',
  'YUGAWARALITE',
  'ZEKTZERITE',
  'ZINCITE',
  'ZIRCON',
  'ZUNYITE',
];


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

window.addEventListener('load', function () {
  generateGrid(words, 35, 30);
});

function generateGrid(words, width, height) {
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
    for(let direction = 0; direction < directions.length; ++direction) {
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
  let gridSet = 0;
  for(let y = 0; y < height; ++y) {
    let rowElem = document.createElement('tr');
    for(let x = 0; x < width; ++x) {
      let cellElem = document.createElement('td');
      if(gridPicked[y * width + x]) {
        gridSet++;
        //cellElem.style = 'font-weight: bold';
      }
      cellElem.innerText = grid[y * width + x];
      rowElem.appendChild(cellElem);
    }
    gridElem.appendChild(rowElem);
  }

  // List the words to be found
  let listElem = document.getElementById('wordsearch-list');
  let listedWords = [];
  let placedCount = 0;
  for(let i = 0; i < words.length; ++i) {
    if(wordPlaced[i]) {
      listedWords.push(words[i]);
      placedCount++;
    }
  }
  density = gridSet / (width * height);
  document.getElementById('wordsearch-text').innerText = 'The following ' + placedCount + ' words have been hidden above (from a list of ' + words.length + ' words, density=' + density + '):';
  listedWords.sort();
  for(let i = 0; i < listedWords.length; ++i) {
    let wordElem = document.createElement('li');
    wordElem.innerText = listedWords[i];
    listElem.appendChild(wordElem);
  }
}
