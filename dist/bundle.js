/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scripts/addClass.js":
/*!*********************************!*\
  !*** ./src/scripts/addClass.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCapsLock\": () => (/* binding */ addCapsLock),\n/* harmony export */   \"addClassShift\": () => (/* binding */ addClassShift),\n/* harmony export */   \"removeCapsLock\": () => (/* binding */ removeCapsLock),\n/* harmony export */   \"removeCapsNumbers\": () => (/* binding */ removeCapsNumbers),\n/* harmony export */   \"removeClassShift\": () => (/* binding */ removeClassShift)\n/* harmony export */ });\nfunction addClassShift() {\n  document.querySelectorAll('.caseUp').forEach(function (element) {\n    element.classList.remove('hidden');\n  });\n  document.querySelectorAll('.caseDown').forEach(function (element) {\n    element.classList.add('hidden');\n  });\n}\n\nfunction removeClassShift() {\n  document.querySelectorAll('.caseDown').forEach(function (element) {\n    element.classList.remove('hidden');\n  });\n  document.querySelectorAll('.caseUp').forEach(function (element) {\n    element.classList.add('hidden');\n  });\n}\n\nfunction addCapsLock() {\n  document.querySelectorAll('.caseDown').forEach(function (element) {\n    element.classList.add('hidden');\n  });\n  document.querySelectorAll('.caseUp').forEach(function (element) {\n    element.classList.remove('hidden');\n  });\n}\n\nfunction removeCapsLock() {\n  document.querySelectorAll('.caseDown').forEach(function (element) {\n    element.classList.remove('hidden');\n  });\n  document.querySelectorAll('.caseUp').forEach(function (element) {\n    element.classList.add('hidden');\n  });\n}\n\nfunction removeCapsNumbers() {\n  const capsLockSring = 'Backquote, Digit1, Digit2, Digit3, Digit4, Digit5, Digit6, Digit7, Digit8, Digit9, Digit0, Minus, Equal';\n  document.querySelectorAll(capsLockSring).forEach(e => {\n    e.querySelectorAll('.caseDown').forEach(e => {\n      e.classList.remove('hidden');\n      console.log(e.classList);\n    }); // e.querySelectorAll('.caseUp').forEach(function(element){\n    //     element.classList.add('hidden');\n    // })\n  });\n}\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/addClass.js?");

/***/ }),

/***/ "./src/scripts/description.js":
/*!************************************!*\
  !*** ./src/scripts/description.js ***!
  \************************************/
/***/ (() => {

eval("// function createDescription () {\n//     const body = document.querySelector('body');\n//     const paragraph = document.createElement('p');\n//     const language = document.createElement('p');\n//     paragraph.className = 'description';\n//     language.className = 'language';\n//     paragraph.innerText = 'Клавиатура создана в операционной системе Apple';\n//     language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt'\n//     body.append(paragraph, language);\n//   }\n//   function createTextArea () {\n//     const body = document.querySelector('body')\n//     const textarea = document.createElement('textarea');\n//     textarea.className = 'textarea';\n//     textarea.id = 'textarea';\n//     textarea.rows = '5';\n//     textarea.cols = '50';\n//     textarea.setAttribute('autofocus', true)\n//     body.appendChild(textarea)\n//   }\n// createTextArea();\n// createDescription();\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/description.js?");

/***/ }),

