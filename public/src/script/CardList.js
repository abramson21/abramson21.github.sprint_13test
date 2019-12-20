import {Card} from "./Card.js"

export class СardList {
    constructor(container) {
      this.container = container;
      this.popup = popup;
      this.popupAdd = popupAdd;
      this.toAddACardUser();
    }
  
    addCard() {
     const { CardElement } = new Card(document.forms.newForm.elements.name.value, document.forms.newForm.elements.link.value);
     this.container.appendChild(CardElement);
    }
      
    toAddACardUser() {
      this.popupAdd.addEventListener('click', event => {
        event.preventDefault();     
        cardList.addCard(document.forms.newForm.elements.name.value, document.forms.newForm.elements.link.value);
        document.forms.newForm.reset();
        popupAdd.classList.add('popup__button');
        popupAdd.setAttribute('disabled', true);
        popupAdd.classList.remove('popup__button_active');
        popup.classList.remove('popup_is-opened');
      });
    }
  }

  const popup = document.querySelector('.popup');
  const popupAdd = document.querySelector('.popup__button');
  const placesList = document.querySelector('.places-list');
  const cardList = new СardList(placesList);
