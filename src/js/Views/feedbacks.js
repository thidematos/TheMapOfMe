import View from './view.js';

class FeedbackView extends View {
  _crudData = {
    title: '',
    level: '',
    rating: '',
    description: '',
  };

  _levelWord = {
    geral: 'Geral',
    btnOne: 'Felicidade',
    btnTwo: 'Admiração',
    btnThree: 'Medo',
    btnFour: 'Coragem',
    btnFive: 'Diversão',
    btnSix: 'Empatia',
    btnSeven: 'Esperança',
    btnEight: 'The Map of Me',
  };
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
    <div
    class="modal__comment w-[60vw] bg-gray-50 absolute z-[9999] flex flex-col justify-evenly items-center gap-3"
    style="height: 85vh; justify-content: space-evenly; display: none"
  >
    <h2 class="font-amatic text-5xl text-azul">
      Explorador, como foi sua aventura?
    </h2>
    <div class="modal__levelContainer">
      <button class="modal__btn-level" >
        <img
          src="./assets/geral.png"
          alt=""
          class="modal__btn-level-img" data-level="geral"
        />
        <p>Geral</p>
      </button>
      <button class="${
        data.currentUser.levels.mapOne.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapOne.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapOne.completed ? 'btnOne' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnOne" ${
      data.currentUser.levels.mapOne.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${
          data.currentUser.levels.mapOne.completed ? 'Felicidade' : '???'
        }</p>
      </button>

      <button class="${
        data.currentUser.levels.mapTwo.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapTwo.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapTwo.completed ? 'btnTwo' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnTwo" ${
      data.currentUser.levels.mapTwo.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${data.currentUser.levels.mapTwo.completed ? 'Admiração' : '???'}</p>
      </button>
      
      <button class="${
        data.currentUser.levels.mapThree.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapThree.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapThree.completed ? 'btnThree' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnThree" ${
      data.currentUser.levels.mapThree.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${data.currentUser.levels.mapThree.completed ? 'Medo' : '???'}</p>
      </button>

      <button class="${
        data.currentUser.levels.mapFour.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapFour.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapFour.completed ? 'btnFour' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnFour" ${
      data.currentUser.levels.mapFour.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${data.currentUser.levels.mapFour.completed ? 'Coragem' : '???'}</p>
      </button>

      <button class="${
        data.currentUser.levels.mapFive.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapFive.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapFive.completed ? 'btnFive' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnFive" ${
      data.currentUser.levels.mapFive.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${data.currentUser.levels.mapFive.completed ? 'Diversão' : '???'}</p>
      </button>
      
      <button class="${
        data.currentUser.levels.mapSix.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapSix.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapSix.completed ? 'btnSix' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnSix" ${
      data.currentUser.levels.mapSix.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${data.currentUser.levels.mapSix.completed ? 'Empatia' : '???'}</p>
      </button>

      <button class="${
        data.currentUser.levels.mapSeven.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapSeven.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapSeven.completed ? 'btnSeven' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnSeven" ${
      data.currentUser.levels.mapSeven.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${
          data.currentUser.levels.mapSeven.completed ? 'Esperança' : '???'
        }</p>
      </button>