/***/ "./src/scripts/en.js":
/*!***************************!*\
  !*** ./src/scripts/en.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"en\": () => (/* binding */ en)\n/* harmony export */ });\nconst en = [{\n  small: '`',\n  shift: '~',\n  code: 'Backquote',\n  keycode: '192'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1',\n  keycode: '49'\n}, {\n  small: '2',\n  shift: '@',\n  code: 'Digit2',\n  keycode: '50'\n}, {\n  small: '3',\n  shift: '#',\n  code: 'Digit3',\n  keycode: '51'\n}, {\n  small: '4',\n  shift: '$',\n  code: 'Digit4',\n  keycode: '52'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5',\n  keycode: '53'\n}, {\n  small: '6',\n  shift: '^',\n  code: 'Digit6',\n  keycode: '54'\n}, {\n  small: '7',\n  shift: '&',\n  code: 'Digit7',\n  keycode: '55'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8',\n  keycode: '56'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9',\n  keycode: '57'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0',\n  keycode: '48'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus',\n  keycode: '189'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal',\n  keycode: '187'\n}, {\n  small: 'Backspace',\n  shift: 'Backspace',\n  code: 'Backspace',\n  keycode: '8'\n}, {\n  small: 'Tab',\n  shift: 'Tab',\n  code: 'Tab',\n  keycode: '9'\n}, {\n  small: 'q',\n  shift: 'Q',\n  code: 'KeyQ',\n  keycode: '81'\n}, {\n  small: 'w',\n  shift: 'W',\n  code: 'KeyW',\n  keycode: '87'\n}, {\n  small: 'e',\n  shift: 'E',\n  code: 'KeyE',\n  keycode: '69'\n}, {\n  small: 'r',\n  shift: 'R',\n  code: 'KeyR',\n  keycode: '82'\n}, {\n  small: 't',\n  shift: 'T',\n  code: 'KeyT',\n  keycode: '84'\n}, {\n  small: 'y',\n  shift: 'Y',\n  code: 'KeyY',\n  keycode: '89'\n}, {\n  small: 'u',\n  shift: 'U',\n  code: 'KeyU',\n  keycode: '85'\n}, {\n  small: 'i',\n  shift: 'I',\n  code: 'KeyI',\n  keycode: '73'\n}, {\n  small: 'o',\n  shift: 'O',\n  code: 'KeyO',\n  keycode: '79'\n}, {\n  small: 'p',\n  shift: 'P',\n  code: 'KeyP',\n  keycode: '80'\n}, {\n  small: '[',\n  shift: '{',\n  code: 'BracketLeft',\n  keycode: '219'\n}, {\n  small: ']',\n  shift: '}',\n  code: 'BracketRight',\n  keycode: '221'\n}, {\n  small: 'Delete',\n  shift: 'Delete',\n  code: 'Delete',\n  keycode: '46'\n}, {\n  small: 'CapsLock',\n  shift: 'CapsLock',\n  code: 'CapsLock',\n  keycode: '0'\n}, {\n  small: 'a',\n  shift: 'A',\n  code: 'KeyA',\n  keycode: '65'\n}, {\n  small: 's',\n  shift: 'S',\n  code: 'KeyS',\n  keycode: '83'\n}, {\n  small: 'd',\n  shift: 'D',\n  code: 'KeyD',\n  keycode: '68'\n}, {\n  small: 'f',\n  shift: 'F',\n  code: 'KeyF',\n  keycode: '70'\n}, {\n  small: 'g',\n  shift: 'G',\n  code: 'KeyG',\n  keycode: '71'\n}, {\n  small: 'h',\n  shift: 'H',\n  code: 'KeyH',\n  keycode: '72'\n}, {\n  small: 'j',\n  shift: 'J',\n  code: 'KeyJ',\n  keycode: '74'\n}, {\n  small: 'k',\n  shift: 'K',\n  code: 'KeyK',\n  keycode: '75'\n}, {\n  small: 'l',\n  shift: 'L',\n  code: 'KeyL',\n  keycode: '76'\n}, {\n  small: ';',\n  shift: ':',\n  code: 'Semicolon',\n  keycode: '186'\n}, {\n  small: \"'\",\n  shift: '\"',\n  code: 'Quote',\n  keycode: '222'\n}, {\n  small: '\\\\',\n  shift: '|',\n  code: 'Backslash',\n  keycode: '220'\n}, {\n  small: 'Enter',\n  shift: 'Enter',\n  code: 'Enter',\n  keycode: 13\n}, {\n  small: 'Shift',\n  shift: 'Shift',\n  code: 'ShiftLeft',\n  keycode: '16'\n}, {\n  small: '<',\n  shift: '>',\n  code: 'IntlBackslash',\n  keycode: '220'\n}, {\n  small: 'z',\n  shift: 'Z',\n  code: 'KeyZ',\n  keycode: '90'\n}, {\n  small: 'x',\n  shift: 'X',\n  code: 'KeyX',\n  keycode: '88'\n}, {\n  small: 'c',\n  shift: 'C',\n  code: 'KeyC',\n  keycode: '67'\n}, {\n  small: 'v',\n  shift: 'V',\n  code: 'KeyV',\n  keycode: '86'\n}, {\n  small: 'b',\n  shift: 'B',\n  code: 'KeyB',\n  keycode: '66'\n}, {\n  small: 'n',\n  shift: 'N',\n  code: 'KeyN',\n  keycode: '78'\n}, {\n  small: 'm',\n  shift: 'M',\n  code: 'KeyM',\n  keycode: '77'\n}, {\n  small: ',',\n  shift: '<',\n  code: 'Comma',\n  keycode: '188'\n}, {\n  small: '.',\n  shift: '>',\n  code: 'Period',\n  keycode: '190'\n}, {\n  small: '/',\n  shift: '?',\n  code: 'Slash',\n  keycode: '191'\n}, {\n  small: '↑',\n  shift: '↑',\n  code: 'ArrowUp',\n  keycode: '40'\n}, {\n  small: 'Shift',\n  shift: 'Shift',\n  code: 'ShiftRight',\n  keycode: '16'\n}, {\n  small: 'Ctrl',\n  shift: 'Ctrl',\n  code: 'ControlLeft',\n  keycode: '17'\n}, {\n  small: 'Alt',\n  shift: 'Alt',\n  code: 'AltLeft',\n  keycode: '18'\n}, {\n  small: '⌘ cmd',\n  shift: '⌘ cmd',\n  code: 'MetaLeft',\n  keycode: '91'\n}, {\n  small: ' ',\n  shift: ' ',\n  code: 'Space',\n  keycode: '32'\n}, {\n  small: '⌘ cmd',\n  shift: '⌘ cmd',\n  code: 'MetaRight',\n  keycode: '91'\n}, {\n  small: 'Alt',\n  shift: 'Alt',\n  code: 'AltRight',\n  keycode: '225'\n}, {\n  small: '←',\n  shift: '←',\n  code: 'ArrowLeft',\n  keycode: '37'\n}, {\n  small: '↓',\n  shift: '↓',\n  code: 'ArrowDown',\n  keycode: '38'\n}, {\n  small: '→',\n  shift: '→',\n  code: 'ArrowRight',\n  keycode: '39'\n}, {\n  small: 'fn',\n  shift: 'fn',\n  code: 'fn',\n  keycode: '1000'\n}];\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/en.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/base.scss */ \"./src/assets/styles/base.scss\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/scripts/keyboard.js\");\n/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description */ \"./src/scripts/description.js\");\n/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_description__WEBPACK_IMPORTED_MODULE_2__);\n// import _ from 'lodash';\n\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/keyClass.js":
/*!*********************************!*\
  !*** ./src/scripts/keyClass.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Key\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\n  constructor(objEn, objRu) {\n    this.keyEn = objEn;\n    this.keyRu = objRu;\n  }\n\n  createKey() {\n    let key = document.createElement('div');\n    key.classList.add(this.keyEn.code, 'key');\n    let keyClassList = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];\n    let languageRu = document.createElement('span');\n    let languageEn = document.createElement('span');\n\n    if (localStorage.getItem('lang')) {\n      if (localStorage.getItem('lang') === 'eng') {\n        languageEn.classList.add('eng');\n        languageRu.classList.add('rus', 'hidden');\n      } else {\n        languageEn.classList.add('eng', 'hidden');\n        languageRu.classList.add('rus');\n      }\n    } else {\n      languageEn.classList.add('eng', 'hidden');\n      languageRu.classList.add('rus');\n    }\n\n    for (let i = 0; i < keyClassList.length; i++) {\n      let spanRu = document.createElement('span');\n      let spanEn = document.createElement('span');\n      spanRu.classList.add(keyClassList[i]);\n      spanEn.classList.add(keyClassList[i]);\n\n      if (i > 0) {\n        spanRu.classList.add('hidden');\n        spanEn.classList.add('hidden');\n      }\n\n      if (spanRu.className === 'caseDown' || spanRu.className === 'shiftCaps') {\n        spanRu.innerText = this.keyRu.small;\n        spanEn.innerText = this.keyEn.small;\n      } else {\n        spanRu.innerHTML = this.keyRu.shift;\n        spanEn.innerText = this.keyEn.shift;\n      }\n\n      languageRu.append(spanRu);\n      languageEn.append(spanEn);\n    }\n\n    key.append(languageEn, languageRu);\n    return key;\n  }\n\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keyClass.js?");

/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboardObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardObj */ \"./src/scripts/keyboardObj.js\");\n/* harmony import */ var _addClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addClass */ \"./src/scripts/addClass.js\");\n// import {ru} from './ru'\n// import {en} from './en' \n// import { forEach } from 'lodash'\n// import { Key } from './keyClass'\n\n\n_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.init();\nlet textarea = document.querySelector('#textarea');\nlet pressed = new Set();\nlet lang;\ndocument.addEventListener('keydown', function (e) {\n  e.preventDefault();\n  pressed.add(e.code);\n\n  if (pressed.has('ControlLeft') && pressed.has('Space')) {\n    pressed.delete('ControlLeft');\n    pressed.delete('Space');\n\n    if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.language === 'eng') {\n      _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.language = 'rus';\n      lang = 'rus';\n      console.log(lang);\n      document.querySelectorAll('.rus').forEach(function (element) {\n        element.classList.toggle('hidden');\n      });\n      document.querySelectorAll('.eng').forEach(function (element) {\n        element.classList.toggle('hidden');\n      });\n    } else {\n      _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.language = 'eng';\n      lang = 'eng';\n      console.log(lang);\n      document.querySelectorAll('.rus').forEach(function (element) {\n        element.classList.toggle('hidden');\n      });\n      document.querySelectorAll('.eng').forEach(function (element) {\n        element.classList.toggle('hidden');\n      });\n    }\n  }\n});\ndocument.addEventListener('keyup', function (e) {\n  pressed.delete(e.code);\n});\n\ndocument.onkeydown = function (e) {\n  e.preventDefault();\n  let keySelector = '.' + e.code;\n  let pressedKey = document.querySelector(keySelector);\n\n  if (e.code !== \"CapsLock\") {\n    pressedKey.classList.add('active');\n  }\n\n  if (e.code === \"Backspace\") {\n    textarea.value = textarea.value.substr(0, textarea.value.length - 1);\n  } else if (e.code === 'ControlLeft' || e.code === 'MetaLeft' || e.code === 'MetaRight' || e.code === 'AltLeft' || e.code === 'AltRight') {\n    pressed.add(e.code);\n  } else if (e.code === 'Enter') {\n    textarea.value += \"\\n\";\n  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {\n    if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n      (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeClassShift)();\n    } else {\n      (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addClassShift)();\n    }\n  } else if (e.code === \"CapsLock\") {\n    pressedKey.classList.toggle('active');\n\n    if (pressedKey.classList.contains('active')) {\n      _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock = true;\n    } else {\n      _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock = false;\n    }\n\n    if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n      (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addCapsLock)();\n    } else {\n      (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeCapsLock)();\n    }\n  } else if (e.code === \"Tab\") {\n    textarea.value += \"    \";\n  } else if (e.code === \"ArrowUp\" || e.code === \"ArrowRight\" || e.code === \"ArrowLeft\" || e.code === \"ArrowDown\") {\n    textarea.value += pressedKey.innerText;\n  } else {\n    textarea.value += pressedKey.innerText;\n  }\n};\n\ndocument.onkeyup = function (e) {\n  let keySelector = '.' + e.code;\n  document.querySelectorAll(keySelector).forEach(elem => {\n    if (e.code === 'CapsLock') {\n      pressed.delete(e.code);\n    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {\n      if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addClassShift)();\n      } else {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeClassShift)();\n      }\n\n      elem.classList.remove('active');\n    } else if (e.code === 'ControlLeft' || e.code === 'MetaLeft' || e.code === 'MetaRight' || e.code === 'AltLeft' || e.code === 'AltRight') {\n      pressed.delete(e.code);\n      elem.classList.remove('active');\n    } else {\n      elem.classList.remove('active');\n    }\n  });\n};\n\ndocument.querySelectorAll('.key').forEach(function (element) {\n  element.addEventListener('mousedown', e => {\n    let pressedKey = e.currentTarget;\n\n    if (pressedKey.classList.contains(\"CapsLock\")) {\n      pressedKey.classList.toggle('active');\n    } else {\n      pressedKey.classList.add('active');\n    }\n\n    if (pressedKey.innerText === 'Backspace') {\n      textarea.value = textarea.value.substr(0, textarea.value.length - 1);\n    } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd' || pressedKey.innerText === 'Alt') {\n      pressed.add(e.code);\n    } else if (pressedKey.innerText === 'Shift') {\n      if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeClassShift)();\n      } else {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addClassShift)();\n      }\n    } else if (pressedKey.innerText === 'CapsLock') {\n      if (pressedKey.classList.contains('active')) {\n        _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock = true;\n      } else {\n        _keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock = false;\n      }\n\n      if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addCapsLock)();\n      } else {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeCapsLock)();\n      }\n    } else if (pressedKey.innerText === 'Enter') {\n      textarea.value += \"\\n\";\n    } else if (pressedKey.innerText === 'Tab') {\n      textarea.value += '    ';\n    } else if (pressedKey.innerText === '') {\n      textarea.value += ' ';\n    } else {\n      textarea.value += e.currentTarget.innerText;\n    }\n  });\n});\ndocument.querySelectorAll('.key').forEach(function (element) {\n  element.addEventListener('mouseup', e => {\n    let pressedKey = e.currentTarget;\n\n    if (pressedKey.innerText === 'Shift') {\n      pressedKey.classList.remove('active');\n\n      if (_keyboardObj__WEBPACK_IMPORTED_MODULE_0__.Keyboard.capsLock) {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.addClassShift)();\n      } else {\n        (0,_addClass__WEBPACK_IMPORTED_MODULE_1__.removeClassShift)();\n      }\n    } else if (pressedKey.innerText !== 'CapsLock') {\n      pressedKey.classList.remove('active');\n    } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd' || pressedKey.innerText === 'Alt') {\n      pressed.delete(e.code);\n    }\n  });\n});\n\nwindow.onunload = function () {\n  localStorage.clear();\n  console.log(lang);\n  localStorage.setItem('lang', lang);\n  console.log(localStorage);\n};\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keyboard.js?");

/***/ }),

