// import {ru} from './ru'
// import {en} from './en'
// import { forEach } from 'lodash'
// import { Key } from './keyClass'
import Keyboard from './keyboardObj';
import {
  addClassShift, removeClassShift, addCapsLock, removeCapsLock,
} from './addClass';

Keyboard.init();

const textarea = document.querySelector('#textarea');
const pressed = new Set();
const lang = {
  lang: null,
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  pressed.add(e.code);
  if (pressed.has('ControlLeft') && pressed.has('Space')) {
    pressed.delete('ControlLeft');
    pressed.delete('Space');
    if (Keyboard.language === 'eng') {
      Keyboard.language = 'rus';
      lang.lang = Keyboard.language;
      // console.log (lang);
      document.querySelectorAll('.rus').forEach((element) => {
        element.classList.remove('hidden');
      });
      document.querySelectorAll('.eng').forEach((element) => {
        element.classList.add('hidden');
      });
    } else {
      Keyboard.language = 'eng';
      lang.lang = Keyboard.language;
      // console.log(lang);
      document.querySelectorAll('.rus').forEach((element) => {
        element.classList.add('hidden');
      });
      document.querySelectorAll('.eng').forEach((element) => {
        element.classList.remove('hidden');
      });
    }
  }
});

document.addEventListener('keyup', (e) => {
  pressed.delete(e.code);
});
document.onkeydown = (e) => {
  e.preventDefault();
  const keySelector = `.${e.code}`;
  const pressedKey = document.querySelector(keySelector);
  if (e.code !== 'CapsLock') {
    pressedKey.classList.add('active');
  }
  if (e.code === 'Backspace') {
    textarea.value = textarea.value.substr(0, textarea.value.length - 1);
  } else if (e.code === 'Delete') {
    textarea.value = textarea.value.substr(1, textarea.value.length);
  } else if (e.code === 'ControlLeft' || e.code === 'MetaLeft' || e.code === 'MetaRight' || e.code === 'AltLeft' || e.code === 'AltRight') {
    pressed.add(e.code);
  } else if (e.code === 'Enter') {
    textarea.value += '\n';
  } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (Keyboard.capsLock) {
      removeClassShift();
    } else {
      addClassShift();
    }
  } else if (e.code === 'CapsLock') {
    pressedKey.classList.toggle('active');
    if (pressedKey.classList.contains('active')) {
      Keyboard.capsLock = true;
    } else {
      Keyboard.capsLock = false;
    }
    if (Keyboard.capsLock) {
      addCapsLock();
    } else {
      removeCapsLock();
    }
  } else if (e.code === 'Tab') {
    textarea.value += '\t';
  } else if (e.code === 'ArrowUp' || e.code === 'ArrowRight' || e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
    textarea.value += pressedKey.innerText;
  } else {
    textarea.value += pressedKey.innerText;
  }
};

document.onkeyup = (e) => {
  const keySelector = `.${e.code}`;
  document.querySelectorAll(keySelector).forEach((elem) => {
    if (e.code === 'CapsLock') {
      pressed.delete(e.code);
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (Keyboard.capsLock) {
        addClassShift();
      } else {
        removeClassShift();
      }
      elem.classList.remove('active');
    } else if (e.code === 'ControlLeft' || e.code === 'MetaLeft' || e.code === 'MetaRight' || e.code === 'AltLeft' || e.code === 'AltRight') {
      pressed.delete(e.code);
      elem.classList.remove('active');
    } else {
      elem.classList.remove('active');
    }
  });
};

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('mousedown', (e) => {
    const pressedKey = e.currentTarget;
    if (pressedKey.classList.contains('CapsLock')) {
      pressedKey.classList.toggle('active');
    } else {
      pressedKey.classList.add('active');
    }
    if (pressedKey.innerText === 'Backspace') {
      textarea.value = textarea.value.substr(0, textarea.value.length - 1);
    } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd' || pressedKey.innerText === 'Alt') {
      pressed.add(e.code);
    } else if (pressedKey.innerText === 'Shift') {
      if (Keyboard.capsLock) {
        removeClassShift();
      } else {
        addClassShift();
      }
    } else if (pressedKey.innerText === 'Delete') {
      textarea.value = textarea.value.substr(1, textarea.value.length);
    } else if (pressedKey.innerText === 'CapsLock') {
      if (pressedKey.classList.contains('active')) {
        Keyboard.capsLock = true;
      } else {
        Keyboard.capsLock = false;
      }
      if (Keyboard.capsLock) {
        addCapsLock();
      } else {
        removeCapsLock();
      }
    } else if (pressedKey.innerText === 'Enter') {
      textarea.value += '\n';
    } else if (pressedKey.innerText === 'Tab') {
      textarea.value += '\t';
    } else if (pressedKey.innerText === '') {
      textarea.value += ' ';
    } else {
      textarea.value += e.currentTarget.innerText;
    }
  });
});

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('mouseup', (e) => {
    const pressedKey = e.currentTarget;
    if (pressedKey.innerText === 'Shift') {
      pressedKey.classList.remove('active');
      if (Keyboard.capsLock) {
        addClassShift();
      } else {
        removeClassShift();
      }
    } else if (pressedKey.innerText !== 'CapsLock') {
      pressedKey.classList.remove('active');
    } else if (pressedKey.innerText === 'Ctrl' || pressedKey.innerText === '⌘ cmd' || pressedKey.innerText === 'Alt') {
      pressed.delete(e.code);
    }
  });
});

window.onunload = () => {
  localStorage.clear();
  // console.log(lang);
  localStorage.setItem('lang', lang.lang);
  // console.log(localStorage);
};
