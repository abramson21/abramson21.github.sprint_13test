import {Popup} from "./Popup.js";

export class PopupBigImage extends Popup {
    constructor(container){
        super(container);
      }

      applyImage(link){
        this.container.querySelector('.image').setAttribute('src', link);
        console.log(this.container);
        console.log(link);
      }
     }

     const container = document.querySelector('.big-image');
     export const popupBigImage = new PopupBigImage(container);