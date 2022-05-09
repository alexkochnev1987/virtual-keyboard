// import {ru} from './ru'
// import {en} from './en' 
// import { forEach } from 'lodash'
// import { Key } from './keyClass'
import { Keyboard } from './keyboardObj'
import {addClassShift, removeClassShift, addCapsLock, removeCapsLock} from './addClass'

Keyboard.init();

let textarea = document.querySelector('#textarea');
let pressed = new Set();
let lang;

document.addEventListener('keydown',function(e) {
  e.preventDefault();
  pressed.add(e.code);
  if (pressed.has('ControlLeft') && pressed.has('Space')){
    pressed.delete('ControlLeft');
    pressed.delete('Space');
    if (Keyboard.language === 'eng'){
      Keyboard.language = 'rus';
      lang = 'rus'
      console.log(lang)
      document.querySelectorAll('.rus').forEach(function(element){
        element.classList.toggle('hidden');
      })
      document.querySelectorAll('.eng').forEach(function(element){
        element.classList.toggle('hidden');
      })
    } else {
      Keyboard.language = 'eng';
      lang ='eng';
      console.log(lang)
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
  } 
  else if(e.code === 'ControlLeft'|| e.code === 'MetaLeft'||e.code === 'MetaRight'||e.code === 'AltLeft'|| e.code === 'AltRight') {
    pressed.add(e.code)
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
      pressed.delete(e.code)
    } else if (e.code === 'ShiftLeft'|| e.code === 'ShiftRight'){
      if(Keyboard.capsLock){
        addClassShift();
      } else {
        removeClassShift();
      }
      elem.classList.remove('active');
    }  else if(e.code === 'ControlLeft'|| e.code === 'MetaLeft'||e.code === 'MetaRight'||e.code === 'AltLeft'|| e.code === 'AltRight') {
      pressed.delete(e.code);
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
    pressed.add(e.code);
  } else if (pressedKey.innerText === 'Shift'){
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
  } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd'|| pressedKey.innerText === 'Alt') {
    pressed.delete(e.code);
  }
})
})

window.onunload = function(){
  localStorage.clear();
  console.log(lang)
  localStorage.setItem('lang', lang);
  console.log(localStorage)
}