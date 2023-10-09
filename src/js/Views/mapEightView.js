import View from './view.js';
import Puzzle from '../puzzle.js';

class levelEightView extends View {
  constructor() {
    super();
  }

  generateHTML(data) {
    return `
        <main class="bg-gray-50 flex flex-col justify-center items-center gap-10">
              <div
                class="modal hidden bg-gray-100 w-[70vw] h-[70vh] absolute z-[9999] rounded-lg shadow-lg flex-row justify-center items-center p-10"
              >
                <img src="assets/end-8.png" alt="" class="w-[40%]" />
                <div class="flex flex-col justify-evenly items-center w-1/2 h-full py-10 pl-10">
                  <h1 class="font-amatic text-5xl text-orange-300 font-bold">
                    O tesouro sempre esteve dentro de nós!
                  </h1>
                  <p class="text-lg font-jakarta text-gray-700 ">
                    Por fim, o pai de ${data.currentUser.name} finalmente lhe contou o segredo da floresta. O verdadeiro tesouro que a floresta guarda sempre esteve na <span class="hint--strong-minor">aventura</span>, nas experiências e nas <span class="hint--strong-minor">emoções</span> que dividiram nessa jornada... 
                  </p>
                  <p class="text-lg font-jakarta text-gray-700 ">
                    Enquanto o sol se despedia, pintando o céu com tons dourados e rosados, ${data.currentUser.name} percebeu que o tesouro que tanto buscava estava diante dele o tempo todo, em sua jornada inesquecível pelo seu <span class="hint--strong-minor ">Map of Me!</span>.  
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
                  <img src="assets/puzzle-map-8.png" class="w-[50%] borders" alt="" />
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
                      A aventura chega ao fim... 
                    </h3>
                    <p class="hint__description text-xl text-center">
                      Quando o sol começava a se pôr no horizonte, ${data.currentUser.name} avistou uma figura familiar entre as árvores. Emocionado, ${data.currentUser.name} avistou seu pai, sorrindo orgulhosamente para ele. Seu pai sempre esteve ao seu lado, apoiando ${data.currentUser.name} de longe, e deixando ele explorar a floresta e descobrir as <span class="hint--strong text-xl">riqueza das emoções</span> por conta própria. 
                    </p>
                    <p class="hint__description text-xl text-center">
                      Os novos amigos que ${data.currentUser.name} havia feito durante sua aventura apareceram um por um, trazendo consigo as histórias e laços que tinham formado. Cada um trazia uma lembrança especial da jornada...
                    </p>
                  </div>
                  <img src="assets/father.png" alt="" class="hint__img" />
                </header>
              </nav>
              <main class="flex flex-col justify-center items-center gap-5">
                <h2 class="font-amatic font-bold text-4xl text-gray-700">
                  Qual será o tesouro que a floresta guardava?
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
                  class="btn__hash absolute left-32 top-[60%] flex flex-col justify-center items-center font-amatic text-3xl text-gray-700 font-bold bg-azulClaro p-4 rounded-lg shadow-xl drop-shadow-lg   hover:bg-orange-400 hover:text-gray-50"
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
    this.app = new Puzzle(6, 4, 'piece-puzzleEight');
    this.app.puzzleID = 'mapEight';
  }
}

export default new levelEightView();
