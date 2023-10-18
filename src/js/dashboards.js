import App from './admin.js';

class DashboardView {
  body = document.querySelector('body');
  notAuthHTML = `<main
  class="min-h-screen w-screen bg-gray-100 flex flex-col justify-center items-center"
>
  <div
    class="flex flex-row justify-evenly items-center h-[60vh] bg-brancoAzulado w-[50vw] rounded-lg shadow-lg bg-logo bg-no-repeat bg-center bg-50"
  >
    <img
      src="./assets/sad-adventurer.png"
      alt=""
      class="border-2 border-solid border-orange-400 rounded-lg shadow-lg drop-shadow bg-azulClaro p-4 w-[20%]"
    />
    <div class="flex flex-col justify-center items-center gap-4">
      <h2 class="font-amatic text-6xl text-gray-700">Aaaah... Que pena!</h2>
      <h1 class="font-jakarta text-lg text-gray-700 tracking-wider">
        Infelizmente, você não pode aventurar por esse caminho!
      </h1>
      <h2 class="error__message font-jakarta text-gray-700 tracking-wider">
        ERROR MESSAGE
      </h2>
      <a
        href="index.html"
        class="font-amatic bg-azulEscuro text-gray-50 p-3 text-4xl rounded shadow-lg hover:underline drop-shadow hover:bg-orange-400"
      >
        Voltar!
      </a>
    </div>
  </div>
</main>`;

  constructor(hash) {
    this.hash = hash;
    this._renderSpinner();
    this.auth();
  }

  _addClickReturn() {
    const backButton = document.querySelector('.back__button');
    backButton.addEventListener('click', (event) => {
      window.location.hash = '';
      App._renderAdminView();
    });
  }

  _clearBody() {
    this.body.innerHTML = '';
  }

  _renderSpinner() {
    this._clearBody();
    this.body.insertAdjacentHTML('beforeend', '<div class="loader"></div');
  }

  async auth() {
    try {
      const response = await axios({
        url: `http://127.0.0.1:3000/api/v1/users/adminView/${this.hash}`,
        method: 'GET',
        withCredentials: true,
      });
      this._renderPage(response.data.data.html);
      this._addClickReturn();
    } catch (err) {
      this._renderPage(this.notAuthHTML);
    }
  }

  _renderPage(html) {
    this._clearBody();
    this.body.insertAdjacentHTML('beforeend', html);
  }

  _generateRandomImg() {
    const random = Math.trunc(Math.random() * 8 + 1);
    const options = {
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
    };

    return options[random];
  }
}

export class Statistics extends DashboardView {
  constructor(hash) {
    super(hash);
    console.log('Statistics');
  }
}

export class Feedbacks extends DashboardView {
  userCardHTML = `<div
  data-id="%ID%"
  class="feedbacks__card cursor-pointer"
  style="height: fit-content; overflow: visible"
>
  <img src="./assets/btnOne.png" alt="" class="border-2 border-solid border-orange-300 rounded-full" />
  <h2
    class="font-amatic font-bold text-3xl text-orange-400 drop-shadow"
  >
    %NAME%
  </h2>
  <div
    class="flex flex-col justify-center items-center gap-1 font-jakarta text-gray-800"
  >
    <h3 class="font-jakarta text-gray-800">Idade: %AGE%</h3>
    <h4 class="text-center">Último feedback: %LAST_FEEDBACK%</h4>
    <h5 class="font-bold">
      <i class="fa-solid fa-star text-yellow-400 text-lg"></i>: %AVG_RATING%
    </h5>
  </div>
</div>`;
  feedbackCardHTML = `
  <div
  class="bg-azulClaro p-6 rounded-lg shadow-md w-[40%] h-[60%] flex flex-col justify-center items-center gap-3 overflow-y-scroll text-gray-700 font-jakarta"
>
  <h3
    class="modal__title text-lg tracking-wider font-bold text-gray-100 drop-shadow-sm"
  >
    %TITLE%
  </h3>
  <img
    src="./assets/btnOne.png"
    alt=""
    class="modal__img w-[40%] border-2 border-solid border-orange-400 rounded-full drop-shadow"
  />
  <p class="modal__feedback tracking-wide">%FEEDBACK%</p>
  <div class="modal__rating">
    
  </div>
  <h4 class="modal__timeStamp">%TIMESTAMP%</h4>
</div>
  `;

  starTagHTML = `<i class="modal__rating-star fa-solid fa-star text-yellow-300"></i>`;
  _usersArr;
  constructor(hash) {
    super(hash);
    this._getAllUsers();
  }

  async _getAllUsers() {
    const response = await axios({
      url: `http://127.0.0.1:3000/api/v1/users/usersFeedbacks`,
      method: 'GET',
      withCredentials: true,
    });
    this._usersArr = response.data.data.data;
    this._renderUsersCards(this._usersArr, this.userCardHTML);
    this._addClickModal();
  }

