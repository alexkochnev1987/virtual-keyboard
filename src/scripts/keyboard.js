import {ru} from './ru'
import {en} from './en' 
import { forEach } from 'lodash'
import {addClassShift, removeClassShift, addCapsLock, removeCapsLock, removeCapsNumbers} from './addClass'

document.onkeypress = function(event){
  console.log(event);
}
class Key {
  constructor(objEn, objRu){
    this.keyEn = objEn;
    this.keyRu = objRu;
  }
  createKey () {
    let key = document.createElement('div');
    key.classList.add(this.keyEn.code, 'key')
    let keyClassList = ['caseDown', 'caseUp', 'caps', 'shiftCaps']
    let languageRu = document.createElement('span');
    let languageEn = document.createElement('span');
    languageEn.classList.add('eng', 'hidden');
    languageRu.classList.add('rus');
    for(let i = 0; i < keyClassList.length; i++){
      let spanRu = document.createElement('span');
      let spanEn = document.createElement('span');
      spanRu.classList.add(keyClassList[i]);
      spanEn.classList.add(keyClassList[i]);
      if (i > 0){
        spanRu.classList.add('hidden');
        spanEn.classList.add('hidden');
      }
      if(spanRu.className === 'caseDown' || spanRu.className === 'shiftCaps'){
        spanRu.innerText = this.keyRu.small;
        spanEn.innerText = this.keyEn.small;
      } else {
        spanRu.innerHTML = this.keyRu.shift;
        spanEn.innerText = this.keyEn.shift;
      }
      languageRu.append(spanRu);
      languageEn.append(spanEn);
    }
    key.append(languageEn,languageRu)
    return key;
  }
}









const Keyboard = {
  elements:{
    main:null,
    title:null,
    textarea:null,
    keyboardContainer:null,
    keyboardRow:{
      row1:null,
      row2:null,
      row3:null,
      row4:null,
      row5:null,
    },
    language:null,
    capsLock:false,
    shift:false,
  },

  init (){

    this.elements.main = document.createElement('div');
    this.elements.title = document.createElement('p');
    this.elements.textarea = document.createElement('textarea');
    this.elements.keyboardContainer = document.createElement('div')
    this.elements.description = document.createElement('p');
    this.elements.language = document.createElement('p');
    this.elements.keyboardRow.row1 = document.createElement('div');
    this.elements.keyboardRow.row2 = document.createElement('div');
    this.elements.keyboardRow.row3 = document.createElement('div');
    this.elements.keyboardRow.row4 = document.createElement('div');
    this.elements.keyboardRow.row5 = document.createElement('div');


    this.elements.main.classList.add('centralizer');
    this.elements.title.classList.add('title');
    this.elements.textarea.classList.add('textarea');
    this.elements.keyboardContainer.classList.add('keyboard', 'body-keyboard');
    this.elements.description.classList.add('description');
    this.elements.language.classList.add('language');
    this.elements.keyboardRow.row1.classList.add('row', 'keyboard-row');
    this.elements.keyboardRow.row2.classList.add('row', 'keyboard-row');
    this.elements.keyboardRow.row3.classList.add('row', 'keyboard-row');
    this.elements.keyboardRow.row4.classList.add('row', 'keyboard-row');
    this.elements.keyboardRow.row5.classList.add('row', 'keyboard-row');

    this.elements.title.innerText = 'RSS Виртуальная клавиатура';
    this.elements.description.innerText = 'Клавиатура создана в операционной системе Apple';
    this.elements.language.innerText = 'Для переключения языка комбинация: spase + левый ctrl';
    
    this.elements.textarea.id = 'textarea';
    this.elements.textarea.rows = '5';
    this.elements.textarea.cols = '50';
    for(let i = 0; i < 14; i++){
      let enNul = en[i];
      let ruNul = ru[i]
      const keyCreater = new Key(enNul, ruNul);
      let key = keyCreater.createKey();
      this.elements.keyboardRow.row1.append(key);
    }
    for(let i = 14; i < 28; i++){
      let enNul = en[i];
      let ruNul = ru[i]
      const keyCreater = new Key(enNul, ruNul);
      let key = keyCreater.createKey();
      this.elements.keyboardRow.row2.append(key);
    }
    for(let i = 28; i < 42; i++){
      let enNul = en[i];
      let ruNul = ru[i]
      const keyCreater = new Key(enNul, ruNul);
      let key = keyCreater.createKey();
      this.elements.keyboardRow.row3.append(key);
    }
    for(let i = 42; i < 56; i++){
      let enNul = en[i];
      let ruNul = ru[i]
      const keyCreater = new Key(enNul, ruNul);
      let key = keyCreater.createKey();
      this.elements.keyboardRow.row4.append(key);
    }
    for(let i = 56; i < 66; i++){
      let enNul = en[i];
      let ruNul = ru[i]
      const keyCreater = new Key(enNul, ruNul);
      let key = keyCreater.createKey();
      this.elements.keyboardRow.row5.append(key);
    }
    this.elements.keyboardContainer.append(this.elements.keyboardRow.row1, this.elements.keyboardRow.row2, this.elements.keyboardRow.row3, this.elements.keyboardRow.row4, this.elements.keyboardRow.row5);
    this.elements.main.append(this.elements.title, this.elements.textarea, this.elements.keyboardContainer, this.elements.description, this.elements.language);
    document.body.append(this.elements.main);
    
  }

}
Keyboard.language = 'eng';