/***/ "./src/scripts/keyboardObj.js":
/*!************************************!*\
  !*** ./src/scripts/keyboardObj.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru */ \"./src/scripts/ru.js\");\n/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en */ \"./src/scripts/en.js\");\n/* harmony import */ var _keyClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyClass */ \"./src/scripts/keyClass.js\");\n\n\n\nconst Keyboard = {\n  elements: {\n    main: null,\n    title: null,\n    textarea: null,\n    keyboardContainer: null,\n    keyboardRow: {\n      row1: null,\n      row2: null,\n      row3: null,\n      row4: null,\n      row5: null\n    },\n    language: 'rus',\n    capsLock: false,\n    shift: false\n  },\n\n  init() {\n    this.elements.main = document.createElement('div');\n    this.elements.title = document.createElement('p');\n    this.elements.textarea = document.createElement('textarea');\n    this.elements.keyboardContainer = document.createElement('div');\n    this.elements.description = document.createElement('p');\n    this.elements.language = document.createElement('p');\n    this.elements.keyboardRow.row1 = document.createElement('div');\n    this.elements.keyboardRow.row2 = document.createElement('div');\n    this.elements.keyboardRow.row3 = document.createElement('div');\n    this.elements.keyboardRow.row4 = document.createElement('div');\n    this.elements.keyboardRow.row5 = document.createElement('div');\n    this.elements.main.classList.add('centralizer');\n    this.elements.title.classList.add('title');\n    this.elements.textarea.classList.add('textarea');\n    this.elements.keyboardContainer.classList.add('keyboard', 'body-keyboard');\n    this.elements.description.classList.add('description');\n    this.elements.language.classList.add('language');\n    this.elements.keyboardRow.row1.classList.add('row', 'keyboard-row');\n    this.elements.keyboardRow.row2.classList.add('row', 'keyboard-row');\n    this.elements.keyboardRow.row3.classList.add('row', 'keyboard-row');\n    this.elements.keyboardRow.row4.classList.add('row', 'keyboard-row');\n    this.elements.keyboardRow.row5.classList.add('row', 'keyboard-row');\n    this.elements.title.innerText = 'RSS Виртуальная клавиатура';\n    this.elements.description.innerText = 'Клавиатура создана в операционной системе Apple';\n    this.elements.language.innerText = 'Для переключения языка комбинация: spase + левый ctrl';\n    this.elements.textarea.id = 'textarea';\n    this.elements.textarea.rows = '5';\n    this.elements.textarea.cols = '50';\n\n    for (let i = 0; i < 14; i++) {\n      let enNul = _en__WEBPACK_IMPORTED_MODULE_1__.en[i];\n      let ruNul = _ru__WEBPACK_IMPORTED_MODULE_0__.ru[i];\n      const keyCreater = new _keyClass__WEBPACK_IMPORTED_MODULE_2__.Key(enNul, ruNul);\n      let key = keyCreater.createKey();\n      this.elements.keyboardRow.row1.append(key);\n    }\n\n    for (let i = 14; i < 28; i++) {\n      let enNul = _en__WEBPACK_IMPORTED_MODULE_1__.en[i];\n      let ruNul = _ru__WEBPACK_IMPORTED_MODULE_0__.ru[i];\n      const keyCreater = new _keyClass__WEBPACK_IMPORTED_MODULE_2__.Key(enNul, ruNul);\n      let key = keyCreater.createKey();\n      this.elements.keyboardRow.row2.append(key);\n    }\n\n    for (let i = 28; i < 42; i++) {\n      let enNul = _en__WEBPACK_IMPORTED_MODULE_1__.en[i];\n      let ruNul = _ru__WEBPACK_IMPORTED_MODULE_0__.ru[i];\n      const keyCreater = new _keyClass__WEBPACK_IMPORTED_MODULE_2__.Key(enNul, ruNul);\n      let key = keyCreater.createKey();\n      this.elements.keyboardRow.row3.append(key);\n    }\n\n    for (let i = 42; i < 56; i++) {\n      let enNul = _en__WEBPACK_IMPORTED_MODULE_1__.en[i];\n      let ruNul = _ru__WEBPACK_IMPORTED_MODULE_0__.ru[i];\n      const keyCreater = new _keyClass__WEBPACK_IMPORTED_MODULE_2__.Key(enNul, ruNul);\n      let key = keyCreater.createKey();\n      this.elements.keyboardRow.row4.append(key);\n    }\n\n    for (let i = 56; i < 66; i++) {\n      let enNul = _en__WEBPACK_IMPORTED_MODULE_1__.en[i];\n      let ruNul = _ru__WEBPACK_IMPORTED_MODULE_0__.ru[i];\n      const keyCreater = new _keyClass__WEBPACK_IMPORTED_MODULE_2__.Key(enNul, ruNul);\n      let key = keyCreater.createKey();\n      this.elements.keyboardRow.row5.append(key);\n    }\n\n    this.elements.keyboardContainer.append(this.elements.keyboardRow.row1, this.elements.keyboardRow.row2, this.elements.keyboardRow.row3, this.elements.keyboardRow.row4, this.elements.keyboardRow.row5);\n    this.elements.main.append(this.elements.title, this.elements.textarea, this.elements.keyboardContainer, this.elements.description, this.elements.language);\n    document.body.append(this.elements.main);\n  }\n\n};\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keyboardObj.js?");

