import View from './view.js';
import Puzzle from '../puzzle.js';

class levelSevenView extends View {
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
        <main class="bg-gray-600 flex flex-col justify-center items-center gap-10">
              <div
                class="modal hidden bg-gray-100 w-[60vw] h-[60vh] absolute z-[9999] rounded-lg shadow-lg flex-row justify-center items-center p-10"
              >
                <img src="assets/end-7.png" alt="" class="w-[40%]" />
                <div class="flex flex-col justify-evenly items-center w-1/2 h-full py-10 pl-10">
                  <h1 class="font-amatic text-5xl text-orange-300 font-bold">
                    Sempre há uma esperança!
                  </h1>
                  <p class="text-lg font-jakarta text-gray-700 ">
                      Quando estamos com <span class="hint--strong-minor text-xl">medo</span> e cansados, é normal pensarmos em desistir. A <span class="hint--strong-minor text-xl">esperança</span> pode diminuir...
                  </p>
                  <p class="text-lg font-jakarta text-gray-700 ">
                    O Sr. Panda e Pandinha disseram para ${data.currentUser.name} que o segredo da floresta era seguir sempre em frente. A floresta recompensa aqueles que não desistem! Estas palavras trouxeram a  <span class="hint--strong-minor text-xl">inspiração</span> e a esperança que ${data.currentUser.name} precisava para continuar...               
                  </p>
                  <a
                    data-hash="adventure-map"
                    class="btn__hash flex flex-col justify-center items-center font-amatic text-3xl drop-shadow-md font-bold  p-4 rounded-lg shadow-xl text-azul   hover:bg-orange-400 hover:text-gray-50"
                    ><img
                      src="assets/map.png"
                      alt=""
                      class="drop-shadow-lg w-[40%]"
                    />Mapa da Aventura!</a
                  >
                </div>
                <div class="hidden flex-col justify-center items-center gap-3">
                  <img src="assets/puzzle-map-7.png" class="w-[50%] borders" alt="" />
                  <progress
                    value="0"
                    max="100"
                    id="progressBar"
                    class="bg-orange-300 rounded-lg"
                  ></progress>
                </div>
              </div>
              <div class="modal__cover hidden absolute z-[9998]"></div>
              <nav class="w-screen p-8 flex flex-row justify-center items-center gap-8">
                <div class="flex flex-row justify-center items-center w-[30%]">
                  <img src="assets/logo300.png" alt="" class="w-[30%]" />
                  <h1 class="font-amatic text-7xl">The Map of Me</h1>
                </div>
                <header
                  class="hint__container flex flex-row justify-center items-center gap-6 w-[70%]"
                >
                  <div
                    class="hint__wrapper bg-brancoAzulado p-2 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg text-gray-700"
                  >
                    <img src="" alt="" />
                    <h3 class="hint__title font-amatic text-5xl">
                      Uma floresta sem fim?
                    </h3>
                    <p class="hint__description text-xl text-center">
                      ${data.currentUser.name} continuava em sua aventura pela floresta... Como não achou nenhum caminho que parecesse levar para o tesouro escondido, ou até mesmo para fora da floresta, nosso explorador ficou com <span class="hint--strong text-xl">medo</span>. ${data.currentUser.name} estava perdendo a <span class="hint--strong text-xl">esperança</span>
                    </p>
                    <p class="hint__description text-xl text-center">
                        Prestes a desistir, ${data.currentUser.name}, Milo e Max encontraram o Sr. Panda e Pandinha! Panda e Pandinha disseram o segredo da floresta para ${data.currentUser.name}... 
                    </p>
                  </div>
                  <img src="assets/panda.png" alt="" class="hint__img" />
                </header>
              </nav>
              <main class="flex flex-col justify-center items-center gap-5">
                <h2 class="font-amatic font-bold text-4xl text-gray-50">
                  O que o Sr. Panda e Pandinha disseram para nosso explorador?
                </h2>
                <div class="spaces__container borders w-[1000px] h-[600px]"></div>
                <div>
                  <img
                    src="assets/dica.png"
                    alt=""
                    class="hint__btn absolute right-32 top-[60%] drop-shadow-xl"
                  />
                </div>
                <a
                  data-hash="adventure-map"
                  class="btn__hash absolute left-32 top-[60%] flex flex-col justify-center items-center font-amatic text-3xl text-gray-700 font-bold bg-azulClaro p-4 rounded-lg shadow-xl drop-shadow-lg hover:bg-orange-400 hover:text-gray-50"
                  ><img src="assets/map.png" alt="" class="drop-shadow-md" />Mapa da
                  Aventura!</a
                >
              </main>
              <aside
                class="pieces__container flex flex-row flex-nowrap overflow-x-scroll w-[80vw] gap-8"
              ></aside>
              <footer class=""></footer>
            </main>
        `;
  }

  renderHTML(component, data) {
    this._clearParentElement();
    this._data = data;

    this._body.insertAdjacentHTML('beforeend', component);
    this.startPuzzle();
  }

  startPuzzle() {
    this.app = new Puzzle(6, 3, 'piece-puzzleSeven');
    this.app.puzzleID = 'mapSeven';
  }
}

export default new levelSevenView();
