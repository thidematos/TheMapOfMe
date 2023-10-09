import View from './view.js';
import Puzzle from '../puzzle.js';

class levelSixView extends View {
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
        <main class="bg-gray-50 flex flex-col justify-center items-center gap-10">
              <div
                class="modal hidden bg-gray-100 w-[70vw] h-[70vh] absolute z-[9999] rounded-lg shadow-lg flex-row justify-center items-center p-10"
              >
                <img src="assets/end-6.png" alt="" class="w-[40%]" />
                <div class="flex flex-col justify-evenly items-center w-1/2 h-full py-10 pl-10">
                  <h1 class="font-amatic text-5xl text-orange-300 font-bold">
                  Um simples ato de bondade podia fazer toda a diferença!
                  </h1>
                  <p class="text-lg font-jakarta text-gray-700">
                      Pouco tempo depois, em uma área aberta, ${data.currentUser.name} achou a mamãe Urso! Ela estava com o Sr. Tamanduá, em um acampamento, chamando por seu filhote... O filhote correu alegremente para sua mãe, e ${data.currentUser.name} pôde ver o alívio e a alegria nos olhos da Sra. Urso.
                  </p>
                  <p class="text-lg font-jakarta text-gray-700">
                    ${data.currentUser.name} se colocou no lugar do filhote Urso. Por isso, o reencontro também deixou ${data.currentUser.name} emocionado. Foi uma sensação de alegria e carinho muito grande!
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
                  <img src="assets/puzzle-map-6.png" class="w-[50%] borders" alt="" />
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
                      A mamãe urso e o Sr. Tamanduá.
                    </h3>
                    <p class="hint__description text-xl text-center">
                    Enquanto o filhote de urso olhava triste à sua volta, ${data.currentUser.name} percebeu que ele estava em busca de sua mãe. ${data.currentUser.name} imaginou como seria se ela mesma estivesse perdida e confusa, procurando por alguém querido.
                      ${data.currentUser.name} sentiu 
                      <span class="hint--strong text-xl">compaixão</span> pelo filhote urso!!
                    </p>
                    <p class="hint__keyword text-xl flex flex-row items-center gap-2">
                      Diante da dificuldade do filhote Urso, ${data.currentUser.name} decidiu ajudá-lo, em um gesto de 
                      <span class="hint--strong">empatia!</span>
                    </p>
                  </div>
                  <img src="assets/bear-family.png" alt="" class="hint__img" />
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
    this.app = new Puzzle(5, 4, 'piece-puzzleSix');
    this.app.puzzleID = 'mapSix';
  }
}

export default new levelSixView();
