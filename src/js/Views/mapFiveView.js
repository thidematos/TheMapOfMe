import View from './view.js';
import Puzzle from '../puzzle.js';

class levelFiveView extends View {
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
        <main class="bg-gray-50 flex flex-col justify-center items-center gap-10">
              <div
                class="modal hidden bg-gray-100 w-[70vw] h-[70vh] absolute z-[9999] rounded-lg shadow-lg flex-row justify-center items-center p-10"
              >
                <img src="assets/end-5.png" alt="" class="w-[40%]" />
                <div class="flex flex-col justify-evenly items-center w-1/2 h-full py-10 pl-10">
                  <h1 class="font-amatic text-5xl text-orange-300 font-bold">
                  Uma risada tímida!
                  </h1>
                  <p class="text-lg font-jakarta text-gray-700 ">
                      ${data.currentUser.name} deu uma risada tímida, percebendo que o filhote estava apenas curioso, e não ameaçador. Ele se sentiu aliviado e riu de toda a situação!
                  </p>
                  <p class="text-lg font-jakarta text-gray-700 ">
                      Afinal, o ursinho estava apenas procurando sua mamãe!
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
                  <img src="assets/puzzle-map-5.png" class="w-[50%] borders" alt="" />
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
                    class="hint__wrapper bg-brancoAzulado p-2 flex flex-col justify-center items-center gap-2 rounded-lg shadow-lg text-gray-900"
                  >
                    <img src="" alt="" />
                    <h3 class="hint__title font-amatic text-5xl">
                      O susto do urso!
                    </h3>
                    <p class="hint__description text-xl text-center">
                    ${data.currentUser.name} se viu diante de uma cena inesperada: um adorável filhote de urso brincando entre as árvores. A surpresa rapidamente se transformou em susto quando o filhote olhou em sua direção e soltou um pequeno rugido! Com o susto, ${data.currentUser.name} desequilibrou e caiu no rio!
                      ${data.currentUser.name} ficou 
                      <span class="hint--strong text-xl">envergonhado!</span>
                    </p>
                    <p class="hint__keyword text-xl flex flex-row items-center gap-2">
                      Em uma situação atrapalhada, ${data.currentUser.name} ficou
                      <span class="hint--strong">envergonhado!</span>
                    </p>
                  </div>
                  <img src="assets/tree.png" alt="" class="hint__img" />
                </header>
              </nav>
              <main class="flex flex-col justify-center items-center gap-5">
                <h2 class="font-amatic font-bold text-4xl text-gray-700">
                  Veja o encontro de ${data.currentUser.name} com o urso!
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
    this.app = new Puzzle(4, 4, 'piece-puzzleFive');
    this.app.puzzleID = 'mapFive';
  }
}

export default new levelFiveView();