Keyboard.init();


let textarea = document.querySelector('#textarea');
let capsLock = document.querySelector('.CapsLock');

let pressed = new Set();

document.addEventListener('keydown',function(e) {
  e.preventDefault();
  pressed.add(e.code);
  if (pressed.has('ControlLeft') && pressed.has('Space')){
    pressed.delete('ControlLeft');
    pressed.delete('Space');
    if (Keyboard.language === 'eng'){
      Keyboard.language = 'rus';
      document.querySelectorAll('.rus').forEach(function(element){
        element.classList.toggle('hidden');
      })
      document.querySelectorAll('.eng').forEach(function(element){
        element.classList.toggle('hidden');
      })
    } else {
      Keyboard.language = 'eng';
      document.querySelectorAll('.rus').forEach(function(element){
        element.classList.toggle('hidden');
      })
        document.querySelectorAll('.eng').forEach(function(element){
          element.classList.toggle('hidden');
      })
    }
  }
})


document.addEventListener('keyup', function(e){
  pressed.delete(e.code);
})



document.onkeydown = function(e) {
  e.preventDefault();
  let keySelector = '.' + e.code;
  let pressedKey = document.querySelector(keySelector);
  if (e.code !== "CapsLock"){
    pressedKey.classList.add('active');
  }
  if(e.code === "Backspace"){
    textarea.value = textarea.value.substr(0,textarea.value.length-1)
  } else if(e.code === 'ControlLeft'|| e.code === 'MetaLeft'||e.code === 'MetaRight'||e.code === 'AltLeft'|| e.code === 'AltRight') {
  } else if(e.code === 'Enter'){
    textarea.value +="\n"
  } else if (e.code === 'ShiftLeft'|| e.code === 'ShiftRight'){
    if(Keyboard.capsLock){
      removeClassShift();
    } else{
      addClassShift();
    }
  } else if (e.code === "CapsLock"){
    pressedKey.classList.toggle('active');
    if(pressedKey.classList.contains('active')){
      Keyboard.capsLock = true;
    } else {
      Keyboard.capsLock = false;
    }
    if(Keyboard.capsLock){
      addCapsLock();
    } else {
      removeCapsLock();
    }
  } else if (e.code === "Tab"){
    textarea.value +="    ";
  }else if (e.code === "ArrowUp"||e.code === "ArrowRight"||e.code === "ArrowLeft"||e.code === "ArrowDown"){
    textarea.value += pressedKey.innerText;
  } else{
    textarea.value += pressedKey.innerText;
  }
}

document.onkeyup = function(e){
  let keySelector = '.' + e.code
  document.querySelectorAll(keySelector).forEach(elem => {
    if(e.code === 'CapsLock'){ 
      
    } else if (e.code === 'ShiftLeft'|| e.code === 'ShiftRight'){
      if(Keyboard.capsLock){
        addClassShift();
      } else {
        removeClassShift();
      }
      elem.classList.remove('active');
    } else {
      elem.classList.remove('active');
    }
  })
}


document.querySelectorAll('.key').forEach(function(element){
  element.addEventListener('mousedown', (e)=>{
  let pressedKey = e.currentTarget;

  if (pressedKey.classList.contains("CapsLock")){
    pressedKey.classList.toggle('active');
  } else {
    pressedKey.classList.add('active');
  }
  if (pressedKey.innerText === 'Backspace'){
    textarea.value = textarea.value.substr(0,textarea.value.length-1)
  } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd'|| pressedKey.innerText === 'Alt') {

  }else if (pressedKey.innerText === 'Shift'){
    if(Keyboard.capsLock){
      removeClassShift();
    } else{
      addClassShift();
    }
  }else if (pressedKey.innerText === 'CapsLock') {
    if(pressedKey.classList.contains('active')){
      Keyboard.capsLock = true;
    } else {
      Keyboard.capsLock = false;
    }
    if(Keyboard.capsLock){
      addCapsLock();
    } else {
      removeCapsLock();
    }
  }else if(pressedKey.innerText === 'Enter'){
    textarea.value +="\n"
  }else if(pressedKey.innerText === 'Tab'){
    textarea.value += '    ';
  }else if(pressedKey.innerText === ''){
    textarea.value += ' ';
  }
  else{
    textarea.value += e.currentTarget.innerText;
  }
})
})

