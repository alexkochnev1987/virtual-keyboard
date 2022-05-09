export class Key {
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
      if(localStorage.getItem('lang')){
        if (localStorage.getItem('lang') === 'eng'){
          languageEn.classList.add('eng');
          languageRu.classList.add('rus', 'hidden');
        } else {
          languageEn.classList.add('eng', 'hidden');
          languageRu.classList.add('rus');
        }
      } else {
        languageEn.classList.add('eng', 'hidden');
        languageRu.classList.add('rus');
      }
    
  
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