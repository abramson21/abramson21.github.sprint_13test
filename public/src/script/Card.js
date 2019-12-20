import {popupBigImage} from "./OpenBigImage.js";

export class Card {
    constructor(name, link) {
      this.CardElement = this.create(name, link);
      this.CardElement
        .querySelector('.place-card__like-icon')
        .addEventListener('click', this.like);

      this.CardElement
        .querySelector('.place-card__delete-icon')
        .addEventListener('click', this.remove); 
    }

    create(nameValue, linkValue) {
        const cardImage = document.createElement('div');
        cardImage.classList.add('place-card');

        const blockcardImage = document.createElement('button');
        blockcardImage.classList.add('place-card__image');
        cardImage.appendChild(blockcardImage);
       
        const blockCardText = document.createElement('div');
        blockCardText.classList.add('place-card__description');
        cardImage.appendChild(blockCardText );

        const cardText = document.createElement('h3');
        cardText.classList.add('place-card__name');
        blockCardText.appendChild(cardText);

        const deleteCard = document.createElement('button');
        deleteCard.classList.add('place-card__delete-icon');
        blockcardImage.appendChild(deleteCard);

        const buttonLike = document.createElement('button');
        buttonLike.classList.add('place-card__like-icon');
        blockCardText.appendChild(buttonLike);
        blockcardImage.setAttribute('style', `background-image: url(${linkValue})`);
        cardText.textContent = nameValue;

        blockcardImage.addEventListener('click', () => { // большая картинка
          popupBigImage.applyImage(linkValue);        
          popupBigImage.open();
      });
        return cardImage;
    }
    

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
      const card = event.target.parentElement.parentElement;
            card.parentElement.removeChild(card);
            event.stopPropagation(); 
    }
}