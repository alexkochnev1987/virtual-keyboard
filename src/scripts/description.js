function createDescription () {
    const body = document.querySelector('body');
    const paragraph = document.createElement('p');
    const language = document.createElement('p');
    paragraph.className = 'description';
    language.className = 'language';
    paragraph.innerText = 'Клавиатура создана в операционной системе Apple';
    language.innerText = 'Для переключения языка комбинация: левыe ctrl + alt'
    body.append(paragraph, language);
  }

  function createTextArea () {
    const body = document.querySelector('body')
    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';
    textarea.id = 'textarea';
    textarea.rows = '5';
    textarea.cols = '50';
    textarea.setAttribute('autofocus', true)

    body.appendChild(textarea)
  }

// createTextArea();
// createDescription();




let capsLock = document.querySelector('.CapsLock');
if (capsLock.classList.contains('active')){
  document.querySelectorAll('.caseDown').forEach(function(element){
    element.classList.add('hidden');
  })
  document.querySelectorAll('caseUp').forEach(function(element){
    element.classList.add('hidden');
  })
  document.querySelectorAll('shiftCaps').forEach(function(element){
    element.classList.add('hidden');
  })
  document.querySelectorAll('.caps').forEach(function(element){
      element.classList.remove('hidden');
  })
} else {
  document.querySelectorAll('.caseDown').forEach(function(element){
    element.classList.remove('hidden');
  })
  document.querySelectorAll('caseUp').forEach(function(element){
    element.classList.add('hidden');
  })
  document.querySelectorAll('shiftCaps').forEach(function(element){
    element.classList.add('hidden');
  })
  document.querySelectorAll('.caps').forEach(function(element){
      element.classList.add('hidden');
  })
}