document.querySelectorAll('.key').forEach(function(element){
  element.addEventListener('mouseup', (e)=>{
  let pressedKey = e.currentTarget;
  if(pressedKey.innerText === 'Shift'){
    pressedKey.classList.remove('active');
    if(Keyboard.capsLock){
      addClassShift();
    } else {
      removeClassShift();
    }
  } else if(pressedKey.innerText !== 'CapsLock'){
    pressedKey.classList.remove('active');
  }
})
})








// const Keyboard = {
//   elements: {
//       main: null,
//       keysContainer: null,
//       keys: []
//   },

//   eventHandlers: {
//       oninput: null,
//       onclose: null
//   },

//   properties: {
//       value: "",
//       capsLock: false
//   },

//   init() {
//       // Create main elements
//       this.elements.main = document.createElement("div");
//       this.elements.keysContainer = document.createElement("div");

//       // Setup main elements
//       this.elements.main.classList.add("keyboard");
//       this.elements.keysContainer.classList.add("keyboard__keys");
//       this.elements.keysContainer.appendChild(this._createKeys());

//       this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

//       // Add to DOM
//       this.elements.main.appendChild(this.elements.keysContainer);
//       document.body.appendChild(this.elements.main);

//       // Automatically use keyboard for elements with .use-keyboard-input
//       document.querySelectorAll(".use-keyboard-input").forEach(element => {
//           element.addEventListener("focus", () => {
//               this.open(element.value, currentValue => {
//                   element.value = currentValue;
//               });
//           });
//       });
//   },

//   _createKeys() {
//       const fragment = document.createDocumentFragment();
//       const keyLayout = [
//           "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//           "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//           "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//           "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//           "space"
//       ];

//       // Creates HTML for an icon
//       const createIconHTML = (icon_name) => {
//           return `<i class="material-icons">${icon_name}</i>`;
//       };

//       keyLayout.forEach(key => {
//           const keyElement = document.createElement("button");
//           const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

//           // Add attributes/classes
//           keyElement.setAttribute("type", "button");
//           keyElement.classList.add("keyboard__key");

//           switch (key) {
//               case "backspace":
//                   keyElement.classList.add("keyboard__key--wide");
//                   keyElement.innerHTML = createIconHTML("backspace");

//                   keyElement.addEventListener("click", () => {
//                       this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                       this._triggerEvent("oninput");
//                   });

//                   break;

//               case "caps":
//                   keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
//                   keyElement.innerHTML = createIconHTML("keyboard_capslock");

//                   keyElement.addEventListener("click", () => {
//                       this._toggleCapsLock();
//                       keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
//                   });

//                   break;

//               case "enter":
//                   keyElement.classList.add("keyboard__key--wide");
//                   keyElement.innerHTML = createIconHTML("keyboard_return");

//                   keyElement.addEventListener("click", () => {
//                       this.properties.value += "\n";
//                       this._triggerEvent("oninput");
//                   });

//                   break;

//               case "space":
//                   keyElement.classList.add("keyboard__key--extra-wide");
//                   keyElement.innerHTML = createIconHTML("space_bar");

//                   keyElement.addEventListener("click", () => {
//                       this.properties.value += " ";
//                       this._triggerEvent("oninput");
//                   });

//                   break;

//               case "done":
//                   keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                   keyElement.innerHTML = createIconHTML("check_circle");

//                   keyElement.addEventListener("click", () => {
//                       this.close();
//                       this._triggerEvent("onclose");
//                   });

//                   break;

//               default:
//                   keyElement.textContent = key.toLowerCase();

//                   keyElement.addEventListener("click", () => {
//                       this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
//                       this._triggerEvent("oninput");
//                   });

//                   break;
//           }

//           fragment.appendChild(keyElement);

//           if (insertLineBreak) {
//               fragment.appendChild(document.createElement("br"));
//           }
//       });

//       return fragment;
//   },

//   _triggerEvent(handlerName) {
//       if (typeof this.eventHandlers[handlerName] == "function") {
//           this.eventHandlers[handlerName](this.properties.value);
//       }
//   },

//   _toggleCapsLock() {
//       this.properties.capsLock = !this.properties.capsLock;

//       for (const key of this.elements.keys) {
//           if (key.childElementCount === 0) {
//               key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
//           }
//       }
//   },

//   open(initialValue, oninput, onclose) {
//       this.properties.value = initialValue || "";
//       this.eventHandlers.oninput = oninput;
//       this.eventHandlers.onclose = onclose;
//       this.elements.main.classList.remove("keyboard--hidden");
//   },

//   close() {
//       this.properties.value = "";
//       this.eventHandlers.oninput = oninput;
//       this.eventHandlers.onclose = onclose;
//       this.elements.main.classList.add("keyboard--hidden");
//   }
// };

// window.addEventListener("DOMContentLoaded", function () {
//   Keyboard.init();
// });

