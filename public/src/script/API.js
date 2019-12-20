import {Card} from "./Card.js";
import {СardList} from "./CardList.js";

export class Api {
  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  getInfoUser() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
          authorization: this.token
      }
  })
      .then(status)
      .then(res => res.json())

      function status(res) {
        if (!res.ok) {
            return Promise.reject()
        }
        return res;
    }
  }

  createInfo() {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
          authorization: this.token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: 'Андрей Николаев',
          about: 'Программист'
      }) // Можно улучшить данные не передаются из формы
  });

}
  getCards() { 
    return fetch(`${this.url}/cards`, {
      headers: {
          authorization: this.token
      }
  })
      .then(status)
          .then(res => res.json())

       
      .then((cards) => {
          cards.forEach(function(element){
              const { CardElement } = new Card(element['name'], element['link']);
              document.querySelector('.places-list').appendChild(CardElement);
          });
          /**
           * Можно улучшить
           * 
           * Лучше вернуть render внутри класса cardList
           * чтобы с получением данных корректно передавался параметр
           * в api.getCards() и сразу запускалась отрисовка
           */
      });
      function status(res) {
        if (!res.ok) {
            return Promise.reject()
        }
        return res;
    }
  }
}


const api = new Api('https://praktikum.tk/cohort3', '1648d4ea-6174-4900-89b4-1929a7d738db');

api.getInfoUser().then(info => {
   if (info.name && info.about) {
        userName.textContent = info.name;
        userInfo.textContent = info.about;
        userPhoto.setAttribute('style', `background-image: url(${info.avatar})`);
      } 
   });
api.createInfo();


const userName = document.querySelector('.user-info__name');
const userInfo = document.querySelector('.user-info__job');
const userPhoto = document.querySelector('.user-info__photo');

api.getCards().then(cards => new СardList(document.querySelector('.places-list'), cards));

/**
 * Данные передаются
 * 
 * Но стоит больше проработать передачу параметров при редактировании профиля
 * и обратить внимание на описание обработки ошибок у задаче.
 */