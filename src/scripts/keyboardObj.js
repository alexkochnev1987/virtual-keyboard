import ru from './ru';
import en from './en';
import Key from './keyClass';

const Keyboard = {
  elements: {
    main: null,
    title: null,
    textarea: null,
    keyboardContainer: null,
    keyboardRow: {
      row1: null,
      row2: null,
      row3: null,
      row4: null,
      row5: null,
    },
    language: 'rus',
    capsLock: false,
    shift: false,
  },
  init() {
    this.elements.main = document.createElement('div');
    this.elements.title = document.createElement('p');
    this.elements.textarea = document.createElement('textarea');
    this.elements.keyboardContainer = document.createElement('div');
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
    for (let i = 0; i < 14; i += 1) {
      const enNul = en[i];
      const ruNul = ru[i];
      const keyCreater = new Key(enNul, ruNul);
      const key = keyCreater.createKey();
      this.elements.keyboardRow.row1.append(key);
    }
    for (let i = 14; i < 28; i += 1) {
      const enNul = en[i];
      const ruNul = ru[i];
      const keyCreater = new Key(enNul, ruNul);
      const key = keyCreater.createKey();
      this.elements.keyboardRow.row2.append(key);
    }
    for (let i = 28; i < 42; i += 1) {
      const enNul = en[i];
      const ruNul = ru[i];
      const keyCreater = new Key(enNul, ruNul);
      const key = keyCreater.createKey();
      this.elements.keyboardRow.row3.append(key);
    }
    for (let i = 42; i < 56; i += 1) {
      const enNul = en[i];
      const ruNul = ru[i];
      const keyCreater = new Key(enNul, ruNul);
      const key = keyCreater.createKey();
      this.elements.keyboardRow.row4.append(key);
    }
    for (let i = 56; i < 66; i += 1) {
      const enNul = en[i];
      const ruNul = ru[i];
      const keyCreater = new Key(enNul, ruNul);
      const key = keyCreater.createKey();
      this.elements.keyboardRow.row5.append(key);
    }
    // eslint-disable-next-line max-len
    this.elements.keyboardContainer.append(this.elements.keyboardRow.row1, this.elements.keyboardRow.row2, this.elements.keyboardRow.row3, this.elements.keyboardRow.row4, this.elements.keyboardRow.row5);
    // eslint-disable-next-line max-len
    this.elements.main.append(this.elements.title, this.elements.textarea, this.elements.keyboardContainer, this.elements.description, this.elements.language);
    document.body.append(this.elements.main);
  },
};

export default Keyboard;
