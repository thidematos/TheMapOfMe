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
        %ERROR_MESSAGE%
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

  constructor() {}

  init(hash) {
    this.hash = hash;
    this._renderSpinner();
    this.auth();
  }

  _addClickReturn() {
    const backButton = document.querySelector('.back__button');
    backButton.addEventListener('click', (event) => {
      window.location.hash = '';
      App._renderAdminView(true);
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
        url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/adminView/${this.hash}`,
        method: 'GET',
      });
      this._renderPage(response.data.data.html);
      this._addClickReturn();
    } catch (err) {
      const notAuth = this.notAuthHTML.replace(
        '%ERROR_MESSAGE%',
        err.response.data.message
      );

      this._renderPage(notAuth);
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
  constructor() {
    super();
  }

  async init(hash) {
    this.hash = hash;
    this._renderSpinner();
    await this.auth();
    this._getContainers();
    this._addClickFirstOption();
    this._addClickLevel();
    this._addClickMetric();
    this._addClickAges();
  }

  async _getLevelData(level) {
    const response = await axios({
      method: 'GET',
      url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/statistics/levels/${level}`,
    });

    this._renderBarChart(response.data.data.statistics[0], level);
  }

  async _getMetricData(metric) {
    const response = await axios({
      method: 'GET',
      url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/statistics/metrics/${metric}`,
    });

    this._renderMetricChartInfo(response.data.data.metrics);
    this._renderMetricChart(response.data.data.metrics, metric);
  }

  async _getAgeData(age) {
    const response = await axios({
      method: 'GET',
      url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/statistics/ages/${age}`,
    });

    this._renderAgeChart(response.data.data.ages, age);
  }

  _clearCanvas(currentChart, isMetric = false, isAge = false) {
    const html = `<canvas id="${currentChart}" class="oldCanvas w-[${
      isAge ? '40' : '75'
    }%] border-2 border-solid border-orange-300 rounded-lg shadow-xl bg-gray-50">
    </canvas>`;
    if (!isMetric) {
      if (!isAge) {
        this._chartContainer.innerHTML = '';
      }

      this._chartContainer.insertAdjacentHTML('beforeend', html);
    } else if (isMetric) {
      document
        .querySelectorAll('.oldCanvas')
        .forEach((canvas) => canvas.remove());
      this._chartContainerMetrics.insertAdjacentHTML('afterbegin', html);
    }

    return document.querySelector(`#${currentChart}`);
  }

  _configChart() {
    Chart.defaults.font = {
      size: 14,
      family: 'Plus Jakarta Sans',
    };
  }

  _renderErrorCanvas() {
    this._toggleButtonsContainer(false, this._chartContainer);
    this._toggleButtonsContainer(true, this._errorContainer);
  }

  _renderBarChart(data, currentChart) {
    const averages = data;
    this._toggleButtonsContainer(false, this._infoContainer);

    if (!averages) return this._renderErrorCanvas();

    this._toggleButtonsContainer(false, this._errorContainer);
    this._configChart();

    let currentCanvas = this._clearCanvas(currentChart);

    this._toggleButtonsContainer(true, this._chartContainer);

    currentCanvas = currentCanvas.getContext('2d');
    const chart = new Chart(currentCanvas, {
      type: 'bar',

      data: {
        labels: [
          'Tempo de foco (segundos)',
          'Tempo de montagem (segundos)',
          'Movimentos errados',
          'Dicas usadas',
        ],
        datasets: [
          {
            label: `Média Geral: ${averages.numOfUsersData} exploradores`,
            data: [
              averages.avgFocusTime,
              averages.avgDurationToComplete,
              averages.avgWrongMoves,
              averages.avgHints,
            ],
            backgroundColor: 'rgb(34,139,230)',
            borderRadius: '8',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Desempenho médio de todos os jogadores',
            font: {
              family: 'Plus Jakarta Sans',
              size: 24,
            },
          },
        },
        layout: {
          padding: 10,
        },
      },
    });
  }

  _renderAgeChart(data, currentChart) {
    const ages = data;

    if (!ages) return this._renderErrorCanvas();

    const alreadyCanvas = document.querySelectorAll('.oldCanvas');
    if (alreadyCanvas[0]) this._chartContainer.innerHTML = '';

    this._toggleButtonsContainer(false, this._errorContainer);
    this._configChart();

    const maps = Object.values(ages);
    const mapsNames = Object.keys(ages);

    this._toggleButtonsContainer(true, this._chartContainer);

    maps.forEach((map, ind) => {
      let currentCanvas = this._clearCanvas(mapsNames[ind], false, true);
      currentCanvas = currentCanvas.getContext('2d');

      const chart = new Chart(currentCanvas, {
        type: 'bar',

        data: {
          labels: [
            'Tempo de foco (segundos)',
            'Tempo de montagem (segundos)',
            'Movimentos errados',
            'Dicas usadas',
          ],
          datasets: [
            {
              label: map.numOfUsers
                ? `Média Geral: ${map.numOfUsers} exploradores`
                : 'Os jogadores dessa faixa etária ainda não completaram essa fase!',
              data: [
                map.avgFocusTime,
                map.avgDurationToComplete,
                map.avgWrongMoves,
                map.avgHints,
              ],
              backgroundColor: 'rgb(34,139,230)',
              borderRadius: '8',
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text:
                mapsNames[ind] === 'mapOne'
                  ? 'Felicidade!'
                  : undefined || mapsNames[ind] === 'mapTwo'
                  ? 'Admiração!'
                  : undefined || mapsNames[ind] === 'mapThree'
                  ? 'Medo!'
                  : undefined || mapsNames[ind] === 'mapFour'
                  ? 'Coragem!'
                  : undefined || mapsNames[ind] === 'mapFive'
                  ? 'Diversão!'
                  : undefined || mapsNames[ind] === 'mapSix'
                  ? 'Empatia!'
                  : undefined || mapsNames[ind] === 'mapSeven'
                  ? 'Esperança!'
                  : undefined || mapsNames[ind] === 'mapEight'
                  ? 'The Map of Me!'
                  : undefined,
              font: {
                family: 'Plus Jakarta Sans',
                size: 24,
              },
            },
          },
          layout: {
            padding: 10,
          },
        },
      });
    });

    this._toggleButtonsContainer(false, this._infoContainer);
  }

  _renderMetricChartInfo(data) {
    if (document.querySelector('.chartInfo')) return;

    const html = `
  <ul class="chartInfo flex flex-col justify-center items-center w-[20%] font-jakarta text-gray-800 tracking-wider list-disc gap-4">
    <h2 class="list-none">Número de usuários considerados</h2>
    <li>Felicidade: ${
      data.mapOne.numOfUsers || data.mapOne
    } explorador(es) </li>
    <li>Admiração: ${data.mapTwo.numOfUsers || data.mapTwo} explorador(es) </li>
    <li>Medo: ${data.mapThree.numOfUsers || data.mapThree} explorador(es)</li>
    <li>Coragem: ${data.mapFour.numOfUsers || data.mapFour} explorador(es) </li>
    <li>Diversão: ${
      data.mapFive.numOfUsers || data.mapFive
    } explorador(es) </li>
    <li>Empatia: ${data.mapSix.numOfUsers || data.mapSix} explorador(es) </li>
    <li>Esperança: ${
      data.mapSeven.numOfUsers || data.mapSeven
    } explorador(es) </li>
    <li>The Map of Me: ${
      data.mapEight.numOfUsers || data.mapEight
    } explorador(es) </li>
  </ul>`;
    this._chartContainerMetrics.insertAdjacentHTML('beforeend', html);
  }

  _renderMetricChart(data, currentChart) {
    const averages = data;

    this._toggleButtonsContainer(false, this._errorContainer);
    this._configChart();

    let currentCanvas = this._clearCanvas(currentChart, true);

    this._toggleButtonsContainer(true, this._chartContainerMetrics);

    currentCanvas = currentCanvas.getContext('2d');
    const chart = new Chart(currentCanvas, {
      type: 'bar',

      data: {
        labels: [
          'Felicidade',
          'Admiração',
          'Medo',
          'Coragem',
          'Diversão',
          'Empatia',
          'Esperança',
          'The Map of Me',
        ],
        datasets: [
          {
            label:
              currentChart === 'focusTime'
                ? 'Tempo de foco (segundos)'
                : undefined || currentChart === 'durationToComplete'
                ? 'Tempo de montagem (segundos)'
                : undefined || currentChart === 'hints'
                ? 'Número de dicas'
                : undefined || currentChart === 'wrongMoves'
                ? 'Número de erros'
                : undefined,
            data: [
              averages.mapOne[`avg${currentChart}MapOne`],
              averages.mapTwo[`avg${currentChart}MapTwo`],
              averages.mapThree[`avg${currentChart}MapThree`],
              averages.mapFour[`avg${currentChart}MapFour`],
              averages.mapFive[`avg${currentChart}MapFive`],
              averages.mapSix[`avg${currentChart}MapSix`],
              averages.mapSeven[`avg${currentChart}MapSeven`],
              averages.mapEight[`avg${currentChart}MapEight`],
            ],
            backgroundColor: 'rgb(34,139,230)',
            borderRadius: '8',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: `Desempenho médio de todos os exploradores`,
            font: {
              family: 'Plus Jakarta Sans',
              size: 24,
            },
          },
        },
        layout: {
          padding: 10,
        },
      },
    });
    this._toggleButtonsContainer(false, this._infoContainer);
  }

  _addClickFirstOption() {
    this._firstContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.statistic__button-first');
      if (!button) return;

      this._containers.forEach((container) =>
        this._toggleButtonsContainer(false, container)
      );
      this._removeActiveState();
      this._removeFirstActiveState();

      const option = button.dataset.firstoption;
      button.classList.add('statistic__button-active');

      if (option === 'levels') {
        this._changeInfo('Agora, selecione a fase desejada!');
        this._toggleButtonsContainer(
          true,
          this._levelButtonsContainer,
          this._infoContainer
        );
      } else if (option === 'metrics') {
        this._changeInfo('Agora, selecione a métrica desejada!');
        this._toggleButtonsContainer(
          true,
          this._metricButtonsContainer,
          this._infoContainer
        );
      } else if (option === 'ages') {
        this._changeInfo('Agora, selecione a faixa etária desejada!');
        this._toggleButtonsContainer(
          true,
          this._ageButtonsContainer,
          this._infoContainer
        );
      }
    });
  }

  _addClickLevel() {
    this._levelButtonsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.statistic__button');
      if (!button) return;

      this._removeActiveState();
      button.classList.add('statistic__button-active');
      const level = button.dataset.levels;
      console.log(level);

      this._getLevelData(level);
    });
  }

  _addClickMetric() {
    this._metricButtonsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.statistic__button');
      if (!button) return;

      this._removeActiveState();
      button.classList.add('statistic__button-active');
      const metric = button.dataset.metrics;
      console.log(metric);

      this._getMetricData(metric);
    });
  }

  _addClickAges() {
    this._ageButtonsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.statistic__button');
      if (!button) return;

      this._removeActiveState();
      button.classList.add('statistic__button-active');
      const age = button.dataset.ages;
      console.log(age);

      this._getAgeData(age);
    });
  }

  _removeActiveState() {
    const buttons = document.querySelectorAll('.statistic__button');
    buttons.forEach((button) =>
      button.classList.remove('statistic__button-active')
    );
  }

  _removeFirstActiveState() {
    const firstButtons = document.querySelectorAll('.statistic__button-first');
    firstButtons.forEach((button) => {
      button.classList.remove('statistic__button-active');
    });
  }

  _changeInfo(message) {
    const messageElement = document.querySelector('.statistics__info-message');
    messageElement.textContent = message;
  }

  _toggleButtonsContainer(state, ...containers) {
    containers.forEach((container) => {
      if (state) container.style.display = 'flex';
      if (!state) container.style.display = 'none';
    });
  }

  _getContainers() {
    this._firstContainer = document.querySelector(
      '.statistic__button-firstContainer'
    );

    this._levelButtonsContainer = document.querySelector(
      '.statistics__button-levels'
    );

    this._metricButtonsContainer = document.querySelector(
      '.statistics__button-metrics'
    );

    this._ageButtonsContainer = document.querySelector(
      '.statistics__button-ages'
    );

    this._infoContainer = document.querySelector('.statistics__info');

    this._chartContainer = document.querySelector(
      '.statistics__chart-container'
    );

    this._chartContainerMetrics = document.querySelector(
      '.statistics__chart-container-metrics'
    );

    this._errorContainer = document.querySelector('.statistics__error');

    this._containers = [
      this._levelButtonsContainer,
      this._metricButtonsContainer,
      this._ageButtonsContainer,
      this._infoContainer,
      this._errorContainer,
      this._chartContainer,
      this._chartContainerMetrics,
    ];
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
  constructor() {
    super();
  }

  init(hash) {
    this.hash = hash;
    this._renderSpinner();
    this.auth();
    this._getAllUsers();
  }

  async _getAllUsers() {
    const response = await axios({
      url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/usersFeedbacks`,
      method: 'GET',
    });
    this._usersArr = response.data.data.data;
    console.log(response);
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

  constructor() {
    super();
  }

  init(hash) {
    this.hash = hash;
    this._renderSpinner();
    this.auth();
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
        url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users?fields=true`,
        method: 'GET',
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