      <button class="${
        data.currentUser.levels.mapEight.completed
          ? ''
          : 'modal__btn-level grayscale'
      }" ${
      data.currentUser.levels.mapEight.completed
        ? ''
        : 'disabled="true" style="cursor: not-allowed"'
    } >
        <img src="./assets/${
          data.currentUser.levels.mapEight.completed ? 'btnEight' : 'not-found'
        }.png" alt="" class="modal__btn-level-img" data-level="btnEight" ${
      data.currentUser.levels.mapEight.completed
        ? ''
        : 'style="cursor: not-allowed"'
    }/>
        <p>${
          data.currentUser.levels.mapEight.completed ? 'The Map of Me' : '???'
        }</p>
      </button>

    </div>
    <div class="w-[60%] flex flex-col justify-center items-center gap-6">
      <div class="flex flex-col justify-center items-center w-full">
        <label for="input__title">Título do relato</label>
        <input
          type="text"
          name=""
          id="input__title"
          placeholder="Qual o título de seu relato?"
          class="w-[70%] font-jakarta font-normal p-2 placeholder:text-center"
        />
      </div>
      <div class="flex flex-col justify-center items-center w-full gap-2">
        <label for="input__description"
          >Conte-nos sobre sua experiência!</label
        >
        <p class="font-normal text-sm tracking-wider w-[70%] text-center">
          O que achou dessa fase? Foi uma aventura muito díficil ou fácil?
          Como seu aventureiro reagiu às emoções apresentadas?
        </p>
        <textarea
          name=""
          id="input__description"
          cols="40"
          rows="6"
          class="font-jakarta font-normal p-3 placeholder:text-left"
          placeholder="Descreva sua experiência com bastante detalhes!"
        ></textarea>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h5 class="font-jakarta text-orange-400 drop-shadow-lg text-xl">
          Nota
        </h5>
        <div
          class="ratio__container flex flex-row justify-center items-center text-gray-700 text-xl"
        >
          <i class="ratio__btn fa-solid fa-star " data-ratio="0"></i>
          <i class="ratio__btn fa-solid fa-star " data-ratio="1"></i>
          <i class="ratio__btn fa-solid fa-star " data-ratio="2"></i>
          <i class="ratio__btn fa-solid fa-star " data-ratio="3"></i>
          <i class="ratio__btn fa-solid fa-star " data-ratio="4"></i>
        </div>
      </div>
    </div>

    <div>
      <button
        class="modal__sendReview-btn font-amatic font-bold text-3xl bg-azulEscuro text-gray-50 p-4 rounded-md drop-shadow-md shadow-md hover:bg-orange-400 duration-150"
      >
        Enviar relato!
      </button>
    </div>
  </div>
  <div
    class="modal__cover w-screen h-screen absolute z-[9998] bg-[rgba(0,0,0,0.40)] backdrop-blur-[2px]"
    style="display: none"
  ></div>
  <main class="w-screen min-h-screen">
    <header
      class="w-screen flex flex-row justify-center items-center py-14 drop-shadow-lg"
    >
      <div
        data-hash="adventure-map"
        class="btn__hash flex flex-col justify-center items-center bg-brancoAzulado p-6 rounded-lg shadow-xl cursor-pointer text-orange-400 hover:bg-orange-400 hover:text-gray-50 max-w-[18%]"
      >
        <img src="./assets/map.png" alt="" class="w-[60%] drop-shadow-lg" />
        <h4 class="font-amatic font-bold text-4xl drop-shadow-lg">
          Retornar à aventura!
        </h4>
      </div>
      <div
        class="flex flex-col justify-center items-center font-jakarta text-gray-700 gap-6 w-[60%]"
      >
        <h2 class="text-4xl text-azulEscuro tracking-wide">
          RELATOS SOBRE A AVENTURA
        </h2>
        <p class="text-xl w-[70%] text-center">
          Nos ajude a melhorar a aventura pela floresta! Adoraríamos ouvir
          sobre a experiência de seu aventureiro com o
          <span class="text-orange-500 font-bold font-amatic text-4xl"
            >The Map of Me!</span
          >
        </p>
      </div>
      <div
        class="flex flex-row justify-start items-center drop-shadow-lg max-w-[18%]"
      >
        <img
          src="./assets/rose-winds.png"
          alt=""
          class="object-contain w-[40%] inline"
        />
        <h1 class="text-azulEscuro font-amatic text-5xl font-bold inline">
          The Map of Me!
        </h1>
      </div>
    </header>
    <section
      class="flex flex-row justify-center items-center h-[65vh] w-full"
    >
      <div
        class="flex flex-col justify-center items-center h-full w-[10%] gap-4"
      >
        <button class="newReview__btn">
          <img
            src="./assets/dog.png"
            alt=""
            class="border-[3px] border-solid border-orange-400 rounded-full drop-shadow-xl shadow-lg bg-azulClaro hover:bg-orange-400 hover:border-azulClaro duration-150"
          />
        </button>
        <h3 class="font-amatic text-3xl text-gray-700 font-bold">
          Criar novo relato!
        </h3>
      </div>
      <div class="w-[70%]">
        <div class="flex flex-row justify-center items-center" style="display:${
          data.currentUser.feedbacks.hasFeedbacks ? 'none' : 'flex'
        }">
          <img
            src="./assets/ops-feedback.png"
            alt=""
            class="rounded-lg shadow-lg border border-solid border-orange-400"
          />
        </div>
        <ul
          class="comment__container flex flex-row flex-wrap justify-evenly items-center gap-8 h-[65vh] overflow-y-scroll"
          style="display: ${
            data.currentUser.feedbacks.hasFeedbacks ? 'flex' : 'none'
          }"
        ></ul>
      </div>
      <div class="w-[10%]"></div>
    </section>
  </main>
        `;
  }

  generateItemHTML() {
    return `
    <li
    class="comment__item h-[250px] overflow-y-scroll w-[40%] border-[2px] border-solid border-azul py-6 px-12 flex flex-col justify-center items-center"
  >
    <div
      class="w-full flex flex-row justify-evenly items-center mb-4"
    >
      <h4
        class="font-amatic text-4xl font-bold text-azulEscuro drop-shadow-md"
      >
        ${this._crudData.title}
      </h4>
    </div>
    <p
      class=" mb-6 font-jakarta tracking-wider text-base text-justify indent-8"
    >
      ${this._crudData.description}
    </p>
    <div
      class="w-full flex flex-row justify-center items-center gap-20"
    >
      <div class="w-[20%] flex flex-col justify-center items-center">
        <img
          src="./assets/${this._crudData.level}.png"
          alt=""
          class="w-[100%] border-[2px] shadow-lg border-orange-400 border-solid rounded-full"
        />
        <h5
          class="font-amatic text-2xl font-bold text-gray-700 drop-shadow-lg"
        >
          ${this._levelWord[this._crudData.level]}
        </h5>
      </div>
      <div class="w-[20%] flex flex-col items-start justify-center">
        <h5
          class="font-jakarta text-orange-400 drop-shadow-lg text-lg"
        >
          Nota
        </h5>
        <div
          class="flex flex-row justify-center items-center text-gray-700"
        >
          ${this._generateRatioHTML()}
          
        </div>
      </div>
    </div>
  </li>
    `;
  }

  _generateRatioHTML() {
    const html = [];
    for (let i = 0; i <= this._crudData.rating; i++) {
      html.push('<i class="fa-solid fa-star text-yellow-400"></i>');
    }
    return html.join(' ');
  }

  _generateErrorHTML() {
    return `
      <div class="errorMsg p-3 absolute left-[39.5%] bottom-[1%] z-[9999] bg-azulClaro opacity-90"> 
        <p class="font-jakarta font-bold text-gray-50 text-lg">Preencha todos os campos do formulário!</p>
      </div>
    `;
  }

  async renderHTML(component, data) {
    const isAuthenticated = await this.verifyJWT();
    if (isAuthenticated) {
      this._clearParentElement();
      this._data = data;

      this._body.insertAdjacentHTML('beforeend', component);

      if (data.currentUser.feedbacks.hasFeedbacks) {
        document.querySelector('.comment__container').innerHTML = '';
        data.currentUser.feedbacks.feedbacks.forEach((feedback) => {
          this._crudData = feedback;
          this._renderItem();
        });
      }
    }

    //Start scripts here
    this._initCustomScroll();

    this._addEventListeners();
  }

  _addEventListeners() {
    const newReviewBtn = document.querySelector('.newReview__btn');
    const modalCover = document.querySelector('.modal__cover');
    const levelContainer = document.querySelector('.modal__levelContainer');
    const sendReview = document.querySelector('.modal__sendReview-btn');

    newReviewBtn.addEventListener('click', this._reviewBtnHandler.bind(this));

    modalCover.addEventListener('click', (event) => {
      this._toggleModal(false);
    });

    levelContainer.addEventListener(
      'click',
      this._levelInputHandler.bind(this)
    );

    this._mouseInOutHandle();

    sendReview.addEventListener('click', this._crudHandler.bind(this));
  }

  _renderItem() {
    const commentContainer = document.querySelector('.comment__container');

    commentContainer.previousElementSibling.style.display = 'none';
    commentContainer.style = '';

    const html = this.generateItemHTML();

    commentContainer.insertAdjacentHTML('beforeend', html);

    this._toggleModal(false);

    this._initCustomScroll();
  }

  _renderErrorCrud() {
    const html = this._generateErrorHTML();
    this._body.insertAdjacentHTML('beforeend', html);

    setTimeout(() => document.querySelector('.errorMsg').remove(), 3000);
  }

  // ------- CRUD OPERATION --------//
  _crudHandler() {
    this._getTitle();
    this._getDescription();

    const datas = Object.values(this._crudData);

    const crudStatus = datas.every((data) =>
      data || data === 0 ? true : false
    );

    if (crudStatus) {
      this._crudData.timeStamp = new Date();
      const event = new CustomEvent('newReview', { detail: this._crudData });
      window.dispatchEvent(event);

      console.log(event);
      this._renderItem();
    }
    if (!crudStatus) this._renderErrorCrud();
  }

  _levelInputHandler(event) {
    const btn = event.target.closest('.modal__btn-level-img');
    if (!btn) return;

    this._removeLevelActive();
    btn.classList.add('btn__charts-active');
    this._crudData.level = btn.dataset.level;
    console.log(this._crudData);
  }

  _getTitle() {
    const inputTitle = document.querySelector('#input__title');
    let data = validator.escape(inputTitle.value);

    this._crudData.title = data;
  }

  _getDescription() {
    const inputDescription = document.querySelector('#input__description');
    let data = validator.escape(inputDescription.value);

    this._crudData.description = data;
  }

  _mouseInOutHandle() {
    const ratioContainer = document.querySelector('.ratio__container');
    const ratioBtns = [...document.querySelectorAll('.ratio__btn')];

    ratioContainer.addEventListener('click', (event) => {
      const btn = event.target.closest('.ratio__btn');
      if (!btn) return;

      ratioBtns.forEach((btn) => (btn.style.color = ''));
      const ratio = Number(btn.dataset.ratio);
      for (let i = 0; i <= ratio; i++) {
        ratioBtns[i].style.color = 'rgb(250,204,21)';
      }
      this._crudData.rating = ratio;
    });

    ratioContainer.addEventListener('mouseover', (event) => {
      const btn = event.target.closest('.ratio__btn');
      if (!btn) return;
      const ratio = Number(btn.dataset.ratio);

      for (let i = 0; i <= ratio; i++) {
        ratioBtns[i].classList.add('text-yellow-400');
      }
    });

    ratioContainer.addEventListener('mouseout', (event) => {
      ratioBtns.forEach((btn) => btn.classList.remove('text-yellow-400'));
    });
  }

  // ------- RESET CRUD --------//

  _removeLevelActive() {
    const btns = document.querySelectorAll('.modal__btn-level-img');
    btns.forEach((btn) => btn.classList.remove('btn__charts-active'));
  }

  _resetInputs() {
    const inputTitle = document.querySelector('#input__title');
    const inputDescription = document.querySelector('#input__description');

    [inputTitle, inputDescription].forEach((input) => (input.value = ''));
  }

  _resetRatio() {
    const ratioBtns = [...document.querySelectorAll('.ratio__btn')];
    ratioBtns.forEach((btn) => (btn.style.color = ''));
  }

  // ------------------------------//

  _reviewBtnHandler(event) {
    const btn = event.target.closest('.newReview__btn');

    if (!btn) return;

    this._toggleModal(true);
  }

  _toggleModal(status) {
    this._removeLevelActive();
    this._resetInputs();
    this._resetRatio();

    const modal = document.querySelector('.modal__comment');
    const modalCover = document.querySelector('.modal__cover');

    this._crudData = {
      title: '',
      level: '',
      rating: '',
      description: '',
    };

    [modal, modalCover].forEach(
      (div) => (div.style.display = `${status ? 'flex' : 'none'}`)
    );
  }

  _initCustomScroll() {
    const Scrollbar = window.Scrollbar;

    const commentItems = document.querySelectorAll('.comment__item');

    commentItems.forEach((comment) =>
      Scrollbar.init(comment, {
        alwaysShowTracks: true,
      })
    );
  }
}

export default new FeedbackView();
