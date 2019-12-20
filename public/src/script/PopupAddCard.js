import {Popup} from "./Popup.js";

const nameID = document.forms.newForm.elements.name.value;
const nameIDLength = nameID.length;
const popup = document.querySelector('.popup');
const startName = popup.querySelector('.popup__input_type_name');
const linkText = document.forms.newForm.elements.link.value;
const linkTextLength = linkText.length;
const popupClose = document.querySelector('.popup__close');
const popupCreate = document.querySelector('.popupCreatInfo');

const chekInfoFirst = popup.querySelector('.chek__open_first');
const chekInfoSecond = popup.querySelector('.chek__open_second');
const startLink = document.querySelector('.popup__input_type_link-url');

class PopupAddCard extends Popup {
    constructor (container, button) {
      super(container, button);
      this.form = this.container
        .querySelector('form');
      this.inputs = this.form.querySelectorAll('input');
      this.nameIDLength = nameIDLength;
      this.blockSubmit();
      this.addValidation();
    }
  
    addValidation () {
     function startNameRev() {
      const nameID = document.forms.newForm.elements.name.value;
      const nameIDLength = nameID.length;
      if (startName.checkValidity() != true || nameIDLength === 0) {
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
        const linkText = document.forms.newForm.elements.link.value;
        const linkTextLength = linkText.length;
        if (linkTextLength === 0) {
          chekInfoSecond.textContent = "Это обязательное поле";
          return false;
        }
        else if (linkText.includes('http://') === true || linkText.includes('https://') === true){
          chekInfoSecond.textContent = "";
          return true;
        }
        else {
          chekInfoSecond.textContent = "Здесь должна быть ссылка";
          return false;
        }
    }
  const buttonAddCard = popup.querySelector('.button');
    newForm.addEventListener('input', event => {
      if (startNameRev() === true && startLinkRev() === true) {
        console.log(startLinkRev());
        console.log(" получили true");
        buttonAddCard.removeAttribute('disabled', true);
        buttonAddCard.classList.add('popup__button_active');
        buttonAddCard.classList.remove('popup__button');
      }
      else {
        console.log('получили false');
        }
      });
    }
  
    blockSubmit () {
      this.form.querySelector('.popup__button').setAttribute('disabled', true);
    }
  }
  const popupPleaceCard = document.querySelector('.popup');
  const popupPleaceButtonCard = document.querySelector('.button');
  const popupPleaceClass = new PopupAddCard(popupPleaceCard, popupPleaceButtonCard);