  _addClickCards() {
    const feedbacksContainer = document.querySelector('.feedbacks__container');
    feedbacksContainer.addEventListener('click', (event) => {
      const card = event.target.closest('.feedbacks__card');
      if (!card) return;

      const id = card.dataset.id;

      this._renderModal(id);
    });
  }

  _renderModal(id) {
    const currentFocus = this._usersArr.find((user) => user._id === id);

    const modalContainer = document.querySelector('.modal__cards-container');
    const modalUser = document.querySelector('.modal__user');

    //Clear modal
    modalContainer.innerHTML = '';

    //Change User
    modalUser.textContent = currentFocus.name;

    //Create cards
    currentFocus.feedbacks.feedbacks.forEach((feedback) => {
      modalContainer.insertAdjacentHTML('beforeend', this.feedbackCardHTML);

      const modalTitle = [...document.querySelectorAll('.modal__title')].at(-1);
      const modalImg = [...document.querySelectorAll('.modal__img')].at(-1);
      const modalFeedback = [
        ...document.querySelectorAll('.modal__feedback'),
      ].at(-1);
      const modalTimestamp = [
        ...document.querySelectorAll('.modal__timeStamp'),
      ].at(-1);
      const modalRating = [...document.querySelectorAll('.modal__rating')].at(
        -1
      );

      modalTitle.textContent = feedback.title;
      modalImg.src = `./assets/${feedback.level}.png`;
      modalFeedback.textContent = feedback.description;
      modalTimestamp.textContent = new Date(feedback.timeStamp)
        .toLocaleString()
        .replace(',', ' - ');

      //Populate Stars
      for (let i = 1; i <= 5; i++) {
        if (i <= feedback.rating) {
          modalRating.insertAdjacentHTML('beforeend', this.starTagHTML);
        } else {
          const modifiedHTML = this.starTagHTML.replace(
            'fa-solid',
            'fa-regular'
          );
          modalRating.insertAdjacentHTML('beforeend', modifiedHTML);
        }
      }
    });

    this._toggleModalView(true);
  }

  _addClickModal() {
    const modalCover = document.querySelector('.feedbacks__modal-cover');
    modalCover.addEventListener('click', () => {
      this._toggleModalView(false);
    });
  }

  _toggleModalView(state) {
    const modal = document.querySelector('.feedbacks__modal');
    const modalCover = document.querySelector('.feedbacks__modal-cover');

    if (state) {
      modal.style = '';
      modalCover.style = '';
    }

    if (!state) {
      modal.style.display = 'none';
      modalCover.style.display = 'none';
    }
  }

  _renderUsersCards(usersArr, html) {
    const userCardsContainer = document.querySelector('.feedbacks__container');
    userCardsContainer.innerHTML = '';
    usersArr.forEach((user) => {
      const modifiedHTML = html
        .replace('%ID%', user._id)
        .replace('btnOne', `btn${this._generateRandomImg()}`)
        .replace('%NAME%', user.name)
        .replace('%AGE%', user.age)
        .replace(
          '%LAST_FEEDBACK%',
          new Date(user.feedbacks.lastFeedback)
            .toLocaleString()
            .replace(',', ' - ')
        )
        .replace('%AVG_RATING%', user.feedbacks.averageRating.toFixed(1));

      userCardsContainer.insertAdjacentHTML('beforeend', modifiedHTML);
    });
    this._addClickCards();
  }
}

export class Stories extends DashboardView {
  cardStoryHTML = `
  <div class="story__card" data-id="%DATA%">
      <div class="flex flex-row justify-center gap-12 items-center w-full">
        <h3 class="story__text-age">Idade: 11</h3>
        <img src="./assets/btnOne.png" alt="" class="story__text-img" />
      </div>
      <p class="story__text-story">%STORY%</p>
      <p class="story__text-timestamp">%TIMESTAMP%</p>
  </div>`;

  constructor(hash) {
    super(hash);

    this._getAllStories();
  }

  _renderCardStory(storyData, html) {
    const cardContainer = document.querySelector('.story__container');
    cardContainer.innerHTML = '';

    storyData.forEach((data) => {
      const { age, createdAt, initialComment, _id } = data;

      const date = new Date(createdAt);
      const createdAtFormat = date.toLocaleString().replace(',', ' - ');

      const modifiedHTML = html
        .replace('%DATA%', _id)
        .replace('11', age)
        .replace('%STORY%', initialComment)
        .replace('%TIMESTAMP%', createdAtFormat)
        .replace('btnOne', `btn${this._generateRandomImg()}`);

      cardContainer.insertAdjacentHTML('beforeend', modifiedHTML);
    });
  }

  async _getAllStories() {
    try {
      const response = await axios({
        url: `http://127.0.0.1:3000/api/v1/users?fields=true`,
        method: 'GET',
        withCredentials: true,
      });

      this._renderCardStory(response.data.data.users, this.cardStoryHTML);
    } catch (err) {
      const actualErr = this.notAuthHTML.replace(
        'ERROR MESSAGE',
        err.response.data.message
      );
      this._renderPage(actualErr);
    }
  }
}
