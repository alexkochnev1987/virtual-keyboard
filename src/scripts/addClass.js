function addClassShift() {
  document.querySelectorAll('.caseUp').forEach((element) => {
    element.classList.remove('hidden');
  });
  document.querySelectorAll('.caseDown').forEach((element) => {
    element.classList.add('hidden');
  });
}

function removeClassShift() {
  document.querySelectorAll('.caseDown').forEach((element) => {
    element.classList.remove('hidden');
  });
  document.querySelectorAll('.caseUp').forEach((element) => {
    element.classList.add('hidden');
  });
}

function addCapsLock() {
  document.querySelectorAll('.caseDown').forEach((element) => {
    element.classList.add('hidden');
  });
  document.querySelectorAll('.caseUp').forEach((element) => {
    element.classList.remove('hidden');
  });
}

function removeCapsLock() {
  document.querySelectorAll('.caseDown').forEach((element) => {
    element.classList.remove('hidden');
  });
  document.querySelectorAll('.caseUp').forEach((element) => {
    element.classList.add('hidden');
  });
}
function removeCapsNumbers() {
  const capsLockSring = 'Backquote, Digit1, Digit2, Digit3, Digit4, Digit5, Digit6, Digit7, Digit8, Digit9, Digit0, Minus, Equal';
  document.querySelectorAll(capsLockSring).forEach((e) => {
    e.querySelectorAll('.caseDown').forEach((elem) => {
      elem.classList.remove('hidden');
    //   console.log(e.classList)
    });
  });
}

export {
  addClassShift, removeClassShift, addCapsLock, removeCapsLock, removeCapsNumbers,
};
