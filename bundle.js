/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/*! exports provided: initialSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialSetup\", function() { return initialSetup; });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nfunction buildBoard(ownTerritory, enemyTerritory=null) {\n\n  // if (territory == nil)\n\n\n  let boardDiv = document.createElement('div');\n  boardDiv.classList = 'board';\n  if (enemyTerritory !== null) {\n    boardDiv.id = \"top-board\";\n  } else {\n    boardDiv.id = \"bottom-board\";\n  }\n  document.body.appendChild(boardDiv);\n  // gameBoard.board.forEach(\n  //\n  // )\n  for (let x=0; x<10; x++) {\n    for (let y=0; y<10; y++) {\n      let square = document.createElement('div');\n      square.classList = 'square';\n\n      if (enemyTerritory === null) {\n        square.id = `X${x}-Y${y}`\n      }\n\n\n      if (y == 0) {\n        square.classList.toggle('first');\n      }\n      square.x = x;\n      square.y = y;\n      // CRUCIAL LINE BELOW:\n      // applying the gamboard (line 4) to the squares, means that when you click on one of the squares, and \"this\" is called on it, \"this\" is also the gamebaord (line 4).\n      square.gameboard = ownTerritory;\n      square.enemyboard = enemyTerritory;\n      if (enemyTerritory !== null) {\n        square.addEventListener('click', ownTerritory.playerAttack);\n        square.addEventListener('click', enemyTerritory.computerAttack);\n      } else if (ownTerritory.board[x][y] == 1) {\n        square.classList.toggle('player-ship');\n      }\n      boardDiv.appendChild(square);\n    }\n  }\n}\n\nfunction initialSetup() {\n  let NPCterritory = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"]()\n  let PlayerTerritory = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"]()\n  // Computer's perspective:\n  buildBoard(NPCterritory, PlayerTerritory);\n\n  let gameOverDiv = document.createElement('div');\n  gameOverDiv.id = 'game-over';\n  document.body.appendChild(gameOverDiv);\n\n\n  let resetButton = document.createElement('input');\n  resetButton.type = \"button\";\n  // resetButton.onclick = window.location.reload;\n  resetButton.id = 'reset';\n  resetButton.value = \"New Game\";\n  resetButton.addEventListener('click', () => window.location.reload());\n  document.body.appendChild(resetButton);\n\n\n  // Player's perspective:\n  buildBoard(PlayerTerritory);\n  // buildBoard('NPC');\n  // buildBoard('player');\n}\n\n\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: Gameboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gameboard\", function() { return Gameboard; });\n/* harmony import */ var _shipClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipClass */ \"./src/shipClass.js\");\n\n\nclass Gameboard {\n  constructor() {\n    let self = this;\n    this.sunkenShips = 0;\n    this.board = [];\n    for (let i = 0; i < 10; i++) {\n      this.board.push(new Array(10).fill(0));\n    }\n    this.ships = [];\n\n    // take a ship random start coord, add 5 to made the end coordinate,\n    // coin toss if add to x or y direction\n    // now check all the potential ship.spots  exist at x < 10 && y < 10;\n    // if not, try again.\n    // check the gameboard squares if that location (for each ship.spot) is a 0?  if all are 0, then place (set that sqaure to 1), else, try new random\n    // push to array is valid\n\n    function placeRandom(length) {\n        let randomX = -5;\n        let randomY = -5;\n        while (randomX+length < 0 || randomX+length > 9 || randomY+length < 0 || randomY+length > 9) {\n          randomX = Math.floor(Math.random() * 10);\n          randomY = Math.floor(Math.random() * 10);\n        }\n\n        let randomDir = Math.random() < 0.5 ? \"H\" : \"V\";\n        let ship;\n        if (randomDir == \"V\") {\n          ship = new _shipClass__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"](`ship${length+1}`, {x: randomX, y: randomY}, {x: randomX, y: randomY+length});\n        } else {\n          ship = new _shipClass__WEBPACK_IMPORTED_MODULE_0__[\"Ship\"](`ship${length+1}`, {x: randomX, y: randomY}, {x: randomX+length, y: randomY});\n        }\n        // check if spots have already been taken:\n        let spotisValid = true\n        ship.spots.forEach(spot => {\n          if (self.board[spot.x][spot.y] != 0) {\n            spotisValid = false;\n          }\n        });\n\n        if (spotisValid) {\n          self.ships.push(ship);\n          ship.spots.forEach(spot => {\n            self.board[spot.x][spot.y] = 1;\n          });\n        }\n\n        return spotisValid;\n    }\n\n    // NOTE ship lengths of 5,4,4,3,1  need to be -1\n    let stockShips = [4,3,3,2,1];\n    stockShips.forEach(length => {\n      let happened;\n      do {\n        happened = placeRandom(length);\n      } while (!happened)\n\n    });\n    console.log(this.board);\n    console.log(this.ships.length);\n    let count = 0;\n    this.board.forEach(row => row.forEach(coord => {\n      if (coord == 1) { count++; }\n    }));\n    console.log(count);\n\n\n    this.lastShotSucceeded = false;\n    this.lastShotXY = null;\n    this.shotsSinceLastHit = 0;\n\n  }\n\n  playerAttack(event) {\n    // let gameOverDiv = document.getElementById('game-over');\n    // gameOverDiv.innerHTML = 'Computer Firing...';\n    let boardTarget = this.gameboard.board[this.x][this.y];\n    let gameOverDiv = document.getElementById('game-over');\n    gameOverDiv.innerHTML = '';\n    let board = document.getElementsByClassName('board')[0];\n\n    loop1:\n      for (let ship of this.gameboard.ships) {\n        for (let spot of ship.spots) {\n          if (spot.x == this.x && spot.y == this.y) {\n              ship.applyHit({x: this.x, y: this.y});\n              this.classList.toggle('red');\n              if (ship.sunk) {\n                this.gameboard.sunkenShips++;\n                gameOverDiv.innerHTML = 'You sunk their ship!';\n                if (this.gameboard.sunkenShips >= 5) {\n                  board.style.pointerEvents = 'none';\n                  gameOverDiv.innerHTML = 'You Win!';\n                }\n              }\n              break loop1;//STOP this loop\n          }\n        }\n      }\n\n    // this.gameboard.ships.forEach(ship => ship.spots.forEach(spot => {\n    //     if (spot.x == this.x && spot.y == this.y) {\n    //         ship.applyHit({x: this.x, y: this.y});\n    //         // boardTarget = 2;\n    //         this.classList.toggle('red');\n    //         if (ship.sunk) {\n    //           this.gameboard.sunkenShips++;\n    //           if (this.gameboard.sunkenShips >= 5) {\n    //             let gameOverDiv = document.getElementById('game-over');\n    //             gameOverDiv.innerHTML = 'You Win!';\n    //           }\n    //         }\n    //     }}\n    //   )\n    // )\n    if (boardTarget != 1) {\n      boardTarget = 2;\n      this.classList.toggle('white');\n    }\n    this.removeEventListener('click', this.gameboard.playerAttack);\n  }\n\n  computerAttack() {\n    this.removeEventListener('click', this.enemyboard.computerAttack);\n    let board = document.getElementsByClassName('board')[0];\n\n        let computerShot;\n        let gameOverDiv = document.getElementById('game-over');\n\n        if (this.enemyboard.lastShotSucceeded) {\n          computerShot = this.enemyboard.educatedShot(this);\n        } else {\n          computerShot = this.enemyboard.randomShot(this);\n        }\n\n        let computerTarget = document.getElementById(`X${computerShot.x}-Y${computerShot.y}`);\n\n        if (this.enemyboard.board[computerShot.x][computerShot.y] == 1) {\n          computerTarget.classList.toggle('red');\n          this.enemyboard.lastShotSucceeded = true;\n          this.enemyboard.shotsSinceLastHit = 0;\n          this.enemyboard.lastShotXY = { x: computerShot.x, y: computerShot.y };\n\n          // apply hit to Player's javascript Ship object:\n          loop1:\n            for (let ship of this.enemyboard.ships) {\n              for (let spot of ship.spots) {\n                if (spot.x == computerShot.x && spot.y == computerShot.y) {\n                    ship.applyHit({x: computerShot.x, y: computerShot.y});\n                    if (ship.sunk) {\n                      this.enemyboard.sunkenShips++;\n                      gameOverDiv.innerHTML = 'PC sunk your ship!';\n                      if (this.enemyboard.sunkenShips >= 5) {\n                        // let gameOverDiv = document.getElementById('game-over')\n                        gameOverDiv.innerHTML = 'You Lose!';\n                        board.style.pointerEvents = 'none';\n                      }\n                    }\n                    break loop1;//STOP this loop\n                }\n              }\n            }\n\n        } else {\n          computerTarget.classList.toggle('white');\n          this.enemyboard.shotsSinceLastHit++;\n          if (this.enemyboard.shotsSinceLastHit >= 4) {\n            this.enemyboard.lastShotSucceeded = false;\n          }\n        }\n        this.enemyboard.board[computerShot.x][computerShot.y] = 2;\n  }\n\n  educatedShot(target) {\n    let guessCount = 1;\n    let computerShot = generateEducatedCoords(target.enemyboard.lastShotXY);\n    while (target.enemyboard.board[computerShot.x][computerShot.y] == 2 && guessCount < 5) {\n      computerShot = generateEducatedCoords(target.enemyboard.lastShotXY);\n      guessCount++;\n    }\n    // This guessCount avoids an infinite loop if no adjacent spots are valid.\n    if (guessCount == 5) {\n      computerShot = target.enemyboard.randomShot(target);\n    }\n\n    return computerShot;\n  }\n\n  randomShot(target) {\n    let computerShot = generateRandomCoords();\n    while (target.enemyboard.board[computerShot.x][computerShot.y] == 2) {\n      computerShot = generateRandomCoords();\n    }\n    return computerShot;\n  }\n    // CPU AI LOGIC:\n\n    // generate new shot with random coordinates,\n    // check if that location has already been targeted \"state = 2\",\n    // if yes, generate new one until it is one that is not \"state = 2\",\n    //\n    // if successful hit, then next generated shot will educatedCoordinate instead of random,\n    // it will +1 or -1 x or y from last successful hit.\n    // if that location is not state = \"2\"\n    // if 4 calls to educatedCoordinate occur that are invalid, switch back to random.\n    //\n    // keep track of num shots since last hit.\n    // keep track of num shots that are hits since last hit\n    //\n    // if go 4 shots without hit, then go back to generating random location,\n    // or if go 5 hits in 15 shots (sunk largest ship), then go back to generating random location.  The two variables above get reset.\n    //\n    // if hits are in a straight line?  follow line?\n\n}\n\n\nfunction generateRandomCoords() {\n  let randomCoords = { x: -5, y: -5 }\n\n  while (randomCoords.x < 0 || randomCoords.x > 9 || randomCoords.y < 0 || randomCoords.y > 9) {\n    randomCoords.x = Math.floor(Math.random() * 10);\n    randomCoords.y = Math.floor(Math.random() * 10);\n  }\n\n  return randomCoords;\n}\n\nfunction generateEducatedCoords(lastshot) {\n  let educatedCoords = {x:-5, y:-5};\n\n  while (educatedCoords.x < 0 || educatedCoords.x > 9 || educatedCoords.y < 0 || educatedCoords.y > 9) {\n    switch(Math.floor(Math.random() * 4)){\n      case 0:\n        educatedCoords.x = lastshot.x + 1\n        educatedCoords.y = lastshot.y\n        break;\n      case 1:\n        educatedCoords.x = lastshot.x - 1\n        educatedCoords.y = lastshot.y\n        break;\n      case 2:\n        educatedCoords.x = lastshot.x\n        educatedCoords.y = lastshot.y + 1\n        break;\n      case 3:\n        educatedCoords.x = lastshot.x\n        educatedCoords.y = lastshot.y - 1\n        break;\n    };\n  }\n\n  return educatedCoords;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n// import { Ship } from './shipClass';\n// import { Gameboard } from './gameboard';\n\n\"use strict\";\n\nObject(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"initialSetup\"])();\n// let board = new Gameboard();\n//\n// let sunkenShips = 0;\n// console.log(sunkenShips);\n//\n// let ship1 = new Ship(\"ship1\", {x: 0, y: 0}, {x: 0, y: 4});\n// let ship2 = new Ship(\"ship2\", {x: 1, y: 0}, {x: 1, y: 3});\n// let ship3 = new Ship(\"ship3\", {x: 2, y: 0}, {x: 2, y: 2});\n// let ship4 = new Ship(\"ship4\", {x: 3, y: 0}, {x: 3, y: 2});\n// let ship5 = new Ship(\"ship5\", {x: 4, y: 0}, {x: 4, y: 1});\n//\n//\n// console.log(ship1);\n// ship1.applyHit({x:0, y:0});\n// ship1.applyHit({x:0, y:1});\n// ship1.applyHit({x:0, y:2});\n// ship1.applyHit({x:0, y:3});\n// console.log(ship1);\n// ship1.applyHit({x:0, y:4});\n// console.log(ship1);\n//\n// if (ship1.sunk) {\n//   sunkenShips++;\n// }\n//\n//\n// console.log(sunkenShips);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shipClass.js":
/*!**************************!*\
  !*** ./src/shipClass.js ***!
  \**************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\nclass Ship {\n  constructor(name, start, end) {\n    this.name = name;\n    this.sunk = false;\n\n    this.spots = [];\n    if (start.y == end.y) {\n      for (let i = start.x; i <= end.x; i++) {\n        this.spots.push({x: i, y: start.y, hit: false});\n      }\n    } else {\n      for (let i = start.y; i <= end.y; i++) {\n        this.spots.push({x: start.x, y: i, hit: false})\n      }\n    }\n  }\n  applyHit(target) {\n    let index = this.spots.indexOf(this.spots.find((spot) => spot.x == target.x && spot.y == target.y))\n    this.spots[index].hit = true;\n\n    if (this.spots.every(spot => spot.hit == true)) {\n      this.sunk = true;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/shipClass.js?");

/***/ })

/******/ });