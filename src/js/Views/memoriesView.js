import View from './view.js';

class MemoriesView extends View {
  _container;

  _isComplete;

  _levels = {
    1: 'Quando estamos felizes, damos um belo sorriso!',
    2: 'Quando estamos admirados, contemplamos tudo que está à nossa volta!',
    3: 'Desafios fazem parte da jornada!',
    4: 'Juntos de nossos amigos, podemos enfrentar qualquer desafio!',
    5: 'Uma risada tímida!',
    6: 'Um simples ato de bondade podia fazer toda a diferença!',
    7: 'Sempre há uma esperança!',
    8: 'O tesouro sempre esteve dentro de nós!',
  };

  _levelsWords = {
    1: 'Felicidade!',
    2: 'Admiração!',
    3: 'Medo!',
    4: 'Coragem!',
    5: 'Diversão!',
    6: 'Empatia!',
    7: 'Esperança!',
    8: 'The Map of Me!',
  };

  _currentPage = 1;
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
    <main
    class="flex flex-col justify-center items-center w-screen min-h-screen"
  >
    <header
      class="w-screen flex flex-row justify-center items-center py-14 drop-shadow-lg"
    >
      <div
        data-hash="adventure-map"
        class="btn__hash flex flex-col justify-center items-center bg-brancoAzulado p-6 rounded-lg shadow-xl cursor-pointer hover:bg-orange-400 hover:text-gray-50 max-w-[18%] text-orange-400"
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
        <div
          class="flex flex-row justify-center items-center drop-shadow-xl gap-8"
        >
          <h2 class="font-amatic text-azulEscuro tracking-wide text-6xl">
            Caderno de Memórias
          </h2>
          <img src="./assets/sketch-book.png" alt="" class="w-[25%]" />
        </div>
        <p class="text-xl">
          Se aventure pelas memórias e aprendizados que explorou em sua jornada pelo
          <span class="text-orange-500 font-bold font-amatic text-4xl"
            >The Map of Me!</span
          >! 
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
    <section class="memories__container">
      
