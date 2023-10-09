import View from './view.js';

class AnalyticsView extends View {
  _canvas;
  chart;
  _currentChart;
  _currentPagination;
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
    <main
    class="flex flex-col justify-start items-center bg-gray-100 w-screen min-h-screen"
  >
    <header
      class="w-screen flex flex-row justify-center items-center py-14 drop-shadow-lg"
    >
      <div
        data-hash="adventure-map"
        class="btn__hash flex flex-col justify-center items-center bg-brancoAzulado p-6 rounded-lg shadow-xl cursor-pointer text-orange-400  hover:bg-orange-400 hover:text-gray-50 max-w-[18%]"
      >
        <img src="./assets/map.png" alt="" class="w-[60%] drop-shadow-lg" />
        <h4
          class="font-amatic font-bold text-4xl  drop-shadow-lg"
        >
          Retornar à aventura!
        </h4>
      </div>

      <div
        class="flex flex-col justify-center items-center font-jakarta text-gray-700 gap-6 w-[60%]"
      >
        <h2 class="text-4xl text-azulEscuro tracking-wide">
          MÉTRICAS DO EXPLORADOR
        </h2>
        <p class="text-xl">
          Acompanhe o desempenho de seu pequeno explorador durante sua
          aventura pelo
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
      class="flex flex-row justify-evenly items-start w-[90%] bg-brancoAzulado py-16 px-6 rounded-xl shadow-xl"
    >
      <div
        class="w-[20%] flex flex-col justify-center items-center gap-4 tracking-wide leading-6 indent-8 font-serif text-justify bg-gray-50 p-10 rounded-lg shadow-xl drop-shadow-md"
      >
        <p>
          O registro dos detalhes de cada desafio resolvido e emoção
          explorada, fornece uma ferramenta valiosa para auxiliar no
          tratamento e diagnóstico do Transtorno do Espectro Autista (TEA).
        </p>
        <p>
          Através dessa análise cuidadosa, os profissionais de saúde podem
          obter insights sobre as áreas onde seu filho se destaca, as emoções
          que ele compreende mais profundamente e os aspectos que talvez
          necessitem de mais apoio.
        </p>
        <p>
          A capacidade de rastrear o progresso não apenas oferece uma visão
          mais completa do desenvolvimento emocional e cognitivo, mas também
          ajuda a personalizar estratégias de intervenção, permitindo um
          tratamento mais eficaz e centrado nas necessidades individuais do
          seu filho.
        </p>
      </div>
      <div class="w-[70%] flex flex-col justify-center items-center gap-8">
        <div class="container__pagination flex flex-row justify-center items-center gap-8">
          <button data-pagination="container__perLevel"
            class="btn__pagination btn__pagination-active"
          >
            Desempenho por fase
          </button>
          <button data-pagination="container__perMetric"
            class="btn__pagination "
          >
            Desempenho por métricas
          </button>
        </div>
        <div
          class="flex flex-row justify-center items-center gap-4 font-amatic text-2xl text-gray-700 font-bold"
        >
          <div
            class="container__btns container__perLevel"
          >
            <button data-metric="mapOne" data-metric-type="perLevel" class="btn__charts btn__charts-active">
              <img src="${
                data.currentUser.levels.mapOne.completed
                  ? './assets/btnOne.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapOne.completed
                  ? 'Felicidade!'
                  : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapTwo" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapTwo.completed
                  ? './assets/btnTwo.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapTwo.completed
                  ? 'Admiração!'
                  : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapThree" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapThree.completed
                  ? './assets/btnThree.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapThree.completed ? 'Medo!' : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapFour" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapFour.completed
                  ? './assets/btnFour.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapFour.completed ? 'Coragem!' : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapFive" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapFive.completed
                  ? './assets/btnFive.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapFive.completed ? 'Diversão' : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapSix" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapSix.completed
                  ? './assets/btnSix.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapSix.completed ? 'Empatia' : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapSeven" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapSeven.completed
                  ? './assets/btnSeven.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapSeven.completed
                  ? 'Esperança'
                  : '? ? ?'
              }</h4>
            </button>
            <button data-metric="mapEight" data-metric-type="perLevel" class="btn__charts">
              <img src="${
                data.currentUser.levels.mapEight.completed
                  ? './assets/btnEight.png'
                  : './assets/not-found.png'
              }" alt="" class="w-[50%]" />
              <h4>${
                data.currentUser.levels.mapEight.completed
                  ? 'The Map of Me!'
                  : '? ? ?'
              }</h4>
            </button>
          </div>
          <div
            class="container__btns container__perMetric" style='display:none'
          >
            <button data-metric="focusTime" data-metric-type="perMetric"
              class="btn__charts btn__charts-active flex flex-row justify-center items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <i class="fa-solid fa-arrows-to-circle text-xl"> </i>
              <span class="text-3xl">Foco</span>
            </button>
            <button data-metric="durationToComplete" data-metric-type="perMetric"
              class="btn__charts flex flex-row justify-center items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <i class="fa-solid fa-stopwatch texl-xl"></i>
              <span class="text-3xl">Montagem</span>
            </button>
            <button data-metric="hints" data-metric-type="perMetric"
              class="btn__charts flex flex-row justify-center items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <i class="fa-solid fa-signs-post texl-xl"></i>
              <span class="text-3xl">Dicas usadas</span>
            </button>
            <button data-metric="wrongMoves" data-metric-type="perMetric"
              class="btn__charts flex flex-row justify-center items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg"
            >
              <i class="fa-solid fa-road-circle-xmark text-xl"></i>
              <span class="text-3xl">Erros</span>
            </button>
          </div>
        </div>
        <div class="chart__container w-[85%]" style="display: none">
          <canvas id="chart" class="border-[2px] border-solid border-orange-300 rounded-lg shadow-xl bg-gray-50">
          </canvas>
        </div>
        <div
            class="error__container flex flex-col justify-center items-center w-[70%] pt-32 font-bold font-jakarta text-gray-700 gap-6"
          >
            <h5 class="text-2xl">
              Seu explorador ainda
              <span class="text-orange-400">não completou essa fase</span>!
            </h5>
            <h6 class="font-amatic text-4xl text-azulEscuro">
              Prepare-se para a aventura...
            </h6>
            <img
              src="./assets/logo300.png"
              alt=""
              class="w-[25%] opacity-80"
            />
          </div>
      </div>
    </section>
  </main>
      `;
  }

  renderHTML(component, data) {
    this._clearParentElement();
    this._data = data;

    this._body.insertAdjacentHTML('beforeend', component);
    this._defineCanvas();
    this._defineInitialCanvas();
    this._startEventListeners();
    this._configChart();
    this.renderBarChart(this._currentChart);
  }

  _defineCanvas() {
    this._canvas = document.querySelector('#chart');
  }

  _defineInitialCanvas() {
    this._currentChart = 'mapOne';
    this._currentPagination = 'btn__perLevel';
  }

  _defineChartContainers() {
    const chartContainer = document.querySelector('.chart__container');
    const errorContainer = document.querySelector('.error__container');

    return [chartContainer, errorContainer];
  }

  _configChart(chartType = 'perLevel') {
    Chart.defaults.font = {
      size: chartType === 'perLevel' ? 14 : 16,
      family: 'Plus Jakarta Sans',
    };
  }

  _startEventListeners() {
    const paginationContainer = document.querySelector(
      '.container__pagination'
    );
    const containerPerLevel = document.querySelector('.container__perLevel');
    const containerPerMetric = document.querySelector('.container__perMetric');

    paginationContainer.addEventListener(
      'click',
      this._handleChangePagination.bind(this)
    );

    [containerPerLevel, containerPerMetric].forEach((container) =>
      container.addEventListener('click', this._handleChangeChart.bind(this))
    );
  }

  _handleChangeChart(event) {
    const btn = event.target.closest('.btn__charts');

    if (!btn) return;

    this._changeBtnView(btn);

    this._currentChart = btn.dataset.metric;

    const chartType = btn.dataset.metricType;

    if (chartType === 'perLevel') this.renderBarChart(this._currentChart);

    if (chartType === 'perMetric') this.renderLineChart(this._currentChart);
  }

  _changeBtnView(btn) {
    const btns = document.querySelectorAll('.btn__charts');

    btns.forEach((btn) => btn.classList.remove('btn__charts-active'));

    btn.classList.add('btn__charts-active');
  }

  _handleChangePagination(event) {
    const btn = event.target.closest('.btn__pagination');

    if (!btn) return;

    const currentPagination = btn.dataset.pagination;

    this._currentPagination = currentPagination;

    this._changePaginationView(currentPagination, btn);

    this._currentChart = '';
  }

  _changePaginationView(pagination, btnTarget) {
    const containersBtns = document.querySelectorAll('.container__btns');
    const paginationBtns = document.querySelectorAll('.btn__pagination');
    const chartsBtns = document.querySelectorAll('.btn__charts');

    containersBtns.forEach((container) => {
      container.classList.remove('btn__chart-active');
      container.style.display = 'none';
    });

    paginationBtns.forEach((btn) => {
      btn.classList.remove('btn__pagination-active');
    });

    chartsBtns.forEach((btn) => btn.classList.remove('btn__chart-active'));

    btnTarget.classList.add('btn__pagination-active');

    document.querySelector(`.${pagination}`).style = '';
  }

  _isCompleted(currentChart) {
    if (currentChart.completed) return true;

    if (!currentChart.completed) return false;
  }

  _renderErrorMessage() {
    const errorContainer = document.querySelector('.error__container');
    const chartContainer = document.querySelector('.chart__container');

    chartContainer.style.display = 'none';
    errorContainer.style = '';
  }

  _showCanvas(errorContainer, chartContainer) {
    errorContainer.style.display = 'none';
    chartContainer.style = '';
  }

  _clearCanvas(currentChart) {
    const chartContainer = document.querySelector('.chart__container');

    chartContainer.innerHTML = '';

    const html = `<canvas id="${currentChart}" class="border-[2px] border-solid border-orange-300 rounded-lg shadow-xl bg-gray-50">
    </canvas>`;

    chartContainer.insertAdjacentHTML('beforeend', html);

    this._canvas = document.querySelector(`#${currentChart}`);
  }

  renderLineChart(currentChart, chartType) {
    const [chartContainer, errorContainer] = this._defineChartContainers();
    const dataLevels = this._data.currentUser.levels;

    this._configChart(chartType);

    this._showCanvas(errorContainer, chartContainer);

    this._clearCanvas('perMetric');
    this._canvas = this._canvas.getContext('2d');

    this.app = new Chart(this._canvas, {
      type: 'bar',
      data: {
        labels: [
          `${dataLevels.mapOne.completed ? 'Felicidade!' : '???'}`,
          `${dataLevels.mapTwo.completed ? 'Admiração!' : '???'}`,
          `${dataLevels.mapThree.completed ? 'Medo!' : '???'}`,
          `${dataLevels.mapFour.completed ? 'Coragem!' : '???'}`,
          `${dataLevels.mapFive.completed ? 'Diversão!' : '???'}`,
          `${dataLevels.mapSix.completed ? 'Empatia!' : '???'}`,
          `${dataLevels.mapSeven.completed ? 'Esperança!' : '???'}`,
          `${dataLevels.mapEight.completed ? 'The Map of Me!' : '???'}`,
        ],
        datasets: [
          {
            label: `Métricas de ${this._data.currentUser.name}`,
            data: [
              dataLevels.mapOne.completed ? dataLevels.mapOne[currentChart] : 0,
              dataLevels.mapTwo.completed ? dataLevels.mapTwo[currentChart] : 0,
              dataLevels.mapThree.completed
                ? dataLevels.mapThree[currentChart]
                : 0,
              dataLevels.mapFour.completed
                ? dataLevels.mapFour[currentChart]
                : 0,
              dataLevels.mapFive.completed
                ? dataLevels.mapFive[currentChart]
                : 0,
              dataLevels.mapSix.completed ? dataLevels.mapSix[currentChart] : 0,
              dataLevels.mapSeven.completed
                ? dataLevels.mapSeven[currentChart]
                : 0,
              dataLevels.mapEight.completed
                ? dataLevels.mapEight[currentChart]
                : 0,
            ],
            backgroundColor: 'rgb(34,139,230)',
            borderRadius: '8',
          },
        ],
      },
      options: {
        layout: {
          padding: 40,
        },
      },
    });
  }

  renderBarChart(currentChart, chartType) {
    const [chartContainer, errorContainer] = this._defineChartContainers();

    const rawData = this._data.currentUser.levels[currentChart];

    if (!this._isCompleted(rawData)) return this._renderErrorMessage();

    this._configChart(chartType);

    this._clearCanvas(currentChart);

    this._showCanvas(errorContainer, chartContainer);

    this._canvas = this._canvas.getContext('2d');
    this.app = new Chart(this._canvas, {
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
            label: `Resultados de ${this._data.currentUser.name}`,
            data: [
              rawData.focusTime,
              rawData.durationToComplete,
              rawData.wrongMoves,
              rawData.hints,
            ],
            backgroundColor: 'rgb(34,139,230)',
            borderRadius: '8',
          },
        ],
      },
    });
  }
}

export default new AnalyticsView();
