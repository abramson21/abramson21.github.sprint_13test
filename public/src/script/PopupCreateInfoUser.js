import {Popup} from "./Popup.js";


const popupPleaceInfo = document.querySelector('.popupCreatInfo');

const CreateName = popupPleaceInfo.querySelector('.popup__input_type_name');
const CreateInfoUser = popupPleaceInfo.querySelector('.popup__input_type_link-url');


export class PopupInfo extends Popup {
  constructor (container, button) {
    super(container, button);
    this.form = this.container
      .querySelector('form');
    this.inputs = this.form.querySelectorAll('input');
    this.blockSubmit();
    this.addValidation();
}

  addValidation () {
    function CreateInfo() {
        document.forms.resetInfo.elements.name.value = userInfoName.textContent;
        document.forms.resetInfo.elements.link.value = userInfoLink.textContent;
    };
    CreateInfo();

   function startNameRev() {
    const nameID = document.forms.resetInfo.elements.name.value;
    const nameIDLength = nameID.length;
    const linkText = document.forms.resetInfo.elements.link.value;

    userInfoName.textContent = nameID;
    userInfoLink.textContent = linkText;
    
    if (CreateName.checkValidity() != true || nameIDLength === 0) {
      chekInfoFirst.textContent = "Это обязательное поле";
     
      return false;
    }
    else if (nameIDLength === 1){ 
      chekInfoFirst.textContent = "Должно быть от 2 до 30 символов";
      return false;
    }
    else {
      chekInfoFirst.textContent = "";
      return true;
    }
  }

  function startLinkRev(){
      const linkText = document.forms.resetInfo.elements.link.value;
      const linkTextLength = linkText.length;
      if (CreateInfoUser.checkValidity() != true || linkTextLength === 0) {
        chekInfoSecond.textContent = "Это обязательное поле";
        console.log('Ничего нет');
        return false;
      }
      else if (linkTextLength === 1){ 
        chekInfoSecond.textContent = "Должно быть от 2 до 30 символов";
        console.log('1 символ');
        return false;
      }
      else {
        chekInfoSecond.textContent = "";
        return true;
      }
  }

  
    const popupAdd = popupPleaceInfo.querySelector('.popup__button');

    const chekInfoFirst = popupPleaceInfo.querySelector('.chek__open_first');

    const chekInfoSecond = popupPleaceInfo.querySelector('.chek__open_second');


  resetInfo.addEventListener('input', event => {
      
    if (startNameRev() === true && startLinkRev() === true) {
    console.log(startLinkRev());
    console.log(" получили true");
    popupAdd.removeAttribute('disabled', true);
    popupAdd.classList.add('popup__button_active');
    popupAdd.classList.remove('popup__button');
    }
    else {
      return false;
      }
    });
    
    buttonSaveForm.addEventListener('click', function(){
        event.preventDefault();
        CreateInfo();
        popupCreate.classList.remove('popup_is-opened');
        popupAdd.setAttribute('disabled', true);
      popupAdd.classList.remove('popup__button_active');
    });
  }

  blockSubmit () {
    this.form.querySelector('.popup__button').setAttribute('disabled', true);
  }
}

const popupCreate = document.querySelector('.popupCreatInfo');
const h1element = document.querySelector('h1');
const pElement = document.querySelector('p');
const userInfoName = document.querySelector('.user-info__name');
const userInfoLink = document.querySelector('.user-info__job');
const buttonSaveForm = popupCreate.querySelector('.button');


console.log(userInfoName.textContent);

const popupPleaceButtonInfo = document.querySelector('.edit__button');
const popupInfoClass = new PopupInfo(popupPleaceInfo, popupPleaceButtonInfo);