    </section>
  </main>
        `;
  }

  _handlePaginationChange() {
    const btns = document.querySelectorAll('.btn__pagination');

    btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const btn = event.target.closest('.btn__pagination');

        if (!btn) return;

        const direction = btn.dataset.pagination;

        this._changePagination(direction);
      });
    });
  }

  _changePagination(direction) {
    if (direction === 'up') this._currentPage += 2;
    if (direction === 'down') this._currentPage -= 2;

    console.log(this._currentPage);

    const html = this._generateMemoriesHTML(this._currentPage);

    this._container.innerHTML = '';

    this._container.insertAdjacentHTML('beforeend', html);
    this._handlePaginationChange();
  }

  renderHTML(component, data) {
    this._clearParentElement();
    this._data = data;
    this._setIsComplete();

    this._body.insertAdjacentHTML('beforeend', component);
    //Start something here, like event listeners.
    this._container = document.querySelector('.memories__container');
    this._container.insertAdjacentHTML(
      'beforeend',
      this._generateMemoriesHTML(this._currentPage)
    );
    this._handlePaginationChange();
  }

  _setIsComplete() {
    this._isComplete = {
      1: this._data.currentUser.levels.mapOne.completed,
      2: this._data.currentUser.levels.mapTwo.completed,
      3: this._data.currentUser.levels.mapThree.completed,
      4: this._data.currentUser.levels.mapFour.completed,
      5: this._data.currentUser.levels.mapFive.completed,
      6: this._data.currentUser.levels.mapSix.completed,
      7: this._data.currentUser.levels.mapSeven.completed,
      8: this._data.currentUser.levels.mapEight.completed,
    };
  }

  _generateMemoriesHTML(currentPagination) {
    return `
        <div
        class="flex flex-row justify-center items-center rounded-lg shadow-lg border border-solid border-orange-300 w-[1200px] h-[600px] p-6"
      >
        <div
          class="w-[50%] h-full bg-page1 bg-cover flex flex-col justify-end items-center pb-8"
        >
          <p
            class="font-jakarta text-gray-700 text-lg bg-gray-50 p-2 rounded-lg shadow-md mb-4"
          >
            ${
              this._isComplete[currentPagination]
                ? this._levels[currentPagination]
                : '? ? ?'
            }
          </p>
          <img
            src="${
              this._isComplete[currentPagination]
                ? `./assets/memory-${currentPagination}.png`
                : './assets/ops.png'
            }"
            alt=""
            class="w-[80%] shadow-xl rounded-lg border-solid border-[2px] border-brancoAzulado"
          />
          <div
            class="flex flex-row justify-center items-center gap-4 text-3xl font-amatic text-gray-50 pt-6"
          >
            <a
              ${
                this._isComplete[currentPagination]
                  ? `href="./assets/memory-${currentPagination}.png"`
                  : ''
              }
              class="bg-orange-400 rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg p-2 hover:bg-azulEscuro duration-300"
              download="${this._levelsWords[currentPagination]} - The Map of Me"
              ><i class="fa-solid fa-${
                this._isComplete[currentPagination] ? 'floppy-disk' : 'lock'
              } drop-shadow-lg"></i
            ></a>
            <h3
              class="bg-azul p-2 drop-shadow-lg rounded-sm border border-solid border-gray-50"
            >
              ${
                this._isComplete[currentPagination]
                  ? `${this._levelsWords[currentPagination]}`
                  : '? ? ?'
              }
            </h3>
          </div>
          <div class="w-full">
            <div
              class="flex flex-row justify-start items-center w-full pl-12"
            >
            <button
            
            disabled="${currentPagination > 2 ? 'false' : 'true'}"
              class="  shadow-xl rounded-full bg-gray-50 text-azul hover:text-orange-400 duration-200 ${
                currentPagination > 2 ? '' : 'opacity-0'
              }"
            >
                <i data-pagination="down" class="${
                  currentPagination > 2 ? 'btn__pagination cursor-pointer' : ''
                }  fa-solid fa-circle-left text-5xl rounded-full"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-[50%] h-full bg-page2 bg-cover flex flex-col justify-end items-center pb-8"
        >
          <p
            class="font-jakarta text-gray-700 text-lg bg-gray-50 p-2 rounded-lg shadow-md mb-4"
          >
          ${
            this._isComplete[currentPagination + 1]
              ? this._levels[currentPagination + 1]
              : '? ? ?'
          }
          </p>
          <img
            src="${
              this._isComplete[currentPagination + 1]
                ? `./assets/memory-${currentPagination + 1}.png`
                : './assets/ops.png'
            }"
            alt=""
            class="w-[80%] shadow-xl rounded-lg border-solid border-[2px] border-brancoAzulado"
          />
          <div
            class="flex flex-row justify-center items-center gap-4 text-3xl font-amatic text-gray-50 pt-6"
          >
          <a
          ${
            this._isComplete[currentPagination + 1]
              ? `href="./assets/memory-${currentPagination + 1}.png"`
              : ''
          }
          class="bg-orange-400 rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg p-2 hover:bg-azulEscuro duration-300"
          download="${this._levelsWords[currentPagination + 1]} - The Map of Me"
          ><i class="fa-solid fa-${
            this._isComplete[currentPagination + 1] ? 'floppy-disk' : 'lock'
          } drop-shadow-lg"></i
        ></a>
            <h3
              class="bg-azul p-2 drop-shadow-lg rounded-sm border border-solid border-gray-50"
            >
            ${
              this._isComplete[currentPagination + 1]
                ? `${this._levelsWords[currentPagination + 1]}`
                : '? ? ?'
            }
            </h3>
          </div>
          <div class="w-full">
            <div class="flex flex-row justify-end items-center w-full pr-12">
              <button
              
              disabled="${currentPagination <= 6 ? 'false' : 'true'}"
                class=" shadow-xl rounded-full bg-gray-50 text-azul hover:text-orange-400 duration-200 ${
                  currentPagination <= 6 ? '' : 'opacity-0'
                }"
              >
                <i data-pagination="up" class=" ${
                  currentPagination <= 6 ? 'btn__pagination cursor-pointer' : ''
                } fa-solid fa-circle-right text-5xl rounded-full"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
        `;
  }

  renderMemories() {}
}

export default new MemoriesView();