/***/ }),

/***/ "./src/scripts/ru.js":
/*!***************************!*\
  !*** ./src/scripts/ru.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ru\": () => (/* binding */ ru)\n/* harmony export */ });\nconst ru = [{\n  small: '>',\n  shift: '<',\n  code: 'Backslash',\n  keycode: '220'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1',\n  keycode: '49'\n}, {\n  small: '2',\n  shift: '\"',\n  code: 'Digit2',\n  keycode: '50'\n}, {\n  small: '3',\n  shift: '№',\n  code: 'Digit3',\n  keycode: '51'\n}, {\n  small: '4',\n  shift: ';',\n  code: 'Digit4',\n  keycode: '52'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5',\n  keycode: '53'\n}, {\n  small: '6',\n  shift: ':',\n  code: 'Digit6',\n  keycode: '54'\n}, {\n  small: '7',\n  shift: '?',\n  code: 'Digit7',\n  keycode: '55'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8',\n  keycode: '56'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9',\n  keycode: '57'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0',\n  keycode: '48'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus',\n  keycode: '189'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal',\n  keycode: '187'\n}, {\n  small: 'Backspace',\n  shift: 'Backspace',\n  code: 'Backspace',\n  keycode: '8'\n}, {\n  small: 'Tab',\n  shift: 'Tab',\n  code: 'Tab',\n  keycode: '9'\n}, {\n  small: 'й',\n  shift: 'Й',\n  code: 'KeyQ',\n  keycode: '81'\n}, {\n  small: 'ц',\n  shift: 'Ц',\n  code: 'KeyW',\n  keycode: '87'\n}, {\n  small: 'у',\n  shift: 'У',\n  code: 'KeyE',\n  keycode: '69'\n}, {\n  small: 'к',\n  shift: 'К',\n  code: 'KeyR',\n  keycode: '82'\n}, {\n  small: 'е',\n  shift: 'Е',\n  code: 'KeyT',\n  keycode: '84'\n}, {\n  small: 'н',\n  shift: 'Н',\n  code: 'KeyY',\n  keycode: '89'\n}, {\n  small: 'г',\n  shift: 'Г',\n  code: 'KeyU',\n  keycode: '85'\n}, {\n  small: 'ш',\n  shift: 'Ш',\n  code: 'KeyI',\n  keycode: '73'\n}, {\n  small: 'щ',\n  shift: 'Щ',\n  code: 'KeyO',\n  keycode: '79'\n}, {\n  small: 'з',\n  shift: 'З',\n  code: 'KeyP',\n  keycode: '80'\n}, {\n  small: 'х',\n  shift: 'Х',\n  code: 'BracketLeft',\n  keycode: '219'\n}, {\n  small: 'ъ',\n  shift: 'Ъ',\n  code: 'BracketRight',\n  keycode: '221'\n}, {\n  small: 'Delete',\n  shift: 'Delete',\n  code: 'Delete',\n  keycode: '46'\n}, {\n  small: 'CapsLock',\n  shift: 'CapsLock',\n  code: 'CapsLock',\n  keycode: '0'\n}, {\n  small: 'ф',\n  shift: 'Ф',\n  code: 'KeyA',\n  keycode: '65'\n}, {\n  small: 'ы',\n  shift: 'Ы',\n  code: 'KeyS',\n  keycode: '83'\n}, {\n  small: 'в',\n  shift: 'В',\n  code: 'KeyD',\n  keycode: '68'\n}, {\n  small: 'а',\n  shift: 'А',\n  code: 'KeyF',\n  keycode: '70'\n}, {\n  small: 'п',\n  shift: 'П',\n  code: 'KeyG',\n  keycode: '71'\n}, {\n  small: 'р',\n  shift: 'Р',\n  code: 'KeyH',\n  keycode: '72'\n}, {\n  small: 'о',\n  shift: 'О',\n  code: 'KeyJ',\n  keycode: '74'\n}, {\n  small: 'л',\n  shift: 'Л',\n  code: 'KeyK',\n  keycode: '75'\n}, {\n  small: 'д',\n  shift: 'Д',\n  code: 'KeyL',\n  keycode: '76'\n}, {\n  small: 'ж',\n  shift: 'Ж',\n  code: 'Semicolon',\n  keycode: '186'\n}, {\n  small: 'э',\n  shift: 'Э',\n  code: 'Quote',\n  keycode: '222'\n}, {\n  small: 'ё',\n  shift: 'Ё',\n  code: 'Backquote',\n  keycode: '192'\n}, {\n  small: 'Enter',\n  shift: 'Enter',\n  code: 'Enter',\n  keycode: '13'\n}, {\n  small: 'Shift',\n  shift: 'Shift',\n  code: 'ShiftLeft',\n  keycode: '16'\n}, {\n  small: ']',\n  shift: '[',\n  code: 'IntlBackslash',\n  keycode: '191'\n}, {\n  small: 'я',\n  shift: 'Я',\n  code: 'KeyZ',\n  keycode: '90'\n}, {\n  small: 'ч',\n  shift: 'Ч',\n  code: 'KeyX',\n  keycode: '88'\n}, {\n  small: 'с',\n  shift: 'С',\n  code: 'KeyC',\n  keycode: '67'\n}, {\n  small: 'м',\n  shift: 'М',\n  code: 'KeyV',\n  keycode: '86'\n}, {\n  small: 'и',\n  shift: 'И',\n  code: 'KeyB',\n  keycode: '66'\n}, {\n  small: 'т',\n  shift: 'Т',\n  code: 'KeyN',\n  keycode: '78'\n}, {\n  small: 'ь',\n  shift: 'Ь',\n  code: 'KeyM',\n  keycode: '77'\n}, {\n  small: 'б',\n  shift: 'Б',\n  code: 'Comma',\n  keycode: '188'\n}, {\n  small: 'ю',\n  shift: 'Ю',\n  code: 'Period',\n  keycode: '190'\n}, {\n  small: '.',\n  shift: ',',\n  code: 'Slash',\n  keycode: '191'\n}, {\n  small: '↑',\n  shift: '↑',\n  code: 'ArrowUp',\n  keycode: '38'\n}, {\n  small: 'Shift',\n  shift: 'Shift',\n  code: 'ShiftRight',\n  keycode: '16'\n}, {\n  small: 'Ctrl',\n  shift: 'Ctrl',\n  code: 'ControlLeft',\n  keycode: '17'\n}, {\n  small: 'Alt',\n  shift: 'Alt',\n  code: 'AltLeft',\n  keycode: '18'\n}, {\n  small: '⌘ cmd',\n  shift: '⌘ cmd',\n  code: 'MetaLeft',\n  keycode: '91'\n}, {\n  small: ' ',\n  shift: ' ',\n  code: 'Space',\n  keycode: '32'\n}, {\n  small: '⌘ cmd',\n  shift: '⌘ cmd',\n  code: 'MetaRight',\n  keycode: '91'\n}, {\n  small: 'Alt',\n  shift: 'Alt',\n  code: 'AltRight',\n  keycode: '225'\n}, {\n  small: '←',\n  shift: '←',\n  code: 'ArrowLeft',\n  keycode: '37'\n}, {\n  small: '↓',\n  shift: '↓',\n  code: 'ArrowDown',\n  keycode: '40'\n}, {\n  small: '→',\n  shift: '→',\n  code: 'ArrowRight',\n  keycode: '39'\n}, {\n  small: 'fn',\n  shift: 'fn',\n  code: 'fn',\n  keycode: '1000'\n}];\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/ru.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/base.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/base.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".textarea {\\n  display: block;\\n  width: 700px;\\n  height: 200px;\\n  margin: 10px auto 10px;\\n  padding: 10px;\\n  font-size: 18px;\\n  color: #444444;\\n}\\n\\n.description, .language, .title {\\n  margin: 10px auto;\\n  text-align: center;\\n}\\n\\n.title {\\n  font-size: 30px;\\n  color: rgba(101, 134, 177, 0.8);\\n  -webkit-text-stroke: 1px rgba(114, 177, 101, 0.8);\\n  -webkit-text-fill-color: rgba(101, 134, 177, 0.8);\\n}\\n\\n.caseDown, .caseUp, .shiftCaps, .caps {\\n  display: block;\\n  width: 100;\\n  min-height: 40px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.keyboard {\\n  width: 704px;\\n  margin: 0 auto;\\n  padding: 5px;\\n  padding-left: 0;\\n  padding-bottom: 0;\\n  background: #888888;\\n  border: 3px solid #222222;\\n  border-radius: 5px;\\n}\\n\\n.keyboard .row {\\n  clear: both;\\n  width: 100%;\\n  height: 40px;\\n  margin-bottom: 8px;\\n}\\n\\n.key {\\n  float: left;\\n  width: 40px;\\n  height: 40px;\\n  margin-left: 6px;\\n  font-weight: 500;\\n  line-height: 40px;\\n  text-align: center;\\n  color: #ffffff;\\n  background: #444444;\\n  border-radius: 3px;\\n  cursor: pointer;\\n  user-select: none;\\n  transition: border-radius 0.3s, background-color 0.3s;\\n}\\n\\n.key:hover {\\n  background: #79aa89;\\n}\\n\\n.key.active {\\n  background-color: #2cfd72;\\n  border-radius: 50px;\\n}\\n\\n.MetaRight, .MetaLeft, .keyboard .AltLeft, .keyboard .AltRight, .keyboard .ArrowUp, .keyboard .ArrowLeft, .keyboard .ArrowDown, .keyboard .ArrowRight, .keyboard .Backspace, .keyboard .CapsLock, .keyboard .ControlLeft, .keyboard .ControlRight, .keyboard .Delete, .keyboard .Enter, .keyboard .ShiftLeft, .keyboard .ShiftRight, .keyboard .Tab, .keyboard .MetaLeft {\\n  font-weight: 600;\\n  background-color: #222222;\\n}\\n\\n.keyboard .Tab {\\n  width: 75px;\\n}\\n\\n.keyboard .Backspace {\\n  width: 100px;\\n}\\n\\n.CapsLock {\\n  width: 85px;\\n}\\n\\n.keyboard .Enter {\\n  width: 55px;\\n}\\n\\n.ShiftLeft {\\n  width: 60px;\\n}\\n\\n.keyboard .Delete {\\n  width: 64px;\\n}\\n\\n.keyboard .ShiftRight {\\n  width: 80px;\\n}\\n\\n.keyboard .Space {\\n  width: 290px;\\n}\\n\\n.fn {\\n  width: 32px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/base.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/assets/styles/base.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/base.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/base.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/base.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;