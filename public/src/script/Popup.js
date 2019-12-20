export class Popup {
  constructor(container, button){
    this.container = container;
    
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    if (button) {
       this.button = button;
       this.button
      .addEventListener('click', this.open)
    }
    this.container
      .querySelector('.popup__close')
      .addEventListener('click', this.close);
  }
  
    open () {
      this.container.classList.add('popup_is-opened');
    }
  
    close () {
      this.container.classList.remove('popup_is-opened');
    }
  }